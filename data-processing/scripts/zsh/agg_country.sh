#!/bin/zsh
for country in ../countries/[A-Z][A-Z].geojson; do
  echo country: ${country:t:r}
  echo ${country:r}
  ## agg-country.js takes 4 arguments, group boundary, data, output file, string to prepend variable names with
  node ./agg-country.js ${country:r}_clear.geojson ../raw/earthquake_aal_probabilistic/aal.geojson ${country:r}_agg.geojson LS_EQ_
  node ./agg-country.js ${country:r}_agg.geojson ../raw/windstorm_aal_probabilistic/aal.geojson ${country:r}_agg.geojson LS_WS_
  node ./agg-country.js ${country:r}_agg.geojson ../raw/flood_aal_probabilistic/aal.geojson ${country:r}_agg.geojson LS_FL_
  node ./agg-country.js ${country:r}_agg.geojson ${country:r}_grid.geojson ${country:r}_agg.geojson
done
