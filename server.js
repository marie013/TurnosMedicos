// const { executionAsyncResource } = require('async_hooks');

const express = require('express');
const { request } = require('http');
const app = express();
const path = require('path');

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
app.get('/mostrar', (request, response)=>{
    console.log("get - mostrar --> server")
    console.log(request.body)

    let data = Controlador.mostrar()

    //str = ""; str2 = ""
    let str = "<h1>Pacientes</h1>";
    str += "<table border='0' style= 'border-spacing: 10px;'>";
    str += "<tr><th>Nro </th><th>Nombre </th><th>DNI </th><th>Domicilio </th><th>Edad </th></tr>";
    for(var i=0 ; i<data.length ; i++){

        // str += "<p>"+data[i].nombre+"     "+data[i].dni+"    "+data[i].domicilio+"    "+data[i].edad+"    "+str2+"<p>"
        str += "<tr>";
        str += "<td>"+(i+1)+"</td>";
        str += "<td>"+data[i].nombre+"</td>";
        str += "<td>"+data[i].dni+"</td>";
        str += "<td>"+data[i].domicilio+"</td>";
        str += "<td>"+data[i].edad+"</td>";
        str += "</tr>";

    }
    str += "</table>"
    str += "<a href='http://localhost:3000'>Volver</a>";

    response.send(str);
   
})
app.listen(port,()=>{
    console.log(`express listen en puerto ${port}`);
})