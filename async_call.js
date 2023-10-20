const request = require('request')
const url = 'https://dinosaur-facts-api.shultzlab.com/dinosaurs'

let r = request(url,
    {json:true},
    (eror,respuesta,body)=>{
       let dinosaurios  = body 
       dinosaurios.forEach((dinosaurio)=>{
           console.log(dinosaurio.Name) 
       })
    })