### Building Retrofit/Replacement Data

The `buildings.json` file in the `data` folder is created by the following process

- Extract information from Excel files and save into csvs matching the format of `replacement.csv` and `retrofit.csv`
- Run two `jq` commands:
  - `cat retrofit.csv | csvjson | jq 'map( { (.id):  { retrofit: del(.id) }} ) | add' > retrofit.json`
  - `cat replacement.csv | csvjson | jq 'map( { (.id):  { replacement: del(.id) }} ) | add' > replacement.json`
- Run `merge-building-json.js` to merge the two files

### Spatial Data

Requires:
  - [zsh](http://www.zsh.org/) for globbing/pattern replacement
  - [gdal](http://www.gdal.org/) for polygonizing and conversion to GeoJSON
  - [geojson-merge](https://github.com/mapbox/geojson-merge) as a global package for merging geojson

Process:
  - Download all required data from [Box](https://app.box.com/files) and place the base folder (`CDRP Platform Development Seed`) in the root of this repo
  - Run `process.sh`

Rough outline:
  - create `/countries` folder with geojson for each country as helper
  - download data from WB box (need to standardize format)
  - `rename.sh to rename their files to two digit codes
  - `polygonize_hazard.sh` to go from tif to GeoJSON
  - `clip_hazard.sh` to contain the above to country bounds
  - `clip_all.sh` to clip other large files to country grids
  - `agg.sh` to gather all the data on to the grid
  - `merge.js` to merge the country grids into one large grid
