const express = require('express')
const app = express()
const port= 3000

app.get('/persona/:idPersona', (req, res) => {
   const personas = [{id: 1, nombre:'Sebas', apellido:'avila'}, {id: 2, nombre:'gaston', apellido:'perez'}]
    const idPersona= req.params.idPersona;
    const resultado = personas.filter(
        (persona) => persona.id == idPersona
    )
    console.log(req.params)
    res.send(resultado)


    //   req.query es para obtener la informacion que viene de las variables de los signos de preguntas de la url, por ejemplo : /persona?nombre=
    // req.params es para obtener la informacion de un identificador de la ruta, por ejemplo : /:idPersona
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)

})

