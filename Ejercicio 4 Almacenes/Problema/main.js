//Escribe aquí tu código
var descuento =function(precio){
	if (precio>2500){
		return " 'Felicitaciones ganaste un descuento del 15%' y tu total es " + precio*0.15
	} else {
		return " 'Felicitaciones ganaste un descuento del 8%' y tu total es " + precio*0.08
	}
}
console.log(descuento(2600));
console.log(descuento(500));