const express = require('express');
const app = express();

app.search('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.listen(3000, () => {
    console.log('Servidor funcional en http://localhost:3000')
});
