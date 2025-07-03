// author: xin luo
// create: 2020.11.9 update: 2025.07.02
// des: This code selects and clips a satellite image and the corresponding DEM, then exports them as two separate files to Google Drive.

/////////////////////////////////////////
// --- User Configuration ---
var image_id = 'LANDSAT/LC09/C02/T1_L2/LC09_052001_20230818';
var region = ee.Geometry.Rectangle(-77.07, 80.51, -74.01, 81.00);

// --- Band Selection ---
var bands_sel = ['SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B6', 'SR_B7']; // Landsat 9
var bands_vis = ['SR_B5', 'SR_B4', 'SR_B3'];                          // Landsat 9
// var bands_sel = ['SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B6', 'SR_B7']; // Landsat 8
// var bands_vis = ['SR_B5', 'SR_B4', 'SR_B3'];                          // Landsat 8
// var bands_sel = ['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7']; // Landsat 5, 7
// var bands_vis = ['SR_B5', 'SR_B4', 'SR_B3'];                          // Landsat 5, 7
// var bands_sel = ['B2', 'B3', 'B4', 'B8', 'B11', 'B12'];              // Sentinel 2
// var bands_vis = ['B11', 'B8', 'B4'];                                  // Sentinel 2

// --- Export Settings ---
var base_name = 'l9_scene_01';    // Define a base name for easy management
var export_folder = 'landsat5789_s2_glacier';
/////////////////////////////////////////
// --- Main Processing Logic  ---

// 1. Load and clip images
// This baseImage is our reference;
var baseImage = ee.Image(image_id).clip(region).select(bands_sel);

var demImage = ee.ImageCollection('JAXA/ALOS/AW3D30/V4_1')
                  .filterBounds(region)
                  .mosaic()
                  .select('DSM')
                  .clip(region);

// 2. Get the projection of the base image to use as the alignment target.
//use the image's native projection.
var targetProjection = baseImage.select(0).projection();
var targetScale = targetProjection.nominalScale();
print('Using base image native projection:', targetProjection);
print('Target scale (m/px):', targetScale);



// 3. Resample the DEM data and scene data  to the base image's grid.
var baseImageAligned = baseImage.reproject({
  crs: targetProjection.crs(),
  scale: targetScale
});

var demAligned = demImage.reproject({
  crs: targetProjection.crs(),
  scale: targetScale
});

// --- Visualization ---
Map.centerObject(region, 9);
Map.addLayer(baseImage, {bands: bands_vis, min: 0, max: 40000, gamma: 1.2}, 'Original Image');
Map.addLayer(demAligned, {min: 0, max: 4000, palette: ['blue', 'green', 'yellow', 'red']}, 'Aligned DEM');

// 4. Export Images
// Export the base image, which maintains its original geometric state.
Export.image.toDrive({
  image: baseImageAligned.toUint16(),
  description: base_name,
  folder: export_folder,
  scale: targetScale, // Explicitly use the base image's resolution
  region: region,
  fileFormat: 'GeoTIFF',
  maxPixels: 1e13
});

// Export the DEM aligned with the base image.
Export.image.toDrive({
  image: demAligned.toInt16(),
  description: base_name + '_dem',
  folder: export_folder + '_DEM',
  scale: targetScale, // Use the same scale as the base image to ensure alignment
  region: region,
  fileFormat: 'GeoTIFF',
  maxPixels: 1e13
});