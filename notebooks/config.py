'''
author: xin luo
create: 2025.12.4
des: configuration file for notebooks.
'''


### (1) tra and val scene ids, from notebooks/1_dset_prepare.ipynb
scene_ids_tra = [1, 2, 3, 5, 6, 7, 9, 10, 11, 
                 13, 14, 15, 17, 18, 19, 21, 
                 22, 23, 25, 26, 27, 29, 30, 
                 31, 33, 34, 35, 37, 38, 39, 
                 41, 42, 43, 45, 46, 47, 49, 
                 50, 51, 53, 54, 55, 57, 58, 
                 59, 61, 62, 63]
scene_ids_val = [0, 4, 8, 12, 16, 20, 24, 28, 
                 32, 36, 40, 44, 48, 52, 56, 60, 64]


### (2) max and min values for different satellites' scenes (obtained from notebooks/2_dset_check.ipynb)
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



