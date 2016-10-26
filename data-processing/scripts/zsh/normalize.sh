#!/bin/zsh

### HAZARD
## Rename
# $0:h/rename.sh ../CDRP\ Platform\ Development\ Seed/Hazard/Earthquake/probabilistic
# $0:h/rename.sh ../CDRP\ Platform\ Development\ Seed/Hazard/Windstorm/probabilistic
# $0:h/rename.sh ../CDRP\ Platform\ Development\ Seed/Hazard/Flood/probabilistic
# $0:h/rename.sh ../CDRP\ Platform\ Development\ Seed/Hazard/Earthquake/historic
# $0:h/rename.sh ../CDRP\ Platform\ Development\ Seed/Hazard/Windstorm/historic

EQ_HZ=../CDRP\ Platform\ Development\ Seed/Hazard/Earthquake
WS_HZ=../CDRP\ Platform\ Development\ Seed/Hazard/Windstorm
FL_HZ=../CDRP\ Platform\ Development\ Seed/Hazard/Flood

## Raster to polygon & clip
# probabilistic
for tif in ${EQ_HZ}/probabilistic/*.tif; do
    echo "normalizing ${tif}"
    gdal_translate -of XYZ ${tif} ${tif/tif/xyz}
    scripts/js/xyz-to-polygon.js ${tif/tif/xyz} ${tif/tif/geojson} risk
    ogr2ogr -f GeoJSON -clipsrc countries/${${tif:t}:0:2}.geojson ${tif:r}_clipped.geojson ${tif/tif/geojson}
done
for tif in ${WS_HZ}/probabilistic/*.tif; do
    echo "normalizing ${tif}"
    gdal_translate -of XYZ ${tif} ${tif/tif/xyz}
    scripts/js/xyz-to-polygon.js ${tif/tif/xyz} ${tif/tif/geojson} risk
    ogr2ogr -f GeoJSON -clipsrc countries/${${tif:t}:0:2}.geojson ${tif:r}_clipped.geojson ${tif/tif/geojson}
done
for tif in ${FL_HZ}/probabilistic/*.tif; do
    echo "normalizing ${tif}"
    gdal_translate -of XYZ ${tif} ${tif/tif/xyz}
    scripts/js/xyz-to-polygon.js ${tif/tif/xyz} ${tif/tif/geojson} risk
    ogr2ogr -f GeoJSON -clipsrc countries/${${tif:t}:0:2}.geojson ${tif:r}_clipped.geojson ${tif/tif/geojson}
done

# historic

echo "normalizing historic"
mv $EQ_HZ/historic/1839.tif $EQ_HZ/historic/GD_1839.tif
mv $EQ_HZ/historic/1843.tif $EQ_HZ/historic/LC_1843.tif

gdal_translate -of XYZ $EQ_HZ/historic/GD_1839.tif $EQ_HZ/historic/GD_1839.xyz
gdal_translate -of XYZ $EQ_HZ/historic/LC_1843.tif $EQ_HZ/historic/LC_1843.xyz
gdal_translate -of XYZ $EQ_HZ/historic/BZ_24696.tif $EQ_HZ/historic/BZ_24696.xyz
gdal_translate -of XYZ $EQ_HZ/historic/CR_6383.tif $EQ_HZ/historic/CR_6383.xyz
gdal_translate -of XYZ $EQ_HZ/historic/GT_1902.tif $EQ_HZ/historic/GT_1902.xyz
gdal_translate -of XYZ $EQ_HZ/historic/HN_13920.tif $EQ_HZ/historic/HN_13920.xyz
gdal_translate -of XYZ $EQ_HZ/historic/JM_1907s1.tif $EQ_HZ/historic/JM_1907s1.xyz
gdal_translate -of XYZ $EQ_HZ/historic/NI_7416.tif $EQ_HZ/historic/NI_7416.xyz
gdal_translate -of XYZ $EQ_HZ/historic/PA_3882.tif $EQ_HZ/historic/PA_3882.xyz
gdal_translate -of XYZ $EQ_HZ/historic/SV_20460.tif $EQ_HZ/historic/SV_20460.xyz

scripts/js/xyz-to-polygon.js $EQ_HZ/historic/GD_1839.xyz $EQ_HZ/historic/GD_1839.geojson risk
scripts/js/xyz-to-polygon.js $EQ_HZ/historic/LC_1843.xyz $EQ_HZ/historic/LC_1843.geojson risk
scripts/js/xyz-to-polygon.js $EQ_HZ/historic/BZ_24696.xyz $EQ_HZ/historic/BZ_24696.geojson risk
scripts/js/xyz-to-polygon.js $EQ_HZ/historic/CR_6383.xyz $EQ_HZ/historic/CR_6383.geojson risk
scripts/js/xyz-to-polygon.js $EQ_HZ/historic/GT_1902.xyz $EQ_HZ/historic/GT_1902.geojson risk
scripts/js/xyz-to-polygon.js $EQ_HZ/historic/HN_13920.xyz $EQ_HZ/historic/HN_13920.geojson risk
scripts/js/xyz-to-polygon.js $EQ_HZ/historic/JM_1907s1.xyz $EQ_HZ/historic/JM_1907s1.geojson risk
scripts/js/xyz-to-polygon.js $EQ_HZ/historic/NI_7416.xyz $EQ_HZ/historic/NI_7416.geojson risk
scripts/js/xyz-to-polygon.js $EQ_HZ/historic/PA_3882.xyz $EQ_HZ/historic/PA_3882.geojson risk
scripts/js/xyz-to-polygon.js $EQ_HZ/historic/SV_20460.xyz $EQ_HZ/historic/SV_20460.geojson risk

ogr2ogr -f GeoJSON -clipsrc countries/GD.geojson $EQ_HZ/historic/GD_1839_clipped.geojson $EQ_HZ/historic/GD_1839.geojson
ogr2ogr -f GeoJSON -clipsrc countries/LC.geojson $EQ_HZ/historic/LC_1843_clipped.geojson $EQ_HZ/historic/LC_1843.geojson
ogr2ogr -f GeoJSON -clipsrc countries/BZ.geojson $EQ_HZ/historic/BZ_24696_clipped.geojson $EQ_HZ/historic/BZ_24696.geojson
ogr2ogr -f GeoJSON -clipsrc countries/CR.geojson $EQ_HZ/historic/CR_6383_clipped.geojson $EQ_HZ/historic/CR_6383.geojson
ogr2ogr -f GeoJSON -clipsrc countries/GT.geojson $EQ_HZ/historic/GT_1902_clipped.geojson $EQ_HZ/historic/GT_1902.geojson
ogr2ogr -f GeoJSON -clipsrc countries/HN.geojson $EQ_HZ/historic/HN_13920_clipped.geojson $EQ_HZ/historic/HN_13920.geojson
ogr2ogr -f GeoJSON -clipsrc countries/JM.geojson $EQ_HZ/historic/JM_1907s1_clipped.geojson $EQ_HZ/historic/JM_1907s1.geojson
ogr2ogr -f GeoJSON -clipsrc countries/NI.geojson $EQ_HZ/historic/NI_7416_clipped.geojson $EQ_HZ/historic/NI_7416.geojson
ogr2ogr -f GeoJSON -clipsrc countries/PA.geojson $EQ_HZ/historic/PA_3882_clipped.geojson $EQ_HZ/historic/PA_3882.geojson
ogr2ogr -f GeoJSON -clipsrc countries/SV.geojson $EQ_HZ/historic/SV_20460_clipped.geojson $EQ_HZ/historic/SV_20460.geojson

### LOSS
#
# EQ_LOSS=../CDRP\ Platform\ Development\ Seed/Loss/Earthquake/probabilistic
# WS_LOSS=../CDRP\ Platform\ Development\ Seed/Loss/Windstorm/probabilistic
## mv ../CDRP\ Platform\ Development\ Seed/Loss/Flood/probabilistic_\(asset\ loss\) ../CDRP\ Platform\ Development\ Seed/Loss/Flood/probabilistic
# FL_LOSS=../CDRP\ Platform\ Development\ Seed/Loss/Flood/probabilistic
#
# ## Polygonize flood tifs
# for tif in $FL_LOSS/*.tif; do
#   gdal_polygonize.py ${tif} -f "GeoJSON" ${tif/tif/geojson} fieldname ${${tif:t:r}:4}
# done
#
## Convert all to geojson + merge if necessary

# ogr2ogr -f GeoJSON -t_srs crs:84 $EQ_LOSS/CA_Earthquake_AAL.geojson $EQ_LOSS/CA_Earthquake_AAL.shp
# ogr2ogr -f GeoJSON -t_srs crs:84 $EQ_LOSS/Caribbean_Earthquake_AAL.geojson $EQ_LOSS/Caribbean_Earthquake_AAL.shp
# geojson-merge $EQ_LOSS/CA_Earthquake_AAL.geojson $EQ_LOSS/Caribbean_Earthquake_AAL.geojson > $EQ_LOSS/aal.geojson
# ogr2ogr -f GeoJSON -t_srs crs:84 $WS_LOSS/aal.geojson $WS_LOSS/CA_CARIB_WS_AAL.shp
# ogr2ogr -f GeoJSON -t_srs crs:84 $WS_LOSS/pml.geojson $WS_LOSS/CA_CARIB_WS_PML.shp
# geojson-merge $FL_LOSS/*.geojson > $FL_LOSS/pml.geojson

# ### EXPOSURE
# EX=../CDRP\ Platform\ Development\ Seed/Exposure
#
# ## Polygonize or convert to geojson
# gdal_polygonize.py "$EX/GDP/gdp.tif" -f "GeoJSON" "$EX/GDP/gdp.geojson" fieldname "gdp"
# gdal_polygonize.py "$EX/Infrastructure/infrastructure.tif" -f "GeoJSON" "$EX/Infrastructure/infrastructure.geojson" fieldname "infrastructure"
# ogr2ogr -f GeoJSON -t_srs crs:84 "$EX/Building Stock/building-stock.geojson" "$EX/Building Stock/Building stock.shp"
