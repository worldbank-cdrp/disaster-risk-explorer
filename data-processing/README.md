### Building Retrofit/Replacement Data

The `buildings.json` file in the `data` folder is created by the following process

- Extract information from Excel files and save into csvs matching the format of `buildings.csv` and `retrofit.csv`
- Run the following command :
  - `cat buildings.csv | csv2json | jq '. | map({ Code: .Code, (.Class): del(.Class, .Code) }) | group_by(.Code) | map(add) | map({(.Code): del(.Code)}) | add' > app/assets/data/buildings.json`
