#!/bin/zsh

## necessary permissions for all scripts
chmod -R u+x scripts

## create `/countries` folder with geojson for each country as helper
curl https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_countries_lakes.geojson -o countries/countries.geojson --create-dirs
scripts/js/create-helpers.js
rm countries/countries.geojson

- rename.sh to rename their files to two digit codes
- polygonize_hazard.sh to go from tif to GeoJSON
- clip_hazard.sh to contain the above to country bounds
- clip_all.sh to clip other large files to country grids
- agg.sh to gather all the data on to the grid
- merge.js to merge the country grids into one large grid
