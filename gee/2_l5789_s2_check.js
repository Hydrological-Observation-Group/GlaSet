// author: xin luo, fawei kang
// created: 2020.11.25 update 2025.06.28
// des: check the selected landsat and sentinel images
// dem data (ALOS AW3D30 DEM)
////////////////////////////////////////////////////////////////
// ----------- Source images and scene region
// ----------- Landsat 9
// scene 01
var l9_region_01 = ee.Geometry.Rectangle(-77.07, 80.51, -74.01, 81.00);
var l9_scene_01 = ee.Image('LANDSAT/LC09/C02/T1_L2/LC09_052001_20230818').clip(l9_region_01);
print('l9_scene_01', l9_scene_01);

// scene 02
var l9_region_02 = ee.Geometry.Rectangle(-75.39, 81.10, -72.41, 81.55);
var l9_scene_02 = ee.Image('LANDSAT/LC09/C02/T1_L2/LC09_066244_20240705').clip(l9_region_02);
print('l9_scene_02', l9_scene_02);

// scene 03
var l9_region_03 = ee.Geometry.Rectangle(6.14, 59.87, 7.05, 60.32);
var l9_scene_03 = ee.Image('LANDSAT/LC09/C02/T1_L2/LC09_200018_20240918').clip(l9_region_03);
print('l9_scene_03', l9_scene_03);

// scene 04
var l9_region_04 = ee.Geometry.Rectangle(49.20, 80.53, 51.99, 80.98);
var l9_scene_04 = ee.Image('LANDSAT/LC09/C02/T1_L2/LC09_224243_20240809').clip(l9_region_04);
print('l9_scene_04', l9_scene_04);

// scene 05
var l9_region_05 = ee.Geometry.Rectangle(-28.05, 70.69, -26.68, 71.14);
var l9_scene_05 = ee.Image('LANDSAT/LC09/C02/T1_L2/LC09_229010_20240828').clip(l9_region_05);
print('l9_scene_05', l9_scene_05);

// scene 06
var l9_region_06 = ee.Geometry.Rectangle(91.13, 32.95, 91.67, 33.40);
var l9_scene_06 = ee.Image('LANDSAT/LC09/C02/T1_L2/LC09_138037_20230914').clip(l9_region_06);
print('l9_scene_06', l9_scene_06);

// scene 07
var l9_region_07 = ee.Geometry.Rectangle(98.48, 31.51, 99.01, 31.96);
var l9_scene_07 = ee.Image('LANDSAT/LC09/C02/T1_L2/LC09_133038_20221111').clip(l9_region_07);
print('l9_scene_07', l9_scene_07);

// scene 08
var l9_region_08 = ee.Geometry.Rectangle(84.19, 30.08, 84.71, 30.53);
var l9_scene_08 = ee.Image('LANDSAT/LC09/C02/T1_L2/LC09_142039_20220705').clip(l9_region_08);
print('l9_scene_08', l9_scene_08);

// scene 09
var l9_region_09 = ee.Geometry.Rectangle(79.95, 31.51, 80.47, 31.96);
var l9_scene_09 = ee.Image('LANDSAT/LC09/C02/T1_L2/LC09_145038_20240917').clip(l9_region_09);
print('l9_scene_09', l9_scene_09);

// scene 10
var l9_region_10 = ee.Geometry.Rectangle(94.56, 80.53, 97.36, 80.98);
var l9_scene_10 = ee.Image('LANDSAT/LC09/C02/T1_L2/LC09_174001_20220721').clip(l9_region_10);
print('l9_scene_10', l9_scene_10);

// scene 11
var l9_region_11 = ee.Geometry.Rectangle(-88.99, 81.60, -85.83, 82.05);
var l9_scene_11 = ee.Image('LANDSAT/LC09/C02/T1_L2/LC09_062246_20220821').clip(l9_region_11);
print('l9_scene_11', l9_scene_11);

// scene 12
var l9_region_12 = ee.Geometry.Rectangle(-70.97, 76.82, -68.9, 77.27);
var l9_scene_12 = ee.Image('LANDSAT/LC09/C02/T1_L2/LC09_034005_20220918').clip(l9_region_12);
print('l9_scene_12', l9_scene_12);

// scene 13
var l9_region_13 = ee.Geometry.Rectangle(20.81, 77.89, 22.99, 78.34);
var l9_scene_13 = ee.Image('LANDSAT/LC09/C02/T1_L2/LC09_022240_20240717').clip(l9_region_13);
print('l9_scene_13', l9_scene_13);

// ----------- Landsat 8
// scene 01
var l8_region_01 = ee.Geometry.Rectangle(103.46, 78.90, 105.84, 79.35);
var l8_scene_01 = ee.Image('LANDSAT/LC08/C02/T1_L2/LC08_198241_20220721').clip(l8_region_01);
print('l8_scene_01', l8_scene_01);

// scene 02
var l8_region_02 = ee.Geometry.Rectangle(-73.09, -49.09, -72.41, -48.64);
var l8_scene_02 = ee.Image('LANDSAT/LC08/C02/T1_L2/LC08_231094_20210303').clip(l8_region_02);
print('l8_scene_02', l8_scene_02);

// scene 03
var l8_region_03 = ee.Geometry.Rectangle(-72.84, 70.69, -71.47, 71.14);
var l8_scene_03 = ee.Image('LANDSAT/LC08/C02/T1_L2/LC08_025010_20190701').clip(l8_region_03);
print('l8_scene_03', l8_scene_03);

// scene 04
var l8_region_04 = ee.Geometry.Rectangle(-73.15, 69.38, -71.86, 69.83);
var l8_scene_04 = ee.Image('LANDSAT/LC08/C02/T1_L2/LC08_024011_20200829').clip(l8_region_04);
print('l8_scene_04', l8_scene_04);

// scene 05
var l8_region_05 = ee.Geometry.Rectangle(78.41, 31.52, 78.94, 31.97);
var l8_scene_05 = ee.Image('LANDSAT/LC08/C02/T1_L2/LC08_146038_20150908').clip(l8_region_05);
print('l8_scene_05', l8_scene_05);

// scene 06
var l8_region_06 = ee.Geometry.Rectangle(95.56, 78.86, 98.17, 79.36);
var l8_scene_06 = ee.Image('LANDSAT/LC08/C02/T1_L2/LC08_203241_20240729').clip(l8_region_06);
print('l8_scene_06', l8_scene_06);

// scene 07
var l8_region_07 = ee.Geometry.Rectangle(-36.46, 81.60, -33.30, 82.05);
var l8_scene_07 = ee.Image('LANDSAT/LC08/C02/T1_L2/LC08_028246_20230701').clip(l8_region_07);
print('l8_scene_07', l8_scene_07);

// scene 08
var l8_region_08 = ee.Geometry.Rectangle(72.73, 38.68, 73.30, 39.13);
var l8_scene_08 = ee.Image('LANDSAT/LC08/C02/T1_L2/LC08_151033_20200823').clip(l8_region_08);
print('l8_scene_08', l8_scene_08);

// scene 09
var l8_region_09 = ee.Geometry.Rectangle(78.05, 35.82, 78.60, 36.27);
var l8_scene_09 = ee.Image('LANDSAT/LC08/C02/T1_L2/LC08_147035_20190926').clip(l8_region_09);
print('l8_scene_09', l8_scene_09);

// scene 10
var l8_region_10 = ee.Geometry.Rectangle(-30.28, 81.59, -27.12, 82.05);
var l8_scene_10 = ee.Image('LANDSAT/LC08/C02/T1_L2/LC08_024246_20230705').clip(l8_region_10);
print('l8_scene_10', l8_scene_10);

// scene 11
var l8_region_11 = ee.Geometry.Rectangle(58.13, 81.08, 61.40, 81.58);
var l8_scene_11 = ee.Image('LANDSAT/LC08/C02/T1_L2/LC08_187248_20240729').clip(l8_region_11);
print('l8_scene_11', l8_scene_11);

// scene 12
var l8_region_12 = ee.Geometry.Rectangle(-65.49, 67.16, -64.27, 66.71);
var l8_scene_12 = ee.Image('LANDSAT/LC08/C02/T1_L2/LC08_017013_20240807').clip(l8_region_12);
print('l8_scene_12', l8_scene_12);

// scene 13
var l8_region_13 = ee.Geometry.Rectangle(-84.20, 74.46, -82.34, 74.95);
var l8_scene_13 = ee.Image('LANDSAT/LC08/C02/T1_L2/LC08_037007_20220830').clip(l8_region_13);
print('l8_scene_13', l8_scene_13);

// ------ Landsat 7
// scene 01
var l7_region_01 = ee.Geometry.Rectangle(-74.52, 70.69, -73.14, 71.14);
var l7_scene_01 = ee.Image('LANDSAT/LE07/C02/T1_L2/LE07_026010_20020802').clip(l7_region_01);
print('l7_scene_01', l7_scene_01);

// scene 02
var l7_region_02 = ee.Geometry.Rectangle(-88.88, 74.49, -87.17, 74.94);
var l7_scene_02 = ee.Image('LANDSAT/LE07/C02/T1_L2/LE07_040007_20020719').clip(l7_region_02);
print('l7_scene_02', l7_scene_02);

// scene 03
var l7_region_03 = ee.Geometry.Rectangle(-28.28, 73.26, -26.70, 73.71);
var l7_scene_03 = ee.Image('LANDSAT/LE07/C02/T1_L2/LE07_232008_20020704').clip(l7_region_03);
print('l7_scene_03', l7_scene_03);

// scene 04
var l7_region_04 = ee.Geometry.Rectangle(95.37, 31.52, 95.90, 31.97);
var l7_scene_04 = ee.Image('LANDSAT/LE07/C02/T1_L2/LE07_135038_19990923').clip(l7_region_04);
print('l7_scene_04', l7_scene_04);

// scene 05
var l7_region_05 = ee.Geometry.Rectangle(-80.18, 71.99, -78.71, 72.44);
var l7_scene_05 = ee.Image('LANDSAT/LE07/C02/T1_L2/LE07_031009_20000815').clip(l7_region_05);
print('l7_scene_05', l7_scene_05);

// scene 06
var l7_region_06 = ee.Geometry.Rectangle(-51.76, 68.06, -50.55, 68.51);
var l7_scene_06 = ee.Image('LANDSAT/LE07/C02/T1_L2/LE07_009012_20000922').clip(l7_region_06);
print('l7_scene_06', l7_scene_06);

// scene 07
var l7_region_07 = ee.Geometry.Rectangle(-90.68, 79.81, -88.09, 80.26);
var l7_scene_07 = ee.Image('LANDSAT/LE07/C02/T1_L2/LE07_056002_20000729').clip(l7_region_07);
print('l7_scene_07', l7_scene_07);

// scene 08
var l7_region_08 = ee.Geometry.Rectangle(-81.90, 76.83, -79.89, 77.28);
var l7_scene_08 = ee.Image('LANDSAT/LE07/C02/T1_L2/LE07_040005_20020719').clip(l7_region_08);
print('l7_scene_08', l7_scene_08);

// scene 09
var l7_region_09 = ee.Geometry.Rectangle(-117.41, 51.47, -116.69, 51.92);
var l7_scene_09 = ee.Image('LANDSAT/LE07/C02/T1_L2/LE07_044024_20010914').clip(l7_region_09);
print('l7_scene_09', l7_scene_09);

// scene 10
var l7_region_10 = ee.Geometry.Rectangle(78.19, 41.54, 78.79, 41.99);
var l7_scene_10 = ee.Image('LANDSAT/LE07/C02/T1_L2/LE07_148031_20020825').clip(l7_region_10);
print('l7_scene_10', l7_scene_10);

// scene 11
var l7_region_11 = ee.Geometry.Rectangle(17.34, 78.89, 19.95, 79.38);
var l7_scene_11 = ee.Image('LANDSAT/LE07/C02/T1_L2/LE07_215003_20020713').clip(l7_region_11);
print('l7_scene_11', l7_scene_11);

// scene 12
var l7_region_12 = ee.Geometry.Rectangle(57.78, 74.46, 59.64, 74.96);
var l7_scene_12 = ee.Image('LANDSAT/LE07/C02/T1_L2/LE07_178007_20010808').clip(l7_region_12);
print('l7_scene_12', l7_scene_12);

// scene 13
var l7_region_13 = ee.Geometry.Rectangle(-55.44, 71.98, -53.97, 72.43);
var l7_scene_13 = ee.Image('LANDSAT/LE07/C02/T1_L2/LE07_015009_20020821').clip(l7_region_13);
print('l7_scene_13', l7_scene_13);

// ------ Landsat 5
// scene 01
var l5_region_01 = ee.Geometry.Rectangle(-73.59, -46.26, -72.94, -45.81);
var l5_scene_01 = ee.Image('LANDSAT/LT05/C02/T1_L2/LT05_232092_20041122').clip(l5_region_01);
print('l5_scene_01', l5_scene_01);

// scene 02
var l5_region_02 = ee.Geometry.Rectangle(-27.51, 80.54, -24.71, 81.00);
var l5_scene_02 = ee.Image('LANDSAT/LT05/C02/T1_L2/LT05_020001_19980805').clip(l5_region_02);
print('l5_scene_02', l5_scene_02);

// scene 03
var l5_region_03 = ee.Geometry.Rectangle(-28.12, 81.54, -24.98, 81.99);
var l5_scene_03 = ee.Image('LANDSAT/LT05/C02/T1_L2/LT05_016247_19890731').clip(l5_region_03);
print('l5_scene_03', l5_scene_03);

// scene 04
var l5_region_04 = ee.Geometry.Rectangle(-18.77, 64.02, -17.74, 64.47);
var l5_scene_04 = ee.Image('LANDSAT/LT05/C02/T1_L2/LT05_218015_19860916').clip(l5_region_04);
print('l5_scene_04', l5_scene_04);

// scene 05
var l5_region_05 = ee.Geometry.Rectangle(-82.46, 74.49, -80.75, 74.95);
var l5_scene_05 = ee.Image('LANDSAT/LT05/C02/T1_L2/LT05_036007_20030904').clip(l5_region_05);
print('l5_scene_05', l5_scene_05);

// scene 06
var l5_region_06 = ee.Geometry.Rectangle(75.38, 37.24, 75.95, 37.69);
var l5_scene_06 = ee.Image('LANDSAT/LT05/C02/T1_L2/LT05_149034_19980829').clip(l5_region_06);
print('l5_scene_06', l5_scene_06);

// scene 07
var l5_region_07 = ee.Geometry.Rectangle(-71.13, -54.73, -70.36, -54.28);
var l5_scene_07 = ee.Image('LANDSAT/LT05/C02/T1_L2/LT05_228098_20050214').clip(l5_scene_07);
print('l5_scene_07', l5_scene_07);

// scene 08
var l5_region_08 = ee.Geometry.Rectangle(41.60, 42.96, 42.22, 43.41);
var l5_scene_08 = ee.Image('LANDSAT/LT05/C02/T1_L2/LT05_172030_20110919').clip(l5_region_08);
print('l5_scene_08', l5_scene_08);

// scene 09
var l5_region_09 = ee.Geometry.Rectangle(64.15, 75.70, 66.00, 76.15);
var l5_scene_09 = ee.Image('LANDSAT/LT05/C02/T1_L2/LT05_176006_19920910').clip(l5_region_09);
print('l5_scene_09', l5_scene_09);

// scene 10
var l5_region_10 = ee.Geometry.Rectangle(-23.99, 80.57, -21.18, 81.02);
var l5_scene_10 = ee.Image('LANDSAT/LT05/C02/T1_L2/LT05_018001_19910804').clip(l5_region_10);
print('l5_scene_10', l5_scene_10);

// scene 11
var l5_region_11 = ee.Geometry.Rectangle(-142.27, 59.88, -141.37, 60.33);
var l5_scene_11 = ee.Image('LANDSAT/LT05/C02/T1_L2/LT05_063018_20100920').clip(l5_region_11);
print('l5_scene_11', l5_scene_11);

// scene 12
var l5_region_12 = ee.Geometry.Rectangle(91.12, 32.96, 91.65, 33.41);
var l5_scene_12 = ee.Image('LANDSAT/LT05/C02/T1_L2/LT05_138037_19931224').clip(l5_region_12);
print('l5_scene_12', l5_scene_12);

// scene 13
var l5_region_13 = ee.Geometry.Rectangle(12.18, 77.89, 14.57, 78.38);
var l5_scene_13 = ee.Image('LANDSAT/LT05/C02/T1_L2/LT05_215004_19930813').clip(l5_scene_13);
print('l5_scene_13', l5_scene_13);

// ------ Sentinel 2
// scene 01
var S2_region_01 = ee.Geometry.Rectangle(-42.86, 82.07, -39.51, 82.52);
var S2_scene_01 = ee.Image('COPERNICUS/S2_SR_HARMONIZED/20200710T183921_20200710T183922_T23XNM').clip(S2_region_01);
print('S2_scene_01', S2_scene_01);

// scene 02
var S2_region_02 = ee.Geometry.Rectangle(-24.51, 79.44, -22.00, 79.89);
var S2_scene_02 = ee.Image('COPERNICUS/S2_SR_HARMONIZED/20190820T151809_20190820T151849_T27XVJ').clip(S2_region_02);
print('S2_scene_02', S2_scene_02);

// scene 03
var S2_region_03 = ee.Geometry.Rectangle(171.33, -42.99, 171.54, -42.84);
var S2_scene_03 = ee.Image('COPERNICUS/S2_SR_HARMONIZED/20240220T223711_20240220T223738_T59GNN').clip(S2_region_03);
print('S2_scene_03', S2_scene_03);

// scene 04
var S2_region_04 = ee.Geometry.Rectangle(79.14, 41.87, 79.35, 42.02);
var S2_scene_04 = ee.Image('COPERNICUS/S2_SR_HARMONIZED/20240903T053641_20240903T054014_T44TLM').clip(S2_region_04);
print('S2_scene_04', S2_scene_04);

// scene 05
var S2_region_05 = ee.Geometry.Rectangle(-149.20, 60.67, -148.88, 60.82);
var S2_scene_05 = ee.Image('COPERNICUS/S2_SR_HARMONIZED/20200913T211521_20200913T211517_T06VUN').clip(S2_region_05);
print('S2_scene_05', S2_scene_05);

// scene 06
var S2_region_06 = ee.Geometry.Rectangle(-131.82, 57.00, -130.99, 57.45);
var S2_scene_06 = ee.Image('COPERNICUS/S2_SR_HARMONIZED/20230823T195859_20230823T200210_T09VUD').clip(S2_region_06);
print('S2_scene_06', S2_scene_06);

// scene 07
var S2_region_07 = ee.Geometry.Rectangle(24.93, -71.94, 26.36, -71.49);
var S2_scene_07 = ee.Image('COPERNICUS/S2_SR_HARMONIZED/20210313T070849_20210313T070949_T35DMA').clip(S2_region_07);
print('S2_scene_07', S2_scene_07);

// scene 08
var S2_region_08 = ee.Geometry.Rectangle(-18.10, 64.35, -17.74, 64.51);
var S2_scene_08 = ee.Image('COPERNICUS/S2_SR_HARMONIZED/20210718T130259_20210718T130301_T27WXM').clip(S2_region_08);
print('S2_scene_08', S2_scene_08);

// scene 09
var S2_region_09 = ee.Geometry.Rectangle(-64.53, 67.15, -64.12, 67.0);
var S2_scene_09 = ee.Image('COPERNICUS/S2_SR_HARMONIZED/20220915T155819_20220915T155956_T20WMV').clip(S2_region_09);
print('S2_scene_09', S2_scene_09);

// scene 10
var S2_region_10 = ee.Geometry.Rectangle(94.49, 79.44, 96.99, 79.89);
var S2_scene_10 = ee.Image('COPERNICUS/S2_SR_HARMONIZED/20200813T072619_20200813T072618_T46XEP').clip(S2_region_10);
print('S2_scene_10', S2_scene_10);

// scene 11
var S2_region_11 = ee.Geometry.Rectangle(59.09, 75.15, 59.68, 74.99);
var S2_scene_11 = ee.Image('COPERNICUS/S2_SR_HARMONIZED/20220903T083559_20220903T083601_T40XEJ').clip(S2_region_11);
print('S2_scene_11', S2_scene_11);

// scene 12
var S2_region_12 = ee.Geometry.Rectangle(8.07, 61.63, 8.40, 61.79);
var S2_scene_12 = ee.Image('COPERNICUS/S2_SR_HARMONIZED/20240921T104629_20240921T104631_T32VMP').clip(S2_region_12);
print('S2_scene_12', S2_scene_12);

// scene 13
var S2_region_13 = ee.Geometry.Rectangle(16.63, 77.88, 17.49, 78.06);
var S2_scene_13 = ee.Image('COPERNICUS/S2_SR_HARMONIZED/20240808T124659_20240808T124702_T33XWG').clip(S2_scene_13);
print('S2_scene_13', S2_scene_13);

//////////////////////////////////////////////////////////
// ------------- Visualization -------------

// --------- Landsat 9 -----------
Map.setCenter(0, 0, 2);
var empty = ee.Image().byte();
// scene 01
var l9_scene_01_outline = empty.paint({
    featureCollection: l9_region_01, color: 1, width: 3});
Map.addLayer(l9_scene_01_outline, {palette: '0000FF'}, 'l9_scene_01_outline');
// Map.addLayer(l9_scene_01, {bands:['SR_B5','SR_B4','SR_B3'], max:3000, min:0}, 'l9 scene 01');

// scene 02
var l9_scene_02_outline = empty.paint({
    featureCollection: l9_region_02, color: 1, width: 3});
Map.addLayer(l9_scene_02_outline, {palette: '0000FF'}, 'l9_scene_02_outline');
// Map.addLayer(l9_scene_02, {bands:['SR_B5','SR_B4','SR_B3'], max:3000, min:0}, 'l9 scene 02');


// scene 03
var l9_scene_03_outline = empty.paint({
    featureCollection: l9_region_03, color: 1, width: 3});
Map.addLayer(l9_scene_03_outline, {palette: '0000FF'}, 'l9_scene_03_outline');
// Map.addLayer(l9_scene_03, {bands:['SR_B5','SR_B4','SR_B3'], max:3000, min:0}, 'l9 scene 03');

// scene 04
var l9_scene_04_outline = empty.paint({
    featureCollection: l9_region_04, color: 1, width: 3});
Map.addLayer(l9_scene_04_outline, {palette: '0000FF'}, 'l9_scene_04_outline');
// Map.addLayer(l9_scene_04, {bands:['SR_B5','SR_B4','SR_B3'], max:3000, min:0}, 'l9 scene 04');

// scene 05
var l9_scene_05_outline = empty.paint({
    featureCollection: l9_region_05, color: 1, width: 3});
Map.addLayer(l9_scene_05_outline, {palette: '0000FF'}, 'l9_scene_05_outline');
// Map.addLayer(l9_scene_05, {bands:['SR_B5','SR_B4','SR_B3'], max:3000, min:0}, 'l9 scene 05');

// scene 06
var l9_scene_06_outline = empty.paint({
    featureCollection: l9_region_06, color: 1, width: 3});
Map.addLayer(l9_scene_06_outline, {palette: '0000FF'}, 'l9_scene_06_outline');
// Map.addLayer(l9_scene_06, {bands:['SR_B5','SR_B4','SR_B3'], max:3000, min:0}, 'l9 scene 06');

// scene 07
var l9_scene_07_outline = empty.paint({
    featureCollection: l9_region_07, color: 1, width: 3});
Map.addLayer(l9_scene_07_outline, {palette: '0000FF'}, 'l9_scene_07_outline');
// Map.addLayer(l9_scene_07, {bands:['SR_B5','SR_B4','SR_B3'], max:3000, min:0}, 'l9 scene 07');

// scene 08
var l9_scene_08_outline = empty.paint({
    featureCollection: l9_region_08, color: 1, width: 3});
Map.addLayer(l9_scene_08_outline, {palette: '0000FF'}, 'l9_scene_08_outline');
// Map.addLayer(l9_scene_08, {bands:['SR_B5','SR_B4','SR_B3'], max:3000, min:0}, 'l9 scene 08');

// scene 09
var l9_scene_09_outline = empty.paint({
    featureCollection: l9_region_09, color: 1, width: 3});
Map.addLayer(l9_scene_09_outline, {palette: '0000FF'}, 'l9_scene_09_outline');
// Map.addLayer(l9_scene_09, {bands:['SR_B5','SR_B4','SR_B3'], max:3000, min:0}, 'l9 scene 09');

// scene 10
var l9_scene_10_outline = empty.paint({
    featureCollection: l9_region_10, color: 1, width: 3});
Map.addLayer(l9_scene_10_outline, {palette: '0000FF'}, 'l9_scene_10_outline');
// Map.addLayer(l9_scene_10, {bands:['SR_B5','SR_B4','SR_B3'], max:3000, min:0}, 'l9 scene 10');

// scene 11
var l9_scene_11_outline = empty.paint({
    featureCollection: l9_region_11, color: 1, width: 3});
Map.addLayer(l9_scene_11_outline, {palette: '0000FF'}, 'l9_scene_11_outline');
// Map.addLayer(l9_scene_11, {bands:['SR_B5','SR_B4','SR_B3'], max:3000, min:0}, 'l9 scene 11');

// scene 12
var l9_scene_12_outline = empty.paint({
    featureCollection: l9_region_12, color: 1, width: 3});
Map.addLayer(l9_scene_12_outline, {palette: '0000FF'}, 'l9_scene_12_outline');
// Map.addLayer(l9_scene_12, {bands:['SR_B5','SR_B4','SR_B3'], max:3000, min:0}, 'l9 scene 12');

// scene 13
var l9_scene_13_outline = empty.paint({
    featureCollection: l9_region_13, color: 1, width: 3});
Map.addLayer(l9_scene_13_outline, {palette: '0000FF'}, 'l9_scene_13_outline');
// Map.addLayer(l9_scene_13, {bands:['SR_B5','SR_B4','SR_B3'], max:3000, min:0}, 'l9 scene 13');

// --------- Landsat 8 -----------
// scene 01
var l8_scene_01_outline = empty.paint({
    featureCollection: l8_region_01, color: 1, width: 3});
Map.addLayer(l8_scene_01_outline, {palette: 'FF0000'}, 'l8_scene_01_outline');
// Map.addLayer(l8_scene_01, {bands:['SR_B5','SR_B4','SR_B3'], max:3000, min:0}, 'l8 scene 01');

// scene 02
var l8_scene_02_outline = empty.paint({
    featureCollection: l8_region_02, color: 1, width: 3});
Map.addLayer(l8_scene_02_outline, {palette: 'FF0000'}, 'l8_scene_02_outline');
// Map.addLayer(l8_scene_02, {bands:['SR_B5','SR_B4','SR_B3'], max:3000, min:0}, 'l8 scene 02');

// scene 03
var l8_scene_03_outline = empty.paint({
    featureCollection: l8_region_03, color: 1, width: 3});
Map.addLayer(l8_scene_03_outline, {palette: 'FF0000'}, 'l8_scene_03_outline');
// Map.addLayer(l8_scene_03, {bands:['SR_B5','SR_B4','SR_B3'], max:3000, min:0}, 'l8 scene 03');

// scene 04
var l8_scene_04_outline = empty.paint({
    featureCollection: l8_region_04, color: 1, width: 3});
Map.addLayer(l8_scene_04_outline, {palette: 'FF0000'}, 'l8_scene_04_outline');
// Map.addLayer(l8_scene_04, {bands:['SR_B5','SR_B4','SR_B3'], max:3000, min:0}, 'l8 scene 04');

// scene 05
var l8_scene_05_outline = empty.paint({
    featureCollection: l8_region_05, color: 1, width: 3});
Map.addLayer(l8_scene_05_outline, {palette: 'FF0000'}, 'l8_scene_05_outline');
// Map.addLayer(l8_scene_05, {bands:['SR_B5','SR_B4','SR_B3'], max:3000, min:0}, 'l8 scene 05');

// scene 06
var l8_scene_06_outline = empty.paint({
    featureCollection: l8_region_06, color: 1, width: 3});
Map.addLayer(l8_scene_06_outline, {palette: 'FF0000'}, 'l8_scene_06_outline');
// Map.addLayer(l8_scene_06, {bands:['SR_B5','SR_B4','SR_B3'], max:3000, min:0}, 'l8 scene 06');

// scene 07
var l8_scene_07_outline = empty.paint({
    featureCollection: l8_region_07, color: 1, width: 3});
Map.addLayer(l8_scene_07_outline, {palette: 'FF0000'}, 'l8_scene_07_outline');
// Map.addLayer(l8_scene_07, {bands:['SR_B5','SR_B4','SR_B3'], max:3000, min:0}, 'l8 scene 07');

// scene 08
var l8_scene_08_outline = empty.paint({
    featureCollection: l8_region_08, color: 1, width: 3});
Map.addLayer(l8_scene_08_outline, {palette: 'FF0000'}, 'l8_scene_08_outline');
// Map.addLayer(l8_scene_08, {bands:['SR_B5','SR_B4','SR_B3'], max:3000, min:0}, 'l8 scene 08');

// scene 09
var l8_scene_09_outline = empty.paint({
    featureCollection: l8_region_09, color: 1, width: 3});
Map.addLayer(l8_scene_09_outline, {palette: 'FF0000'}, 'l8_scene_09_outline');
// Map.addLayer(l8_scene_09, {bands:['SR_B5','SR_B4','SR_B3'], max:3000, min:0}, 'l8 scene 09');

// scene 10
var l8_scene_10_outline = empty.paint({
    featureCollection: l8_region_10, color: 1, width: 3});
Map.addLayer(l8_scene_10_outline, {palette: 'FF0000'}, 'l8_scene_10_outline');
// Map.addLayer(l8_scene_10, {bands:['SR_B5','SR_B4','SR_B3'], max:3000, min:0}, 'l8 scene 10');

// scene 11
var l8_scene_11_outline = empty.paint({
    featureCollection: l8_region_11, color: 1, width: 3});
Map.addLayer(l8_scene_11_outline, {palette: 'FF0000'}, 'l8_scene_11_outline');
// Map.addLayer(l8_scene_11, {bands:['SR_B5','SR_B4','SR_B3'], max:3000, min:0}, 'l8 scene 11');

// scene 12
var l8_scene_12_outline = empty.paint({
    featureCollection: l8_region_12, color: 1, width: 3});
Map.addLayer(l8_scene_12_outline, {palette: 'FF0000'}, 'l8_scene_12_outline');
// Map.addLayer(l8_scene_12, {bands:['SR_B5','SR_B4','SR_B3'], max:3000, min:0}, 'l8 scene 12');

// scene 13
var l8_scene_13_outline = empty.paint({
    featureCollection: l8_region_13, color: 1, width: 3});
Map.addLayer(l8_scene_13_outline, {palette: 'FF0000'}, 'l8_scene_13_outline');
// Map.addLayer(l8_scene_13, {bands:['SR_B5','SR_B4','SR_B3'], max:3000, min:0}, 'l8 scene 13');

// ---------- Landsat 7 -----------
// scene 01
var l7_scene_01_outline = empty.paint({
    featureCollection: l7_region_01, color: 1, width: 3});
Map.addLayer(l7_scene_01_outline, {palette: 'FFFF00'}, 'l7_scene_01_outline');
// Map.addLayer(l7_scene_01, {bands:['SR_B4','SR_B3','SR_B2'], max:3000, min:0}, 'l7 scene 01');

// scene 02
var l7_scene_02_outline = empty.paint({
    featureCollection: l7_region_02, color: 1, width: 3});
Map.addLayer(l7_scene_02_outline, {palette: 'FFFF00'}, 'l7_scene_02_outline');
// Map.addLayer(l7_scene_02, {bands:['SR_B4','SR_B3','SR_B2'], max:3000, min:0}, 'l7 scene 02');

// scene 03
var l7_scene_03_outline = empty.paint({
    featureCollection: l7_region_03, color: 1, width: 3});
Map.addLayer(l7_scene_03_outline, {palette: 'FFFF00'}, 'l7_scene_03_outline');
// Map.addLayer(l7_scene_03, {bands:['SR_B4','SR_B3','SR_B2'], max:3000, min:0}, 'l7 scene 03');

// scene 04
var l7_scene_04_outline = empty.paint({
    featureCollection: l7_region_04, color: 1, width: 3});
Map.addLayer(l7_scene_04_outline, {palette: 'FFFF00'}, 'l7_scene_04_outline');
// Map.addLayer(l7_scene_04, {bands:['SR_B4','SR_B3','SR_B2'], max:3000, min:0}, 'l7 scene 04');

// scene 05
var l7_scene_05_outline = empty.paint({
    featureCollection: l7_region_05, color: 1, width: 3});
Map.addLayer(l7_scene_05_outline, {palette: 'FFFF00'}, 'l7_scene_05_outline');
// Map.addLayer(l7_scene_05, {bands:['SR_B4','SR_B3','SR_B2'], max:3000, min:0}, 'l7 scene 05');

// scene 06
var l7_scene_06_outline = empty.paint({
    featureCollection: l7_region_06, color: 1, width: 3});
Map.addLayer(l7_scene_06_outline, {palette: 'FFFF00'}, 'l7_scene_06_outline');
// Map.addLayer(l7_scene_06, {bands:['SR_B4','SR_B3','SR_B2'], max:3000, min:0}, 'l7 scene 06');

// scene 07
var l7_scene_07_outline = empty.paint({
    featureCollection: l7_region_07, color: 1, width: 3});
Map.addLayer(l7_scene_07_outline, {palette: 'FFFF00'}, 'l7_scene_07_outline');
// Map.addLayer(l7_scene_07, {bands:['SR_B4','SR_B3','SR_B2'], max:3000, min:0}, 'l7 scene 07');

// scene 08
var l7_scene_08_outline = empty.paint({
    featureCollection: l7_region_08, color: 1, width: 3});
Map.addLayer(l7_scene_08_outline, {palette: 'FFFF00'}, 'l7_scene_08_outline');
// Map.addLayer(l7_scene_08, {bands:['SR_B4','SR_B3','SR_B2'], max:3000, min:0}, 'l7 scene 08');

// scene 09
var l7_scene_09_outline = empty.paint({
      featureCollection: l7_region_09, color: 1, width: 3});
Map.addLayer(l7_scene_09_outline, {palette: 'FFFF00'}, 'l7_scene_09_outline');
// Map.addLayer(l7_scene_09, {bands:['SR_B4','SR_B3','SR_B2'], max:3000, min:0}, 'l7 scene 09');

// scene 10
var l7_scene_10_outline = empty.paint({
    featureCollection: l7_region_10, color: 1, width: 3});
Map.addLayer(l7_scene_10_outline, {palette: 'FFFF00'}, 'l7_scene_10_outline');
// Map.addLayer(l7_scene_10, {bands:['SR_B4','SR_B3','SR_B2'], max:3000, min:0}, 'l7 scene 10');

// scene 11
var l7_scene_11_outline = empty.paint({
    featureCollection: l7_region_11, color: 1, width: 3});
Map.addLayer(l7_scene_11_outline, {palette: 'FFFF00'}, 'l7_scene_11_outline');
// Map.addLayer(l7_scene_11, {bands:['SR_B4','SR_B3','SR_B2'], max:3000, min:0}, 'l7 scene 11');

// scene 12
var l7_scene_12_outline = empty.paint({
    featureCollection: l7_region_12, color: 1, width: 3});
Map.addLayer(l7_scene_12_outline, {palette: 'FFFF00'}, 'l7_scene_12_outline');
// Map.addLayer(l7_scene_12, {bands:['SR_B4','SR_B3','SR_B2'], max:3000, min:0}, 'l7 scene 12');

// scene 13
var l7_scene_13_outline = empty.paint({
    featureCollection: l7_region_13, color: 1, width: 3});
Map.addLayer(l7_scene_13_outline, {palette: 'FFFF00'}, 'l7_scene_13_outline');
// Map.addLayer(l7_scene_13, {bands:['SR_B4','SR_B3','SR_B2'], max:3000, min:0}, 'l7 scene 13');


// ---------- Landsat 5 ----------
// scene 01
var l5_scene_01_outline = empty.paint({
              featureCollection: l5_region_01, color: 1, width: 3});
Map.addLayer(l5_scene_01_outline, {palette: 'FF00FF'}, 'l5_scene_01_outline');
// Map.addLayer(l5_scene_01, {bands:['SR_B4','SR_B3','SR_B2'], max:3000, min:0}, 'l5 scene 01');

// scene 02
var l5_scene_02_outline = empty.paint({
    featureCollection: l5_region_02, color: 1, width: 3});
Map.addLayer(l5_scene_02_outline, {palette: 'FF00FF'}, 'l5_scene_02_outline');
// Map.addLayer(l5_scene_02, {bands:['SR_B4','SR_B3','SR_B2'], max:3000, min:0}, 'l5 scene 02');

// scene 03
var l5_scene_03_outline = empty.paint({
    featureCollection: l5_region_03, color: 1, width: 3});
Map.addLayer(l5_scene_03_outline, {palette: 'FF00FF'}, 'l5_scene_03_outline');
// Map.addLayer(l5_scene_03, {bands:['SR_B4','SR_B3','SR_B2'], max:3000, min:0}, 'l5 scene 03');

// scene 04
var l5_scene_04_outline = empty.paint({
    featureCollection: l5_region_04, color: 1, width: 3});
Map.addLayer(l5_scene_04_outline, {palette: 'FF00FF'}, 'l5_scene_04_outline');
// Map.addLayer(l5_scene_04, {bands:['SR_B4','SR_B3','SR_B2'], max:3000, min:0}, 'l5 scene 04');

// scene 05
var l5_scene_05_outline = empty.paint({
    featureCollection: l5_region_05, color: 1, width: 3});
Map.addLayer(l5_scene_05_outline, {palette: 'FF00FF'}, 'l5_scene_05_outline');
// Map.addLayer(l5_scene_05, {bands:['SR_B4','SR_B3','SR_B2'], max:3000, min:0}, 'l5 scene 05');

// scene 06
var l5_scene_06_outline = empty.paint({
    featureCollection: l5_region_06, color: 1, width: 3});
Map.addLayer(l5_scene_06_outline, {palette: 'FF00FF'}, 'l5_scene_06_outline');
// Map.addLayer(l5_scene_06, {bands:['SR_B4','SR_B3','SR_B2'], max:3000, min:0}, 'l5 scene 06');

// scene 07
var l5_scene_07_outline = empty.paint({
    featureCollection: l5_region_07, color: 1, width: 3});
Map.addLayer(l5_scene_07_outline, {palette: 'FF00FF'}, 'l5_scene_07_outline');
// Map.addLayer(l5_scene_07, {bands:['SR_B4','SR_B3','SR_B2'], max:3000, min:0}, 'l5 scene 07');

// scene 08
var l5_scene_08_outline = empty.paint({
    featureCollection: l5_region_08, color: 1, width: 3});
Map.addLayer(l5_scene_08_outline, {palette: 'FF00FF'}, 'l5_scene_08_outline');
// Map.addLayer(l5_scene_08, {bands:['SR_B4','SR_B3','SR_B2'], max:3000, min:0}, 'l5 scene 08');

// scene 09
var l5_scene_09_outline = empty.paint({
    featureCollection: l5_region_09, color: 1, width: 3});
Map.addLayer(l5_scene_09_outline, {palette: 'FF00FF'}, 'l5_scene_09_outline');
// Map.addLayer(l5_scene_09, {bands:['SR_B4','SR_B3','SR_B2'], max:3000, min:0}, 'l5 scene 09');

// scene 10
var l5_scene_10_outline = empty.paint({
    featureCollection: l5_region_10, color: 1, width: 3});
Map.addLayer(l5_scene_10_outline, {palette: 'FF00FF'}, 'l5_scene_10_outline');
// Map.addLayer(l5_scene_10, {bands:['SR_B4','SR_B3','SR_B2'], max:3000, min:0}, 'l5 scene 10');

// scene 11
var l5_scene_11_outline = empty.paint({
    featureCollection: l5_region_11, color: 1, width: 3});
Map.addLayer(l5_scene_11_outline, {palette: 'FF00FF'}, 'l5_scene_11_outline');
// Map.addLayer(l5_scene_11, {bands:['SR_B4','SR_B3','SR_B2'], max:3000, min:0}, 'l5 scene 11');

// scene 12
var l5_scene_12_outline = empty.paint({
    featureCollection: l5_region_12, color: 1, width: 3});
Map.addLayer(l5_scene_12_outline, {palette: 'FF00FF'}, 'l5_scene_12_outline');
// Map.addLayer(l5_scene_12, {bands:['SR_B4','SR_B3','SR_B2'], max:3000, min:0}, 'l5 scene 12');

// scene 13
var l5_scene_13_outline = empty.paint({
    featureCollection: l5_region_13, color: 1, width: 3});
Map.addLayer(l5_scene_13_outline, {palette: 'FF00FF'}, 'l5_scene_13_outline');
// Map.addLayer(l5_scene_13, {bands:['SR_B4','SR_B3','SR_B2'], max:3000, min:0}, 'l5 scene 13');

// --------- Sentinel 2 -----------
// scene 01
var S2_scene_01_outline = empty.paint({
    featureCollection: S2_region_01, color: 1, width: 3});
Map.addLayer(S2_scene_01_outline, {palette: '00FF00'}, 'S2_scene_01_outline');
// Map.addLayer(S2_scene_01, {bands:['B8','B4','B3'], max:3000, min:0}, 'S2 scene 01');

// scene 02
var S2_scene_02_outline = empty.paint({
    featureCollection: S2_region_02, color: 1, width: 3});
Map.addLayer(S2_scene_02_outline, {palette: '00FF00'}, 'S2_scene_02_outline');
// Map.addLayer(S2_scene_02, {bands:['B8','B4','B3'], max:3000, min:0}, 'S2 scene 02');

// scene 03
var S2_scene_03_outline = empty.paint({
    featureCollection: S2_region_03, color: 1, width: 3});
Map.addLayer(S2_scene_03_outline, {palette: '00FF00'}, 'S2_scene_03_outline');
// Map.addLayer(S2_scene_03, {bands:['B8','B4','B3'], max:3000, min:0}, 'S2 scene 03');

// scene 04
var S2_scene_04_outline = empty.paint({
    featureCollection: S2_region_04, color: 1, width: 3});
Map.addLayer(S2_scene_04_outline, {palette: '00FF00'}, 'S2_scene_04_outline');
// Map.addLayer(S2_scene_04, {bands:['B8','B4','B3'], max:3000, min:0}, 'S2 scene 04');

// scene 05
var S2_scene_05_outline = empty.paint({
    featureCollection: S2_region_05, color: 1, width: 3});
Map.addLayer(S2_scene_05_outline, {palette: '00FF00'}, 'S2_scene_05_outline');
// Map.addLayer(S2_scene_05, {bands:['B8','B4','B3'], max:3000, min:0}, 'S2 scene 05');

// scene 06
var S2_scene_06_outline = empty.paint({
    featureCollection: S2_region_06, color: 1, width: 3});
Map.addLayer(S2_scene_06_outline, {palette: '00FF00'}, 'S2_scene_06_outline');
// Map.addLayer(S2_scene_06, {bands:['B8','B4','B3'], max:3000, min:0}, 'S2 scene 06');

// scene 07
var S2_scene_07_outline = empty.paint({
    featureCollection: S2_region_07, color: 1, width: 3});
Map.addLayer(S2_scene_07_outline, {palette: '00FF00'}, 'S2_scene_07_outline');
// Map.addLayer(S2_scene_07, {bands:['B8','B4','B3'], max:3000, min:0}, 'S2 scene 07');

// scene 08
var S2_scene_08_outline = empty.paint({
    featureCollection: S2_region_08, color: 1, width: 3});
Map.addLayer(S2_scene_08_outline, {palette: '00FF00'}, 'S2_scene_08_outline');
// Map.addLayer(S2_scene_08, {bands:['B8','B4','B3'], max:3000, min:0}, 'S2 scene 08');

// scene 09
var S2_scene_09_outline = empty.paint({
    featureCollection: S2_region_09, color: 1, width: 3});
Map.addLayer(S2_scene_09_outline, {palette: '00FF00'}, 'S2_scene_09_outline');
// Map.addLayer(S2_scene_09, {bands:['B8','B4','B3'], max:3000, min:0}, 'S2 scene 09');

// scene 10
var S2_scene_10_outline = empty.paint({
    featureCollection: S2_region_10, color: 1, width: 3});
Map.addLayer(S2_scene_10_outline, {palette: '00FF00'}, 'S2_scene_10_outline');
// Map.addLayer(S2_scene_10, {bands:['B8','B4','B3'], max:3000, min:0}, 'S2 scene 10');

// scene 11
var S2_scene_11_outline = empty.paint({
    featureCollection: S2_region_11, color: 1, width: 3});
Map.addLayer(S2_scene_11_outline, {palette: '00FF00'}, 'S2_scene_11_outline');
// Map.addLayer(S2_scene_11, {bands:['B8','B4','B3'], max:3000, min:0}, 'S2 scene 11');

// scene 12
var S2_scene_12_outline = empty.paint({
    featureCollection: S2_region_12, color: 1, width: 3});
Map.addLayer(S2_scene_12_outline, {palette: '00FF00'}, 'S2_scene_12_outline');
// Map.addLayer(S2_scene_12, {bands:['B8','B4','B3'], max:3000, min:0}, 'S2 scene 12');

// scene 13
var S2_scene_13_outline = empty.paint({
    featureCollection: S2_region_13, color: 1, width: 3});
Map.addLayer(S2_scene_13_outline, {palette: '00FF00'}, 'S2_scene_13_outline');
// Map.addLayer(S2_scene_13, {bands:['B8','B4','B3'], max:3000, min:0}, 'S2 scene 13');