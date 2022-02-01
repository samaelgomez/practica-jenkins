git config user.email "samaelgomezherrera@gmail.com"
git config user.name "samaelgomez"
git remote set-url origin $3
git add .
git commit -m "Pipeline ejecutada por $1. Motivo: $2"
git push origin HEAD:master