var idFacultad=3;
var facultades=[
    {"id":1, "nombre":"Ingenieria"},
    {"id":2, "nombre":"ciencias contables"},
    {"id":3, "nombre":"Salud"}
];
var idCarrera=3;
var carreras=[
    {"id":1, "nombre":"Sistemas", "facultad":{"id":1, "nombre":"Ingenieria"}},
    {"id":4, "nombre":"Civil", "facultad":{"id":1, "nombre":"Ingenieria"}},
    {"id":2, "nombre":"Economia","facultad":{"id":2, "nombre":"ciencias contables"}},
    {"id":3, "nombre":"Medicina", "facultad":{"id":3, "nombre":"Salud"}}
];

var idMunicipio=4;
var municipios=[
    {"id":1, "nombre":"Tunja"},
    {"id":2, "nombre":"Duitama"},
    {"id":3, "nombre":"Sogamoso"},
    {"id":4, "nombre":"Paipa"},
];

var idEstudiantes=3;
var estudiantes=[
    {"id":1, "nombre":"omar", "apellido":"Sisa", "codigo":"201680653", "documento":"12345","fechaNac":"31/12/1994","carrera":{"id":1, "nombre":"Sistemas"},"municipio":{"id":1, "nombre":"Tunja"}},
    {"id":2, "nombre":"juan", "apellido":"Cuenu", "codigo":"201589012", "documento":"6789","fechaNac":"24/12/1994","carrera":{"id":1, "nombre":"Ambiental"},"municipio":{"id":2, "nombre":"Sogamoso"}},
];

var idMateria=3;
var materia=[
    {"id":1, "nombre":"software 2", "creditos":4,"carrera":{"id":1, "nombre":"Sistemas"},"profesor":{"id":1, "nombre":"jorge"}},
    {"id":2, "nombre":"distribuidos", "creditos":3,"carrera":{"id":1, "nombre":"Sistemas"},"profesor":{"id":1, "nombre":"jorge"}},
];

var idProfesor=2;
var Profesor=[
    {"id":1, "nombre":"jorge", "apellido":"otalora", "documento":"345675430"},
    {"id":2, "nombre":"Daniel", "apellido":"Aperador", "documento":"654678000"},
];

var idHorario=2;
var horario=[
    {"id":1, "dia_semana":1, "hora_inicio":14, "hora_fin":16,"materia":{"id":1, "nombre":"software 2"}},
];

var idMatricula=2;
var matricula=[
    {"id":1, "ano":2017, "semestre":10, "estudiante":{"id":1, "nombre":"Juan"},"materia":{"id":1, "nombre":"software 2"}}
];