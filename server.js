// const { executionAsyncResource } = require('async_hooks');

const express = require('express');
//const { request } = require('http');
const path = require('path');
const app = express();
const Controlador = require('./controlador');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

const port = 3000;

app.get('/',(request, response)=>{
    //response.send('Hello express !!!');
    response.sendFile(path.join(__dirname, './static/menu.html'));

})

app.post('/nuevo',(request, response)=>{
    console.log("post/nuevo --> server");
    console.log(request.body);
    Controlador.nuevoPaciente(request.body);
    response.sendFile(path.join(__dirname, './static/menu.html'))
})
app.get('/nuevoPaciente', (request, response)=>{
    response.sendFile(path.join(__dirname, './static/nuevoPaciente.html'))
})
app.listen(port,()=>{
    console.log(`express listen en puerto ${port}`);
})