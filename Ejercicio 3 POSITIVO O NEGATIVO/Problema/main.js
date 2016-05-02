//Escribe aquí tu código
var numero=function(a,b){
	if (a>=0){
		return a + "Numero Negativo"
	} else if (b< 0 || b != 0){
		return b + "Numero Positivo"
	}
}
console.log(numero(-4,6));
console.log(numero(-2,10));
console.log(numero(5,-5));