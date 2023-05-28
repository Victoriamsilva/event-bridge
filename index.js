const express = require('express');
const app = express();

app.use(express.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, x-access-token');

    next();
});

const route = require('./routes/index');
app.use('/', route)
app.listen(3200)
console.log('Barramento de eventos rodando na porta 3200')

module.exports = app;
