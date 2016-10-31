#!/bin/zsh
setopt null_glob
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
  for geo in $BASE/Hazard/Earthquake/historic/${country:t:r}*_clipped.geojson; do
       scripts/js/agg.js $geo countries/${country:t:r}_grid.geojson
  done
  for geo in $BASE/Hazard/Windstorm/historic/${country:t:r}*_clipped.geojson; do
       scripts/js/agg.js $geo countries/${country:t:r}_grid.geojson
  done
  ### LOSS
  scripts/js/agg.js $BASE/Loss/Earthquake/probabilistic/aal.geojson countries/${country:t:r}_grid.geojson LS_EQ_
  scripts/js/agg.js $BASE/Loss/Windstorm/probabilistic/aal.geojson countries/${country:t:r}_grid.geojson LS_WS_
  scripts/js/agg.js $BASE/Loss/Windstorm/probabilistic/pml.geojson countries/${country:t:r}_grid.geojson LS_WS_
  scripts/js/agg.js $BASE/Loss/Flood/probabilistic/pml.geojson countries/${country:t:r}_grid.geojson LS_FL_
  for geo in $BASE/Loss/Earthquake/historic/${country:t:r}*.geojson; do
       scripts/js/agg.js $geo countries/${country:t:r}_grid.geojson
  done
  for geo in $BASE/Loss/Windstorm/historic/${country:t:r}*.geojson; do
       scripts/js/agg.js $geo countries/${country:t:r}_grid.geojson
  done
  ### EXPOSURE
  scripts/js/agg.js $BASE/Exposure/GDP/${country:t:r}_gdp.geojson countries/${country:t:r}_grid.geojson
  scripts/js/agg.js $BASE/Exposure/Infrastructure/${country:t:r}_infrastructure.geojson countries/${country:t:r}_grid.geojson
  scripts/js/agg.js $BASE/Exposure/Building\ Stock/${country:t:r}_building_stock.geojson countries/${country:t:r}_grid.geojson
done
