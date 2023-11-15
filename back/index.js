const express = require('express');
const app = express();
const cors = require('cors');

app.listen(3000, () => {
    console.log('Servidor na porta 3000');
});

app.post('/assessments', (req, res)=>{
    res.send({token: '1234'});
});

app.post('/evaluate', (req, res)=>{
    res.send({token: '1234'});
});

app.post('/description', (req, res)=>{
    res.send({token: '1234'});
});

app.post('/home', (req, res)=>{
    res.send({token: '1234'});
});

app.post('/login', (req, res)=>{
    res.send({token: '1234'});
});

app.post('/register', (req, res)=>{
    res.send({token: '1234'});
});
