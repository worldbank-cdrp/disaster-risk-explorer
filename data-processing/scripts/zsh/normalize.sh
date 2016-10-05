#!/bin/zsh

### HAZARD
## Rename
$0:h/rename.sh ../CDRP\ Platform\ Development\ Seed/Hazard/Earthquake/probabilistic
$0:h/rename.sh ../CDRP\ Platform\ Development\ Seed/Hazard/Windstorm/probabilistic
$0:h/rename.sh ../CDRP\ Platform\ Development\ Seed/Hazard/Flood/probabilistic

## Polygonize & clip
for tif in ../CDRP\ Platform\ Development\ Seed/Hazard/Earthquake/probabilistic/*.tif; do
    gdal_polygonize.py ${tif} -f "GeoJSON" ${tif/tif/geojson} fieldname "risk"
    ogr2ogr -f GeoJSON -clipsrc countries/${${tif:t}:0:2}.geojson ${tif:r}_clipped.geojson ${tif/tif/geojson}
done
for tif in ../CDRP\ Platform\ Development\ Seed/Hazard/Windstorm/probabilistic/*.tif; do
    gdal_polygonize.py ${tif} -f "GeoJSON" ${tif/tif/geojson} fieldname "risk"
    ogr2ogr -f GeoJSON -clipsrc countries/${${tif:t}:0:2}.geojson ${tif:r}_clipped.geojson ${tif/tif/geojson}
done
for tif in ../CDRP\ Platform\ Development\ Seed/Hazard/Flood/probabilistic/*.tif; do
    gdal_polygonize.py ${tif} -f "GeoJSON" ${tif/tif/geojson} fieldname "risk"
    ogr2ogr -f GeoJSON -clipsrc countries/${${tif:t}:0:2}.geojson ${tif:r}_clipped.geojson ${tif/tif/geojson}
done

### LOSS

EQ_LOSS=../CDRP\ Platform\ Development\ Seed/Loss/Earthquake/probabilistic
WS_LOSS=../CDRP\ Platform\ Development\ Seed/Loss/Windstorm/probabilistic
FL_LOSS=../CDRP\ Platform\ Development\ Seed/Loss/Flood/probabilistic_\(asset\ loss\)

## Polygonize flood tifs
for tif in $FL_LOSS/*.tif; do
  gdal_polygonize.py ${tif} -f "GeoJSON" ${tif/tif/geojson} fieldname ${${tif:t:r}:4}
done

## Convert all to geojson + merge if necessary

ogr2ogr -f GeoJSON -t_srs crs:84 $EQ_LOSS/CA_Earthquake_PML_AAL_Admin0.geojson $EQ_LOSS/CA_Earthquake_PML_AAL_Admin0.shp
ogr2ogr -f GeoJSON -t_srs crs:84 $EQ_LOSS/Caribbean_Earthquake_PML_AAL_Admin0.geojson $EQ_LOSS/Caribbean_Earthquake_PML_AAL_Admin0.shp
geojson-merge $EQ_LOSS/CA_Earthquake_PML_AAL_Admin0.geojson $EQ_LOSS/Caribbean_Earthquake_PML_AAL_Admin0.geojson > $EQ_LOSS/combined.geojson
ogr2ogr -f GeoJSON -t_srs crs:84 $WS_LOSS/CA_CARIB_WS_PML_AAL_Admin0.geojson $WS_LOSS/CA_CARIB_WS_PML_AAL_Admin0.shp
ogr2ogr -f GeoJSON -t_srs crs:84 $FL_LOSS/CA_Asset_AAL_admin0.geojson $FL_LOSS/CA_ASSET_AAL_ADMIN0.SHP
geojson-merge $FL_LOSS/*.geojson > $FL_LOSS/combined.geojson

## Flatten MultiPolygons (or later aggregation clipping/intersecting will fail) & rename
cat $EQ_LOSS/combined.geojson | geojson-flatten > $EQ_LOSS/aal.geojson
cat $WS_LOSS/CA_CARIB_WS_PML_AAL_Admin0.geojson | geojson-flatten > $WS_LOSS/aal.geojson
cat $FL_LOSS/combined.geojson | geojson-flatten > $FL_LOSS/aal.geojson

### EXPOSURE
EX=../CDRP\ Platform\ Development\ Seed/Exposure

## Polygonize or convert to geojson
gdal_polygonize.py "$EX/GDP/gdp.tif" -f "GeoJSON" "$EX/GDP/gdp.geojson" fieldname "gdp"
gdal_polygonize.py "$EX/Infrastructure/infrastructure.tif" -f "GeoJSON" "$EX/Infrastructure/infrastructure.geojson" fieldname "infrastructure"
ogr2ogr -f GeoJSON -t_srs crs:84 "$EX/Building Stock/building-stock.geojson" "$EX/Building Stock/Building stock.shp"
