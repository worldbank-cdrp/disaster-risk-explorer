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
# for tif in ${EQ_HZ}/probabilistic/*.tif; do
#     echo "normalizing ${tif}"
#     gdal_translate -of XYZ ${tif} ${tif/tif/xyz}
#     scripts/js/xyz-to-polygon.js ${tif/tif/xyz} ${tif/tif/geojson} risk
#     ogr2ogr -f GeoJSON -clipsrc countries/${${tif:t}:0:2}.geojson ${tif:r}_clipped.geojson ${tif/tif/geojson}
# done
# for tif in ${WS_HZ}/probabilistic/*.tif; do
#     echo "normalizing ${tif}"
#     gdal_translate -of XYZ ${tif} ${tif/tif/xyz}
#     scripts/js/xyz-to-polygon.js ${tif/tif/xyz} ${tif/tif/geojson} risk
#     ogr2ogr -f GeoJSON -clipsrc countries/${${tif:t}:0:2}.geojson ${tif:r}_clipped.geojson ${tif/tif/geojson}
# done
# for tif in ${FL_HZ}/probabilistic/*.tif; do
#     echo "normalizing ${tif}"
#     gdal_translate -of XYZ ${tif} ${tif/tif/xyz}
#     scripts/js/xyz-to-polygon.js ${tif/tif/xyz} ${tif/tif/geojson} risk
#     ogr2ogr -f GeoJSON -clipsrc countries/${${tif:t}:0:2}.geojson ${tif:r}_clipped.geojson ${tif/tif/geojson}
# done

# historic

echo "normalizing historic hazards"
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

gdal_translate -of XYZ $WS_HZ/historic/CR_joan_1998_pgs.tif $WS_HZ/historic/CR_joan_1998.xyz
gdal_translate -of XYZ $WS_HZ/historic/GT_mitch_1998_pgs.tif $WS_HZ/historic/GT_mitch_1998.xyz
gdal_translate -of XYZ $WS_HZ/historic/HN_mitch_1998_pgs.tif $WS_HZ/historic/HN_mitch_1998.xyz
gdal_translate -of XYZ $WS_HZ/historic/SV_agatha_2010_pgs.tif $WS_HZ/historic/SV_agatha_2010.xyz
gdal_translate -of XYZ $WS_HZ/historic/NI_felix_2007_pgs.tif $WS_HZ/historic/NI_felix_2007.xyz

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

scripts/js/xyz-to-polygon.js $WS_HZ/historic/CR_joan_1998.xyz $WS_HZ/historic/CR_joan_1998.geojson V10_peakGu
scripts/js/xyz-to-polygon.js $WS_HZ/historic/GT_mitch_1998.xyz $WS_HZ/historic/GT_mitch_1998.geojson V10_peakGu
scripts/js/xyz-to-polygon.js $WS_HZ/historic/HN_mitch_1998.xyz $WS_HZ/historic/HN_mitch_1998.geojson V10_peakGu
scripts/js/xyz-to-polygon.js $WS_HZ/historic/SV_agatha_2010.xyz $WS_HZ/historic/SV_agatha_2010.geojson V10_peakGu
scripts/js/xyz-to-polygon.js $WS_HZ/historic/NI_felix_2007.xyz $WS_HZ/historic/NI_felix_2007.geojson V10_peakGu

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

ogr2ogr -f GeoJSON -clipsrc countries/CR.geojson $WS_HZ/historic/CR_joan_1998_clipped.geojson $WS_HZ/historic/CR_joan_1998.geojson
ogr2ogr -f GeoJSON -clipsrc countries/GT.geojson $WS_HZ/historic/GT_mitch_1998_clipped.geojson $WS_HZ/historic/GT_mitch_1998.geojson
ogr2ogr -f GeoJSON -clipsrc countries/HN.geojson $WS_HZ/historic/HN_mitch_1998_clipped.geojson $WS_HZ/historic/HN_mitch_1998.geojson
ogr2ogr -f GeoJSON -clipsrc countries/SV.geojson $WS_HZ/historic/SV_agatha_2010_clipped.geojson $WS_HZ/historic/SV_agatha_2010.geojson
ogr2ogr -f GeoJSON -clipsrc countries/NI.geojson $WS_HZ/historic/NI_felix_2007_clipped.geojson $WS_HZ/historic/NI_felix_2007.geojson


# caribbean historic windstorm hazards are shapefiles
ogr2ogr -f GeoJSON -t_srs crs:84 $WS_HZ/historic/BZ_iris2001_clipped.geojson $WS_HZ/historic/BZ_iris2001.shp
ogr2ogr -f GeoJSON -t_srs crs:84 $WS_HZ/historic/GD_ivan2004_clipped.geojson $WS_HZ/historic/GD_ivan2004.shp
ogr2ogr -f GeoJSON -t_srs crs:84 $WS_HZ/historic/JM_gilbert1988_clipped.geojson $WS_HZ/historic/JM_gilbert1988.shp
ogr2ogr -f GeoJSON -t_srs crs:84 $WS_HZ/historic/LC_allen1980_clipped.geojson $WS_HZ/historic/LC_allen1980.shp

### LOSS
#
EQ_LOSS=../CDRP\ Platform\ Development\ Seed/Loss/Earthquake
WS_LOSS=../CDRP\ Platform\ Development\ Seed/Loss/Windstorm
# mv ../CDRP\ Platform\ Development\ Seed/Loss/Flood/probabilistic_\(asset\ loss\) ../CDRP\ Platform\ Development\ Seed/Loss/Flood/probabilistic
FL_LOSS=../CDRP\ Platform\ Development\ Seed/Loss/Flood
#

$0:h/rename.sh $EQ_LOSS/historic
$0:h/rename.sh $WS_LOSS/historic

# # probabilistic
# ## Polygonize flood tifs
# for tif in $FL_LOSS/probabilistic/*.tif; do
#   gdal_polygonize.py ${tif} -f "GeoJSON" ${tif/tif/geojson} fieldname ${${tif:t:r}:4}
# done
#
## Convert all to geojson + merge if necessary

# ogr2ogr -f GeoJSON -t_srs crs:84 $EQ_LOSS/probabilistic/CA_Earthquake_AAL.geojson $EQ_LOSS/CA_Earthquake_AAL.shp
# ogr2ogr -f GeoJSON -t_srs crs:84 $EQ_LOSS/probabilistic/Caribbean_Earthquake_AAL.geojson $EQ_LOSS/probabilistic/Caribbean_Earthquake_AAL.shp
# geojson-merge $EQ_LOSS/probabilistic/CA_Earthquake_AAL.geojson $EQ_LOSS/probabilistic/Caribbean_Earthquake_AAL.geojson > $EQ_LOSS/probabilistic/aal.geojson
# ogr2ogr -f GeoJSON -t_srs crs:84 $WS_LOSS/probabilistic/aal.geojson $WS_LOSS/probabilistic/CA_CARIB_WS_AAL.shp
# ogr2ogr -f GeoJSON -t_srs crs:84 $WS_LOSS/probabilistic/pml.geojson $WS_LOSS/probabilistic/CA_CARIB_WS_PML.shp
# geojson-merge $FL_LOSS/probabilistic/*.geojson > $FL_LOSS/probabilistic/pml.geojson

# historic

echo "normalizing historic loss"

ogr2ogr -f GeoJSON -t_srs crs:84 $EQ_LOSS/historic/GD_1839.geojson $EQ_LOSS/historic/GD_1839.shp
ogr2ogr -f GeoJSON -t_srs crs:84 $EQ_LOSS/historic/LC_1843.geojson $EQ_LOSS/historic/LC_1843.shp
ogr2ogr -f GeoJSON -t_srs crs:84 $EQ_LOSS/historic/BZ_24696.geojson $EQ_LOSS/historic/BZ_24696.shp
ogr2ogr -f GeoJSON -t_srs crs:84 $EQ_LOSS/historic/CR_6383.geojson $EQ_LOSS/historic/CR_6383.shp
ogr2ogr -f GeoJSON -t_srs crs:84 $EQ_LOSS/historic/GT_1902.geojson $EQ_LOSS/historic/GT_1902.shp
ogr2ogr -f GeoJSON -t_srs crs:84 $EQ_LOSS/historic/HN_13920.geojson $EQ_LOSS/historic/HN_13920.shp
ogr2ogr -f GeoJSON -t_srs crs:84 $EQ_LOSS/historic/JM_1907s1.geojson $EQ_LOSS/historic/JM_1907s1.shp
ogr2ogr -f GeoJSON -t_srs crs:84 $EQ_LOSS/historic/NI_7416.geojson $EQ_LOSS/historic/NI_7416.shp
ogr2ogr -f GeoJSON -t_srs crs:84 $EQ_LOSS/historic/PA_3882.geojson $EQ_LOSS/historic/PA_3882.shp
ogr2ogr -f GeoJSON -t_srs crs:84 $EQ_LOSS/historic/SV_20460.geojson $EQ_LOSS/historic/SV_20460.shp

ogr2ogr -f GeoJSON -t_srs crs:84 $WS_LOSS/historic/BZ_iris2001.geojson $WS_LOSS/historic/BZ_iris2001.shp
ogr2ogr -f GeoJSON -t_srs crs:84 $WS_LOSS/historic/GD_ivan2004.geojson $WS_LOSS/historic/GD_ivan2004.shp
ogr2ogr -f GeoJSON -t_srs crs:84 $WS_LOSS/historic/JM_gilbert1988.geojson $WS_LOSS/historic/JM_gilbert1988.shp
ogr2ogr -f GeoJSON -t_srs crs:84 $WS_LOSS/historic/LC_allen1980.geojson $WS_LOSS/historic/LC_allen1980.shp
ogr2ogr -f GeoJSON -t_srs crs:84 $WS_LOSS/historic/CR_joan1988.geojson $WS_LOSS/historic/CR_joan1988.shp
ogr2ogr -f GeoJSON -t_srs crs:84 $WS_LOSS/historic/GT_mitch1998.geojson $WS_LOSS/historic/GT_mitch1998.shp
ogr2ogr -f GeoJSON -t_srs crs:84 $WS_LOSS/historic/HN_mitch1998.geojson $WS_LOSS/historic/HN_mitch1998.shp
ogr2ogr -f GeoJSON -t_srs crs:84 $WS_LOSS/historic/SV_agatha2010.geojson $WS_LOSS/historic/SV_agatha2010.shp
ogr2ogr -f GeoJSON -t_srs crs:84 $WS_LOSS/historic/NI_felix2007.geojson $WS_LOSS/historic/NI_felix2007.shp

# ### EXPOSURE
# EX=../CDRP\ Platform\ Development\ Seed/Exposure
#
# ## Polygonize or convert to geojson
# gdal_polygonize.py "$EX/GDP/gdp.tif" -f "GeoJSON" "$EX/GDP/gdp.geojson" fieldname "gdp"
# gdal_polygonize.py "$EX/Infrastructure/infrastructure.tif" -f "GeoJSON" "$EX/Infrastructure/infrastructure.geojson" fieldname "infrastructure"
# ogr2ogr -f GeoJSON -t_srs crs:84 "$EX/Building Stock/building-stock.geojson" "$EX/Building Stock/Building stock.shp"
