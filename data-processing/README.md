### Building Retrofit/Replacement Data

The `buildings.json` file in the `data` folder is created by the following process

- Extract information from Excel files and save into csvs matching the format of `replacement.csv` and `retrofit.csv`
- Run two `jq` commands:
  - `cat retrofit.csv | csvjson | jq 'map( { (.id):  { retrofit: del(.id) }} ) | add' > retrofit.json`
  - `cat retrofit.csv | csvjson | jq 'map( { (.id):  { retrofit: del(.id) }} ) | add' > replacement.json`
- Run `merge-building-json.js` to merge the two files
