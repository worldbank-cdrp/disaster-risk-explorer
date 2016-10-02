#!/bin/zsh
## clips everything that isn't already in country files (hazards) to a country
for country in ../countries/[A-Z][A-Z].geojson; do
  echo Country: ${country:t:r}
  echo clipping grid
  echo -----
  ## clip-by-country takes 2 arguments (3th is optional)
  ## clip file, read file, write file, country name to add
  #node ./clip-by-country.js $country ../raw/Base\ layer\ Grid/clipped-grid.geojson ${country:r}_grid.geojson ${country:t:r}
  echo clipping gdp
  echo -----
  node ./clip-by-country.js $country ../raw/gdp/gdp.geojson ../raw/gdp/${country:t:r}_gdp.geojson
  echo clipping infrastructure
  echo -----
  node ./clip-by-country.js $country ../raw/infrastructure/infrastructure.geojson ../raw/infrastructure/${country:t:r}_infrastructure.geojson
  echo clipping building stock
  echo -----
  node ./clip-by-country.js $country ../raw/building_stock/building-stock.geojson ../raw/building_stock/${country:t:r}_building_stock.geojson
done
