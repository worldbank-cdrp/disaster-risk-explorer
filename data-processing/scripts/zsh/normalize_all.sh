#!/bin/zsh
## Manual rename, conversion, and cleaning of Loss Files

## Polygonize flood tifs
for tif in ../raw/flood_aal_probabilistic/*.tif; do
  gdal_polygonize.py ${tif} -f "GeoJSON" ${tif/tif/geojson} fieldname ${${tif:t:r}:4}
done

## Convert all to geojson + merge if necessary
ogr2ogr -f GeoJSON -t_srs crs:84 ../raw/earthquake_aal_probabilistic/CA_Earthquake_PML_AAL_Admin0.geojson ../raw/earthquake_aal_probabilistic/CA_Earthquake_PML_AAL_Admin0.shp
ogr2ogr -f GeoJSON -t_srs crs:84 ../raw/earthquake_aal_probabilistic/Caribbean_Earthquake_PML_AAL_Admin0.geojson ../raw/earthquake_aal_probabilistic/Caribbean_Earthquake_PML_AAL_Admin0.shp
geojson-merge ../raw/earthquake_aal_probabilistic/CA_Earthquake_PML_AAL_Admin0.geojson ../raw/earthquake_aal_probabilistic/Caribbean_Earthquake_PML_AAL_Admin0.geojson > ../raw/earthquake_aal_probabilistic/combined.geojson
ogr2ogr -f GeoJSON -t_srs crs:84 ../raw/windstorm_aal_probabbilistic/CA_CARIB_WS_PML_AAL_Admin0.geojson ../raw/windstorm_aal_probabbilistic/CA_CARIB_WS_PML_AAL_Admin0.shp
ogr2ogr -f GeoJSON -t_srs crs:84 ../raw/flood_aal_probabilistic/CA_Asset_AAL_admin0.geojson ../raw/flood_aal_probabilistic/CA_ASSET_AAL_ADMIN0.SHP
geojson-merge ../raw/flood_aal_probabilistic/*.geojson > ../raw/flood_aal_probabilistic/combined.geojson

## Flatten MultiPolygons (or later aggregation clipping/intersecting will fail)
## Rename
cat ../raw/earthquake_aal_probabilistic/combined.geojson | geojson-flatten > ../raw/earthquake_aal_probabilistic/aal.geojson
cat ../raw/windstorm_aal_probabbilistic/CA_CARIB_WS_PML_AAL_Admin0.geojson | geojson-flatten > ../raw/windstorm_aal_probabbilistic/aal.geojson
cat ../raw/flood_aal_probabilistic/combined.geojson | geojson-flatten > ../raw/flood_aal_probabilistic/aal.geojson
