## author: xin luo
## create: 2025.6.18
## des: dataset and dataloader for deep learning tasks in remote sensing

import random
import torch
import rasterio as rio
import numpy as np

scale_l5789 = 65455  # max value of Landsat 5,7,8,9
scale_s2 = 10000  # max value of Sentinel-2
max_dem = 8848  # max value of DEM (Mount Everest)

## create related functions
## - crop scene to patches
class crop:
    '''randomly crop corresponding to specific patch size'''
    def __init__(self, size=(256,256)):
        self.size = size
    def __call__(self, image, truth):
        '''size: (height, width)'''
        start_h = random.randint(0, truth.shape[0]-self.size[0])
        start_w = random.randint(0, truth.shape[1]-self.size[1])
        patch = image[:,start_h:start_h+self.size[0],start_w:start_w+self.size[1]]
        truth = truth[start_h:start_h+self.size[0], start_w:start_w+self.size[1]]
        return patch, truth

### - Dataset definition(consider DEM band)
class Dataset(torch.utils.data.Dataset):
    def __init__(self, paths_scene, paths_truth, paths_dem=None):
        self.paths_scene = paths_scene
        self.paths_truth = paths_truth
        self.paths_dem = paths_dem
    def __getitem__(self, idx):
        # Load scene and truth image
        scene_path = self.paths_scene[idx]
        truth_path = self.paths_truth[idx]
        ## read scene and truth images
        with rio.open(scene_path) as src:
            scene_arr = src.read().transpose((1, 2, 0))  # (H, W, C)
        ## scene normalization
        if 's2_scene' in scene_path: scene_arr = scene_arr / scale_s2  # scale to [0, 1] if needed, adjust based on your data
        else: scene_arr = scene_arr/ scale_l5789  # scale to [0, 1] if needed, adjust based on your data
        with rio.open(truth_path) as truth_src:
            truth_arr = truth_src.read(1)  # (H, W)
        ## read dem
        if self.paths_dem is not None:
            dem_path = self.paths_dem[idx]
            with rio.open(dem_path) as dem_src:
                dem_arr = dem_src.read(1)  # (H, W)
            dem_arr = dem_arr[:, :, np.newaxis]  # expand to (H, W, 1)
            ## dem normalization
            dem_arr = dem_arr / max_dem  # scale to [0, 1] if needed, adjust based on your data 
        scene_arr = np.concatenate([scene_arr, dem_arr], axis=-1)  # (H, W, C+1)
        scene_arr = scene_arr.astype(np.float32).transpose((2, 0, 1))
        patch, truth = crop(size=(512, 512))(scene_arr, truth_arr)  # crop
        truth = truth[np.newaxis, :].astype(np.float32)  # (1, H, W)
        patch = torch.from_numpy(patch).float()
        truth = torch.from_numpy(truth).float()
        return patch, truth
    def __len__(self):
        return len(self.paths_scene)
