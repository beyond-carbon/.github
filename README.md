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

## Acknowledgments:
- This project may utilize open-source segmentation models such as Meta's Segment Anything Model (SAM).
- The project is inspired by the need to better understand and preserve indigenous land management systems.


## Project Support

[Green Screen Coalition](https://greenscreen.network/en/blog/catalyst-fund-awardees-press-release/) and Mozilla Foundation.<br />
[SEEKCommons Network](https://seekcommons.org/), National Science Foundation.
