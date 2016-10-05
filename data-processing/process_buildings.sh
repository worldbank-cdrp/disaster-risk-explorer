#!/bin/bash

cat buildings.csv | csv2json | jq '. | map({ Code: .Code, (.Class): del(.Class, .Code) }) | group_by(.Code) | map(add) | map({(.Code): del(.Code)}) | add' > buildings.json
cat buildings-info.csv | csv2json | jq '. | map({(.Code): del(.Code) }) | add' > buildings-info.json
node ./merge-building-json.js
mv building-data.json ../app/assets/data/buildings.json
