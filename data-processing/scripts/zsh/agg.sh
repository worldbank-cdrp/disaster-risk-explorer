#!/bin/zsh
BASE=../CDRP\ Platform\ Development\ Seed
for country in countries/[A-Z][A-Z].geojson; do
  echo country: ${country:t:r}
  ### HAZARD
  for geo in $BASE/Hazard/Earthquake/probabilistic/${country:t:r}*_clipped.geojson; do
       scripts/js/agg.js $geo countries/${country:t:r}_grid.geojson
  done
  for geo in $BASE/Hazard/Windstorm/probabilistic/${country:t:r}*_clipped.geojson; do
       scripts/js/agg.js $geo countries/${country:t:r}_grid.geojson
  done
  for geo in $BASE/Hazard/Flood/probabilistic/${country:t:r}*_clipped.geojson; do
       scripts/js/agg.js $geo countries/${country:t:r}_grid.geojson
  done
  ### LOSS
  scripts/js/agg.js $BASE/Loss/Earthquake/probabilistic/aal.geojson countries/${country:t:r}_grid.geojson
  scripts/js/agg.js $BASE/Loss/Windstorm/probabilistic/aal.geojson countries/${country:t:r}_grid.geojson
  scripts/js/agg.js $BASE/Loss/Flood/probabilistic/aal.geojson countries/${country:t:r}_grid.geojson
  ### EXPOSURE
  for geo in $BASE/Exposure/GDP/${country:t:r}_gdp.geojson; do
       scripts/js/agg.js $geo countries/${country:t:r}_grid.geojson
  done
  for geo in $BASE/Exposure/Infrastructure/${country:t:r}_infrastructure.geojson; do
       scripts/js/agg.js $geo countries/${country:t:r}_grid.geojson
  done
  for geo in $BASE/Exposure/Building\ Stock/${country:t:r}_building_stock.geojson; do
       scripts/js/agg.js $geo countries/${country:t:r}_grid.geojson
  done
done
