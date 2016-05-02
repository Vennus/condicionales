//Escribe aquí tu código
//La Langosta Ahumada!
var preciosPlato=function(plato){
	if (plato <= 200){
		return 95 
	} else if (plato >= 300){
		return 75
	} else {
		return 85
	}
}
var costo = function(plato) {
	return preciosPlato(plato)*plato
}
console.log("El costo del banquete es de $ " + costo(10));
console.log("El costo del banquete es de $ " + costo(500));
console.log("El costo del banquete es de $ " +costo(300));