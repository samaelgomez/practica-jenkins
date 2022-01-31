git config user.email "samaelgomezherrera@gmail.com"
git config user.name "samaelgomez"
git add .
if [ git diff --cached --exit-code == 0 ]; then git commit -m "Pipeline ejecutada por " $1 ". Motivo: " $2; git push origin master; fi