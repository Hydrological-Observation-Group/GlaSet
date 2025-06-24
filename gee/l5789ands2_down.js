// author: xin luo
// create: 2020.11.9 update: 2025.6.21
// des: This code selects a satellite image, adds the best available DEM data as a new band, and exports it to Google Drive.

/////////////////////////////////////////
// --- User Configuration ---
var image_id = 'LANDSAT/LC09/C02/T1_L2/LC09_052001_20230818';
var region = ee.Geometry.Rectangle(-77.07, 80.51, -74.01, 81.00);

// --- Band Selection for Different Satellites ---
var bands_sel = ['SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B6', 'SR_B7']; // Landsat 9
var bands_vis = ['SR_B5', 'SR_B4', 'SR_B3'];                             // Landsat 9
// var bands_sel = ['SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B6', 'SR_B7']; // Landsat 8
// var bands_vis = ['SR_B5', 'SR_B4', 'SR_B3'];                             // Landsat 8
// var bands_sel = ['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7']; // Landsat 5, 7
// var bands_vis = ['SR_B5', 'SR_B4', 'SR_B3'];                             // Landsat 5, 7
// var bands_sel = ['B2', 'B3', 'B4', 'B8', 'B11', 'B12'];                // Sentinel 2
// var bands_vis = ['B11', 'B8', 'B4'];                                     // Sentinel 2

// --- Export Settings ---
var export_description = 'l9_scene_01_Dem';
var export_folder = 'landsat5789_s2_glacier';
var export_scale = 30;

// --- DEM Dataset Configuration ---
// The script will try to load these in order. The first one that has valid data for the region will be used.
var demDatasets = [
  {id: 'NASA/NASADEM_HGT/001', band: 'elevation', type: 'Image', name: 'NASADEM'},
  {id: 'JAXA/ALOS/AW3D30/V3_2', band: 'DSM', type : 'ImageCollection', name: 'ALOS World 3D 30m (AW3D30)'},
  {id: 'USGS/SRTMGL1_003', band: 'elevation', type: 'Image', name: 'SRTM DEM'}
];

/////////////////////////////////////////
// --- Main Processing Logic ---

// 1. Load and clip the base satellite image.
var baseImage = ee.Image(image_id).clip(region).select(bands_sel);
print('Original Image:', baseImage);

// 2. Loop through DEM datasets to find the first available one.
var finalImage = null; // This will hold the image with the DEM band.
var demSource = 'No DEM available'; // This will store the name of the used DEM.

for (var i = 0; i < demDatasets.length; i++) {
  var dataset = demDatasets[i];
  print('Attempting to load DEM: ' + dataset.name);
  
  var dem = null;
  try {
    // Load the DEM based on whether it's a single Image or an ImageCollection.
    if (dataset.type === 'Image') {
      dem = ee.Image(dataset.id).select(dataset.band).clip(region);
    } else if (dataset.type === 'ImageCollection') {
      dem = ee.ImageCollection(dataset.id)
              .filterBounds(region)
              .mosaic()
              .select(dataset.band)
              .clip(region);
    }
  } catch (e) {
    print('Failed to load ' + dataset.name + ': ' + e.message);
    continue; // Try the next dataset.
  }

  // Check if the loaded DEM has valid pixels in the region.
  var pixelCount = dem.reduceRegion({
    reducer: ee.Reducer.count(),
    geometry: region,
    scale: export_scale,
    maxPixels: 1e9
  }).get(dataset.band);
  
  var validCount = ee.Number(pixelCount).getInfo(); // Use getInfo() to get the actual number for the check.
  // If valid pixels are found, add the DEM as a band and stop searching.
  if (validCount > 0) {
    print('→ Successfully obtained DEM from: ' + dataset.name);
    demSource = dataset.name;
    finalImage = baseImage.addBands(dem.rename('elevation')).set('dem_source', demSource);
    break; // Exit the loop since we found a valid DEM.
  }
}

// 3. If no DEM was found after checking all sources, use the original image.
if (!finalImage) {
  print('Warning: No valid DEM found. Using original image without elevation band.');
  finalImage = baseImage;
}

print('Final Image to be Exported:', finalImage);

// --- Visualization ---
Map.centerObject(region, 9);
Map.addLayer(baseImage, {bands: bands_vis, min: 0, max: 40000}, 'Original Scene');

// If the elevation band was successfully added, display it on the map.
if (finalImage.bandNames().contains('elevation')) {
  Map.addLayer(finalImage.select('elevation'), {min: 0, max: 4000, palette: ['blue', 'green', 'yellow', 'red']}, 'Elevation (DEM)');
}

// --- Export to Google Drive ---
Export.image.toDrive({
  image: finalImage.toUint16(), // Convert to Uint16 for smaller file size.
  description: export_description,
  folder: export_folder,
  scale: export_scale,
  fileFormat: 'GeoTIFF',
  region: region,
  maxPixels: 1e13
});



