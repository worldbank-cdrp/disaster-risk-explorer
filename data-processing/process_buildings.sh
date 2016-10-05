#!/bin/bash

cat building/buildings.csv | csv2json | jq '. | map({ Code: .Code, (.Class): del(.Class, .Code) }) | group_by(.Code) | map(add) | map({(.Code): del(.Code)}) | add' > building/buildings.json
cat building/buildings-info.csv | csv2json | jq '. | map({(.Code): del(.Code) }) | add' > building/buildings-info.json
node building/merge-building-json.js
mv building/building-data.json ../app/assets/data/buildings.json
