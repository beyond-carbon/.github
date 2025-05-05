// Define the asset IDs
var indicative_hcs_asset = 'users/nlang/indicative_HCS_2020_ID_PH_MY'; //Global indicative HCS asset
var shapefile_asset = 'projects/beyond-carbon/assets/Merge_Desa_AKKM'; //Local region shapfile asset directory

// Load the indicative HCS image
var indicative_hcs = ee.Image(indicative_hcs_asset);

// Load the shapefile
var shapefile = ee.FeatureCollection(shapefile_asset);

// Clip the indicative HCS image to the shapefile
var indicative_hcs_clipped = indicative_hcs.clip(shapefile);

// Define the color palette based on the visualization from the DOI.
var hcs_palette = ['#440154', '#404387', '#29788e', '#22a884', '#7ad251', '#fde725', '#fcffa4', '#a4feff', '#fa0000'];

// Create a dictionary to hold visualization parameters for the HCS classification.
var hcs_vis_params = {
    min: 1,
    max: 10,
    palette: hcs_palette,
    opacity: 1
    };

//locate center of assets
var centroid = shapefile.geometry().centroid().coordinates().getInfo();

// Set the map center using Map.setCenter (longitude, latitude, zoom)
Map.setCenter(centroid[0], centroid[1], 13); // Longitude, Latitude, Zoom Level

// Create a white background
var globe = ee.Geometry.BBox(-180, -90, 180, 90);
var whiteBackground = ee.Image(1).visualize({palette: ['ffffff'], opacity: 1});

// Add the white background layer (optional)
Map.addLayer(whiteBackground, {}, 'White Background');

// Add the clipped indicative HCS layer to the map.
Map.addLayer(indicative_hcs_clipped, hcs_vis_params, 'Indicative HCS (Clipped)');

