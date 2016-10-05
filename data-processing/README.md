### Building Retrofit/Replacement Data

The `buildings.json` file in the `data` folder is created by the following process

- Extract information from Excel files and save into csvs matching the format of `buildings.csv` and `building-info.csv`
- Run `process_buildings.sh`

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
