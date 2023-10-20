const axios = require('axios')

/* const url = 'https://dinosaur-facts-api.shultzlab.com/dinosaurs' */ 
const url = 'https://pokeapi.co/api/v2/pokemon'

axios('get',url,{Json:true})
.then(function(respuesta){
    console.log(respuesta)
} )
.catch(function (eror){
 console.log(eror)
} )








