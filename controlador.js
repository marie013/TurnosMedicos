const Clases = require('./clases.js')
const Modelo = require('./modelo.js')

function nuevoPaciente(data){
    console.log("nuevoPaciente(data) --> controlador")
    console.log(data);
    let miPaciente = new Clases.Paciente(data.nombre, parseInt(data.dni), data.domicilio, parseInt(data.edad));
    Modelo.guardarPaciente(miPaciente);
}
function mostrar(){
    return Modelo.mostrar();
}
module.exports = {nuevoPaciente, mostrar}