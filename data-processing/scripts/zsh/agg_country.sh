#!/bin/zsh
BASE=../CDRP\ Platform\ Development\ Seed
# for country in countries/[A-Z][A-Z].geojson; do
#   echo country: ${country:t:r}
#   echo ${country}
#   ## agg-country.js takes 4 arguments, group boundary, data, output file, string to prepend variable names with
#   node scripts/js/agg-country.js ${country:r}.geojson ${country:r}_grid.geojson ${country:r}_agg.geojson
# done

for province in countries/[A-Z][A-Z]-[A-Z][A-Z].geojson; do
  echo province: ${province:t:r}
  echo country: ${${province:t:r}:0:2}
  echo ${province}
  ## agg-country.js takes 4 arguments, group boundary, data, output file, string to prepend variable names with
  node scripts/js/agg-country.js ${province:r}.geojson countries/${${province:t:r}:0:2}_grid.geojson ${province:r}_agg.geojson
done
