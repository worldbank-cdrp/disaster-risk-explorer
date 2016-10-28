#!/bin/zsh
setopt null_glob
BASE=../CDRP\ Platform\ Development\ Seed
for country in countries/[A-Z][A-Z]_grid.geojson; do
  echo country-grid: ${country:t:r}
  scripts/js/relative.js ${country}
done

scripts/js/relative.js countries_joined.geojson
scripts/js/relative.js admin1_joined.geojson
