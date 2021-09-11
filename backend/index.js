const express = require('express')

const app = express()
const PORT = 3000

app.use(express.static('assets')) // configurar archivos estaticos
app.set('view engine', 'ejs') // configurar ejs template

app.get('/', (req, res)=> {
    res.render('principal')
})

app.listen(PORT, ()=> {
    console.log(`Servidor ejecutandose en el puerto ${PORT}`)
})