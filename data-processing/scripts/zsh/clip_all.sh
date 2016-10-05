#!/bin/zsh
## clips everything that isn't already in country files (hazards) to a country
for country in countries/[A-Z][A-Z].geojson; do
  echo Country: ${country:t:r}
  echo clipping grid
  echo -----
  ## clip-by-country takes 2 arguments (3th is optional)
  ## clip file, read file, write file, country name to add
  node scripts/js/clip-by-country.js $country ../CDRP\ Platform\ Development\ Seed/Base\ layer\ Grid/clipped-grid.geojson ${country:r}_grid.geojson ${country:t:r}
  echo clipping gdp
  echo -----
  node scripts/js/clip-by-country.js $country ../CDRP\ Platform\ Development\ Seed/Exposure/GDP/gdp.geojson ../CDRP\ Platform\ Development\ Seed/Exposure/GDP/${country:t:r}_gdp.geojson
  echo clipping infrastructure
  echo -----
  node scripts/js/clip-by-country.js $country ../CDRP\ Platform\ Development\ Seed/Exposure/Infrastructure/infrastructure.geojson ../CDRP\ Platform\ Development\ Seed/Exposure/Infrastructure/${country:t:r}_infrastructure.geojson
  echo clipping building stock
  echo -----
  node scripts/js/clip-by-country.js $country ../CDRP\ Platform\ Development\ Seed/Exposure/Building\ Stock/building-stock.geojson ../CDRP\ Platform\ Development\ Seed/Exposure/Building\ Stock/${country:t:r}_building_stock.geojson
done
