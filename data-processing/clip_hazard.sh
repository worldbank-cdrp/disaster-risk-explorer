#!/bin/zsh
for geo in ../raw/earthquake_hazard_probabilistic/*.geojson; do
    ogr2ogr -f GeoJSON -clipsrc ../countries/${${geo:t}:0:2}.geojson ${geo:r}_clipped.geojson $geo
done
for geo in ../raw/windstorm_hazard_probabilistic/*.geojson; do
    echo $geo
    ogr2ogr -f GeoJSON -clipsrc ../countries/${${geo:t}:0:2}.geojson ${geo:r}_clipped.geojson $geo
done
for geo in ../raw/flood_hazard_probabilistic/*.geojson; do
    echo $geo
    ogr2ogr -f GeoJSON -clipsrc ../countries/${${geo:t}:0:2}.geojson ${geo:r}_clipped.geojson $geo
done
