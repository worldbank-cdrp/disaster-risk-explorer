#!/bin/zsh
for country in ../countries/[A-Z][A-Z].geojson; do
  echo country: ${country:t:r}
  for geo in ../raw/earthquake_hazard_probabilistic/${country:t:r}*_clipped.geojson; do
       ./agg.js $geo ../countries/${country:t:r}_grid.geojson
  done
  for geo in ../raw/windstorm_hazard_probabilistic/${country:t:r}*_clipped.geojson; do
       ./agg.js $geo ../countries/${country:t:r}_grid.geojson
  done
  for geo in ../raw/flood_hazard_probabilistic/${country:t:r}*_clipped.geojson; do
       ./agg.js $geo ../countries/${country:t:r}_grid.geojson
  done
  for geo in ../raw/gdp/${country:t:r}_gdp.geojson; do
       ./agg.js $geo ../countries/${country:t:r}_grid.geojson
  done
  for geo in ../raw/infrastructure/${country:t:r}_infrastructure.geojson; do
       ./agg.js $geo ../countries/${country:t:r}_grid.geojson
  done
  for geo in ../raw/building_stock/${country:t:r}_building_stock.geojson; do
       ./agg.js $geo ../countries/${country:t:r}_grid.geojson
  done
done
