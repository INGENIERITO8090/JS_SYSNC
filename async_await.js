const axios = require('axios')
const url = 'https://www.moogleapi.com/api/v1/games' 
async function obtenerGames(){ 

try {
    const response =  await axios.get(url); 
     let games = response.data 
        games.forEach(game => {
            console.log(game.title)
            console.log("-------------")
            console.log(game.platform)
        }); 
} catch (error) {
    console.log(error)
}
} 
obtenerGames()