#!/bin/zsh
BASE=../CDRP\ Platform\ Development\ Seed
for country in countries/[A-Z][A-Z].geojson; do
  echo country: ${country:t:r}
  echo ${country:r}
  ## agg-country.js takes 4 arguments, group boundary, data, output file, string to prepend variable names with
  node scripts/js/agg-country.js ${country:r}.geojson $BASE/Loss/Earthquake/probabilistic/aal.geojson ${country:r}_agg.geojson LS_EQ_
  node scripts/js/agg-country.js ${country:r}_agg.geojson $BASE/Loss/Windstorm/probabilistic/aal.geojson ${country:r}_agg.geojson LS_WS_
  node scripts/js/agg-country.js ${country:r}_agg.geojson $BASE/Loss/Flood/probabilistic/aal.geojson ${country:r}_agg.geojson LS_FL_
  node scripts/js/agg-country.js ${country:r}_agg.geojson ${country:r}_grid.geojson ${country:r}_agg.geojson
done
