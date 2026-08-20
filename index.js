const path = require('path');
const envFile = process.env.NODE_ENV === 'production'
    ? '.env.production'
    : '.env.development';
require('dotenv').config({ path: path.resolve(__dirname, envFile) });
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    if (process.env.LOG_LEVEL === 'debug') {
        console.log('Petición recibida en /', new Date());
    }
    res.send('OK');
});

app.listen(process.env.PORT, () => {
    console.log(`Servidor en puerto ${process.env.PORT}, entorno: ${process.env.NODE_ENV}`);
});
