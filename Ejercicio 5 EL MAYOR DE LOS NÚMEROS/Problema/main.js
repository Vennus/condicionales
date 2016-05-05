//Escribe aquí tu código
var cantidad= 3;
var valorInicial=0;
for (var i= 1; i <= cantidad; i++) {
	var numero=prompt("Ingresa el numero" + i);
	console.log("Valor Inicial " + valorInicial);
	console.log("Numero Ingresado" + numero);
	if (numero>valorInicial) {
		valorInicial = numero;
	}
}
alert("Numero mayor " + valorInicial);
/*var mayor=function(a,b,c){
	if (a>b && a>c){
		return a + " es mayor que " + b + " y " + c
	} else if (b>a && b<c){
		return b + " es mayor que " + a + " y " + c
	} else if (c>a && c>b){
		return c + " es mayor que " + a + " y " + b
	}
}
console.log(mayor(8,9,40));
console.log(mayor(80,2,40));
console.log(mayor(7,4,4)); */
