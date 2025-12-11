'''
author: xin luo
create: 2025.12.4
des: configuration file for notebooks.
'''

from glob import glob

## directories/files
dir_scene = 'data/dset/scene/'
dir_dem = 'data/dset/dem/'
dir_truth = 'data/dset/truth/' 
## paths
paths_truth_vec = sorted(glob('data/dset/truth/*.gpkg'))
paths_truth = sorted(glob('data/dset/truth/*.tif'))
paths_scene = [path.replace('truth','scene') for path in paths_truth]
paths_dem = [path.replace('.tif', '_dem.tif').replace('truth','dem') for path in paths_truth]

## training/validation split
ids_scene = [path.split('/')[-1].split('.')[0] for path in paths_truth_vec] 
ids_scene_val = ids_scene[::4]  ## every 4th scene for validation
ids_scene_tra = sorted(list(set(ids_scene) - set(ids_scene_val)))



### (1) max and min values for different satellites' scenes (obtained from notebooks/2_dset_check.ipynb)
max_scenes = {'l5': 65454.0, 
              'l7': 56297.0, 
              'l8': 65439.0, 
              'l9': 65453.0, 
              's2': 19312.0} 
min_scenes = {'l5': 4891.0,  
              'l7': 6719.0,  
              'l8': 1.0,     
              'l9': 1.0,     
              's2': 1.0}

max_dem = 8848.0  # highest point on Earth: Mount Everest
min_dem = -420.0  # lowest point on Earth: Dead Sea Shore 



