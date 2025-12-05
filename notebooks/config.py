'''
author: xin luo
create: 2025.12.4
des: configuration file for notebooks.
'''



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



