var presupuesto;
var cliente;
cliente = parseInt(prompt("cuantos platos llevara hoy? "));
if (cliente <= 200){
	presupuesto= cliente*95;
} else if(cliente<=300){
	presupuesto=cliente*85;
} else{
	presupuesto=cliente*75;
}
	alert("Usted pagara " + presupuesto)

//var preciosPlato=function(plato){
//	if (plato <= 200){
//		return 95 
//	} else if (plato >= 300){
//		return 75
//	} else {
//		return 85
//	}
//}
//var costo = function(plato) {
//	return preciosPlato(plato)*plato
//}
//console.log("El costo del banquete es de $ " + costo(10));
//console.log("El costo del banquete es de $ " + costo(500));
//console.log("El costo del banquete es de $ " +costo(300));