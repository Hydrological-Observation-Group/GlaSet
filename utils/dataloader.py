## author: xin luo
## create: 2025.6.18
## des: dataset and dataloader for deep learning tasks in remote sensing

import random
import torch
import rasterio as rio
import numpy as np


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

class Normalize:
    def __init__(self, max_bands, min_bands):
        self.max = max_bands
        self.min = min_bands
        
    def __call__(self, image):
        if isinstance(self.max, (int, float)):
            self.max = [self.max] * image.shape[-1]
        if isinstance(self.min, (int, float)):
            self.min = [self.min] * image.shape[-1]
        normalized = []
        for b in range(image.shape[-1]):
            band = image[:, :, b].astype(float)
            band_norm = (band - self.min[b]) / (self.max[b] - self.min[b] + 1e-6)
            normalized.append(band_norm)
        normalized = np.stack(normalized, axis=-1)
        return np.clip(normalized, 0.0, 1.0)

def calculate_histogram_params(band_data):
    clean_data = band_data[~np.isnan(band_data)].flatten()
    if len(clean_data) == 0:
        return 0.0, 0.0
    sorted_data = np.sort(clean_data)
    n = len(sorted_data)
    
    lower_idx = max(0, int(0.05 * n))
    upper_idx = min(n-1, int(0.95 * n))
    min_val = np.mean(sorted_data[:lower_idx+1]) if lower_idx > 0 else sorted_data[0]
    max_val = np.mean(sorted_data[upper_idx:]) if upper_idx < n else sorted_data[-1]
    return max_val, min_val

def read_normalize(scene_arr):
    max_bands, min_bands = [], []
    for b in range(scene_arr.shape[-1]):
        max_val, min_val = calculate_histogram_params(scene_arr[:, :, b])
        max_bands.append(max_val)
        min_bands.append(min_val)
    
    normalizer = Normalize(max_bands, min_bands)
    scene_norm_arr = normalizer(scene_arr)
    scene_norm_arr[np.isnan(scene_norm_arr)] = 0
    return scene_norm_arr

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
        if 's2_scene' in scene_path: scene_arr = scene_arr / 10000  # scale to [0, 1] if needed, adjust based on your data
        else: scene_arr = scene_arr/ 65455  # scale to [0, 1] if needed, adjust based on your data
        with rio.open(truth_path) as truth_src:
            truth_arr = truth_src.read(1)  # (H, W)
        ## read dem
        if self.paths_dem is not None:
            dem_path = self.paths_dem[idx]
            with rio.open(dem_path) as dem_src:
                dem_arr = dem_src.read(1)  # (H, W)
            dem_arr = dem_arr[:, :, np.newaxis]  # expand to (H, W, 1)
            ## dem normalization
            dem_arr = dem_arr / 8848  # scale to [0, 1] if needed, adjust based on your data 
        scene_arr = np.concatenate([scene_arr, dem_arr], axis=-1)  # (H, W, C+1)
        scene_arr = scene_arr.astype(np.float32).transpose((2, 0, 1))
        patch, truth = crop(size=(512, 512))(scene_arr, truth_arr)  # crop
        truth = truth[np.newaxis, :].astype(np.float32)  # (1, H, W)
        patch = torch.from_numpy(patch).float()
        truth = torch.from_numpy(truth).float()
        return patch, truth
    def __len__(self):
        return len(self.paths_scene)
