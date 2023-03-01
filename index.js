// importamos la libreria express
const express = require('express');

// leemos la variables de entorno de los archivos .env
require('dotenv').config();

// constante del pruerto del servidor
const portListen = process.env.PORT;

// se crea la instancia del servidor
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

// iniciamos el servido
app.listen( portListen, () => {
    console.info('Servidor Inicializado en el puerto: ' + portListen );
});