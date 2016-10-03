#!/bin/zsh
for geo in ../countries/[A-Z][A-Z].geojson; do
    echo $geo
    node ./clear.js $geo
done
