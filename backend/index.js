const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))
app.use(express.static(path.join(__dirname, 'assets')))

app.listen(3000, () => {
    console.log('Servidor funcional en http://localhost:3000')
});

app.get("/",(req,res)=>{
    res.render('index');
})