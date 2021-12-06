const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const cors = require('cors');

//middlewares

app.use(bodyParser.json());

app.use((req, res, next) => {
    // Dominio que tengan acceso (ej. 'http://example.com')
       res.setHeader('Access-Control-Allow-Origin', '*');    
    // Metodos de solicitud que deseas permitir
       res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');    
    // Encabecedados que permites (ej. 'X-Requested-With,content-type')
       res.setHeader('Access-Control-Allow-Headers', '*');    
    next();
})

app.use(cors());

//Rutas

app.use(require('./src/routes/main.route'));
app.use(require('./src/routes/persona.route'));
app.use(require('./src/routes/producto.route')); 




module.exports = app;