#!/bin/zsh
setopt null_glob
BASE=../CDRP\ Platform\ Development\ Seed
for country in countries/NI.geojson; do
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
  scripts/js/agg-loss.js $BASE/Loss/Earthquake/probabilistic/aal.geojson countries/${country:t:r}_grid.geojson LS_EQ_
  scripts/js/agg-loss.js $BASE/Loss/Windstorm/probabilistic/aal.geojson countries/${country:t:r}_grid.geojson LS_WS_
  scripts/js/agg-loss.js $BASE/Loss/Windstorm/probabilistic/pml.geojson countries/${country:t:r}_grid.geojson LS_WS_
  scripts/js/agg-loss.js $BASE/Loss/Flood/probabilistic/pml.geojson countries/${country:t:r}_grid.geojson LS_FL_
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
