//Escribe aquí tu código
var costoAlumno=function(alumno){
	if (alumno>=100){
		return 65
	} else if (alumno >= 50 && alumno <= 99 ){
		return 70
	} else if (alumno >= 30 && alumno <= 49){
		return 95
	} else if (alumno <30){
		return 4000/alumno
	}
}
var precioBus = function(alumno){
	if (alumno>=30){
		return 4000
	} else {
		return costoAlumno(alunmo)*alunmo
	}
}
console.log("El costo por alumno es de $" + costoAlumno(20)+ " y se paga $" + precioBus(40));
console.log("El costo por alumno es de $" + costoAlumno(56)+ " y se paga $" + precioBus(60));
console.log("El costo por alumno es de $" + costoAlumno(100)+ " y se paga $" + precioBus(30));