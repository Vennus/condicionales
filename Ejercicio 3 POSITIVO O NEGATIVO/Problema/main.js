//Escribe aquí tu código
var numero;
var condicion = true;
do {
	numero = parseInt(prompt("Ingrese el numero"));
	if(isNaN(numero)) alert("Ingrese un numero por favor");
	else condicion = false;
} while(condicion);
if(numero>0){
	alert("El numero es positivo");
} else if (numero==0){
	alert("El numero es igual ");
} else {
	alert("El numero es negativo ")
}