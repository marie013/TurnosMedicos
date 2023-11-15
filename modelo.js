const fs = require('fs')

function guardarPaciente(data){
    console.log("guardar(data) --> modelo")
    console.log(data)

    let str_paciente = fs.readFileSync('./paciente.txt', 'utf-8')
    let pacientes = []
    if(str_paciente){
        pacientes = JSON.parse(str_paciente)
    }
    pacientes.push(data)
    fs.writeFileSync('./paciente.txt',JSON.stringify(pacientes))
}
module.exports = {guardarPaciente}