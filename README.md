# Beyond Carbon

Forests are a critical piece of our climate change mitigation strategy and we depend on satellites and sensors to measure a forest's potential to sequester carbon. What this valuation completely misses is people - communities who've stewarded these landscapes for centuries with their labor, wisdom, songs, and stories. 

Beyond Carbon: Using Multisensory Data for Climate Action counters carbon-focused forest data with experiments in eco-acoustic, oral, and text formats that  foreground community-owned knowledges of landscapes against the dominant architecture of remote sensing infrastructures.

# Henry's Tembawang Visualization and Segmentation

This project provides tools to **visualize** and **segment** *tembawang* regions — traditional indigenous agroforestry gardens found in Borneo.

## Files:

- **plot_tembawangs.ipynb**  
  Visualizes geospatial distributions of tembawang regions using maps and plots. Designed for exploratory analysis and presentation of geographic patterns.

- **segmentation.ipynb**  
  Segments satellite or aerial imagery to identify tembawang areas. Utilizes computer vision techniques, including the Segment Anything Model (SAM), to automatically detect and label regions of interest.

## Requirements:
- Python 3.8+
- Packages: geopandas, folium, matplotlib, pandas, opencv-python, segment-anything, Pillow, rasterio, shapely, numpy

## Usage:
1. Prepare geospatial data and/or satellite images.
2. Run `segmentation.ipynb` to generate segmented regions.
3. Use `plot_tembawangs.ipynb` to visualize results or to plot tembawang sites on interactive maps.

## Notes:
- Proper georeferencing of input data is critical for accurate mapping.
- Segmentation results can be exported as GeoJSON for integration with GIS systems.

# Ryan's Indicative HCS Mapping and Clipping

This project provides tools to **visualize** and **spatially constrain** indicative high carbon stock land cover classifications to our project focus area. It utilizes Earth Engine to map and clip these classifications to a shapefile.

## Files:


- **indicative_hcs_visualization.js**  
  Loads an indicative high carbon stock (HCS) land cover classification, clips it to a specified shapefile, and displays the result on an interactive map.  The script provides an optional white background for visual clarity.


## Requirements:
- Google Earth Engine account and Code Editor access.
- A valid Earth Engine asset path to an indicative HCS land cover classification image. 
- A valid Earth Engine asset path to a shapefile defining the region of interest.

## Usage:

1. **Import Script:**  Create Google Cloud Project and import the script into the Google Earth Engine Code Editor. 
2. **Configure Asset Paths:**  Modify the `indicative_hcs_asset` and `shapefile_asset` variables in the script to point to your Earth Engine asset paths for the indicative HCS land cover classification and shapefile, respectively.
3. **Run the Script:** Execute the Earth Engine Code Editor script.
4. **View the Results:** The clipped HCS land cover classification will be displayed on the map, with a white background covering the rest of the globe. Adjust the zoom level to examine the results in detail or toggle the white background to see surrounding geography. 

## Notes:
- Indicative High Carbon Stock data available at [![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.5012448.svg)](https://doi.org/10.5281/zenodo.5012448)
- The script assumes the indicative HCS land cover classification has integer values corresponding to the land cover classes, as defined in the `hcs_palette`.
- The accuracy of the mapping depends on the quality and resolution of the input indicative HCS land cover classification and shapefile data.
- If the output is blank, ensure the shapefile intersects the HCS image, and that the shapefile has valid features within it. Also, double-check the asset paths.
- The white background layer simplifies visualization but does not obscure any layers below it.


## Acknowledgments:
- This project may utilize open-source segmentation models such as Meta's Segment Anything Model (SAM).
- The project is inspired by the need to better understand and preserve indigenous land management systems.


## Project Support

[Green Screen Coalition](https://greenscreen.network/en/blog/catalyst-fund-awardees-press-release/) and Mozilla Foundation.<br />
[SEEKCommons Network](https://seekcommons.org/), National Science Foundation.
