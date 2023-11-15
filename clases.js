class Paciente{
    constructor(nom, dn, dom, ed){
        this.nombre = nom;
        this.dni = dn;
        this.domicilio = dom;
        this.edad = ed;
    }
}
// class Doctor{
//     constructor(nomD, esp, nroCon){
//         this.nombreD = nomD;
//         this.especialidad = esp;
//         this.nroConsultorio = nroCon;
        
//     }
// }
// class Turno{
//     constructor(paciente, doctor, horario, diaTurno, horaReg){
//         this.paciente = paciente;
//         this.doctor = doctor;
//         this.horario = horario;
//         this.diaTurno = diaTurno;
//         this.horaRegistro = horaReg;

//     }
// }

module.exports = {Paciente}
// module.exports = {Doctor}
// module.exports = {Turno}