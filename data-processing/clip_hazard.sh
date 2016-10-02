#!/bin/zsh
for geo in ../raw/earthquake_hazard_probabilistic/*.geojson; do
    ogr2ogr -f GeoJSON -clipsrc ../countries/${${geo:t}:0:2}.geojson ${geo:r}_clipped.geojson $geo
done
