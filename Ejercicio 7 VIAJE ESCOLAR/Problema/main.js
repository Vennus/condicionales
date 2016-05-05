//Escribe aquí tu código
var costoAlumno
var alumno
costoAlumno=parseInt(prompt("Cuanto alumnos viajaran"));
	if (alumno>=100){
		costoAlumno=alumno*65
	} else if (alumno>=50){
		costoAlumno=alumno*70
	} else if (alumno>=30){
		costoAlumno=alumno*95
	} else {
		costoAlumno=alumno/4000;
	}
alert("Total" + costoAlumno)
// var precioBus=parseInt(prompt("cuanto pagara"))
// 	if (alumno>=30){
// 		costoAlumno=alumno*4000
// 	} else {
// 		costoAlumno(alumno)*alumno
// 	}

// console.log("El costo por alumno es de $" + costoAlumno(20)+ " y se paga $" + precioBus(40));
// console.log("El costo por alumno es de $" + costoAlumno(56)+ " y se paga $" + precioBus(60));
// console.log("El costo por alumno es de $" + costoAlumno(100)+ " y se paga $" + precioBus(30));