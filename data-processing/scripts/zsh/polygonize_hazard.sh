#!/bin/zsh
for tif in ../raw/earthquake_hazard_probabilistic/*.tif; do
    gdal_polygonize.py ${tif} -f "GeoJSON" ${tif/tif/geojson} fieldname "risk"
done
for tif in ../raw/windstorm_hazard_probabilistic/*.tif; do
    gdal_polygonize.py ${tif} -f "GeoJSON" ${tif/tif/geojson} fieldname "risk"
done
for tif in ../raw/flood_hazard_probabilistic/*.tif; do
    gdal_polygonize.py ${tif} -f "GeoJSON" ${tif/tif/geojson} fieldname "risk"
done
