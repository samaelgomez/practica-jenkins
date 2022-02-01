if [ $1 -eq 0 ] && [ $2 -eq 0 ] && [ $3 -eq 0 ]; then
    vercel --token $4 --name practica-jenkins --confirm
fi