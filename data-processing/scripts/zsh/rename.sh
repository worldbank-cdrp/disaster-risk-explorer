#!/bin/zsh
echo Renaming files in $1
setopt null_glob
for f in $1/*; do mv $f $f:l; done
for f in $1/belize*; do mv $f ${f:s/belize/BZ/}; done
for f in $1/blz*; do mv $f ${f:s/blz/BZ/}; done
for f in $1/cri*; do mv $f ${f:s/cri/CR/}; done
for f in $1/gtm*; do mv $f ${f:s/gtm/GT/}; done
for f in $1/grenada*; do mv $f ${f:s/grenada/GD/}; done
for f in $1/gra*; do mv $f ${f:s/gra/GD/}; done
for f in $1/hnd*; do mv $f ${f:s/hnd/HN/}; done
for f in $1/jamaica*; do mv $f ${f:s/jamaica/JM/}; done
for f in $1/jam*; do mv $f ${f:s/jam/JM/}; done
for f in $1/nic*; do mv $f ${f:s/nic/NI/}; done
for f in $1/pan*; do mv $f ${f:s/pan/PA/}; done
for f in $1/slv*; do mv $f ${f:s/slv/SV/}; done
for f in $1/stlucia*; do mv $f ${f:s/stlucia/LC/}; done
for f in $1/lca*; do mv $f ${f:s/lca/LC/}; done
