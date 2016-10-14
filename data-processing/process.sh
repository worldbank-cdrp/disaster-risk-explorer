#!/bin/zsh

# necessary permissions for all scripts
chmod -R u+x scripts

## create `/countries` folder with geojson for each country as helper
# curl https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_countries_lakes.geojson -o countries/countries.geojson --create-dirs
## manually add admin-1
# scripts/js/create-helpers.js
# rm countries/countries.geojson


### "normalize" the raw data: rename to two digit codes, convert to geojson, polygonize where necessary, some clipping
## scripts/zsh/normalize.sh

### clipping: main grid + grids/exposure for each country
# echo 'Converting and clipping grid (nearly 6 million records)'
# ogr2ogr -f GeoJSON -t_srs crs:84 ../CDRP\ Platform\ Development\ Seed/Base\ layer\ Grid/grid.geojson ../CDRP\ Platform\ Development\ Seed/Base\ layer\ Grid/grid.shp
# scripts/js/clip-grid.js

# scripts/zsh/clip_all.sh

## aggregate all data to the grids and merge
scripts/zsh/agg.sh
scripts/js/merge.js

## aggregate to the country level
scripts/zsh/agg_country.sh
geojson-merge countries/[A-Z][A-Z]_agg.geojson > countries.geojson
geojson-merge countries/[A-Z][A-Z]-[A-Z][A-Z]_agg.geojson > admin1.geojson
