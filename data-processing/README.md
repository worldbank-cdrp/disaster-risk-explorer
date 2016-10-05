### Building Retrofit/Replacement Data

The `buildings.json` file in the `data` folder is created by the following process

- Extract information from Excel files and save into csvs matching the format of `replacement.csv` and `retrofit.csv`
- Run two `jq` commands:
  - `cat retrofit.csv | csvjson | jq 'map( { (.id):  { retrofit: del(.id) }} ) | add' > retrofit.json`
  - `cat replacement.csv | csvjson | jq 'map( { (.id):  { replacement: del(.id) }} ) | add' > replacement.json`
- Run `merge-building-json.js` to merge the two files

### Spatial Data

Requires:
  - [node](https://nodejs.org/en/); at least v6.2.0
  - [zsh](http://www.zsh.org/) for globbing/pattern replacement
  - [gdal](http://www.gdal.org/) for polygonizing and conversion to GeoJSON
  - [geojson-merge](https://github.com/mapbox/geojson-merge) as a global package for merging GeoJSON
  - [geojson-flatten](https://github.com/mapbox/geojson-flatten) as a global package for flattening GeoJSON

Process:
  - Download all required data from [Box](https://app.box.com/files) and place the base folder (`CDRP Platform Development Seed`) in the root of this repo
  - Run `process.sh`
