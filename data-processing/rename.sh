for f in Belize*; do mv "$f" $(echo "$f" | sed 's/^Belize/BZ/g'); done
for f in BLZ*; do mv "$f" $(echo "$f" | sed 's/^BLZ/BZ/g'); done
for f in CRI*; do mv "$f" $(echo "$f" | sed 's/^CRI/CR/g'); done
for f in GTM*; do mv "$f" $(echo "$f" | sed 's/^GTM/GT/g'); done
for f in Grenada*; do mv "$f" $(echo "$f" | sed 's/^Grenada/GD/g'); done
for f in GRA*; do mv "$f" $(echo "$f" | sed 's/^GRA/GD/g'); done
for f in HND*; do mv "$f" $(echo "$f" | sed 's/^HND/HN/g'); done
for f in Jamaica*; do mv "$f" $(echo "$f" | sed 's/^Jamaica/JM/g'); done
for f in JAM*; do mv "$f" $(echo "$f" | sed 's/^JAM/JM/g'); done
for f in NIC*; do mv "$f" $(echo "$f" | sed 's/^NIC/NI/g'); done
for f in PAN*; do mv "$f" $(echo "$f" | sed 's/^PAN/PA/g'); done
for f in SLV*; do mv "$f" $(echo "$f" | sed 's/^SLV/SV/g'); done
for f in StLucia*; do mv "$f" $(echo "$f" | sed 's/^StLucia/SL/g'); done
for f in LCA*; do mv "$f" $(echo "$f" | sed 's/^LCA/SL/g'); done
## for f in * ; do mv -- "$f" "$(tr [:lower:] [:upper:] <<< "$f")" ; done
