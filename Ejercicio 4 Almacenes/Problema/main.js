//Escribe aquí tu código
var cantidad=parseInt(prompt("¿cuantos trajes comprara?"));
for(var c = 1; c<=cantidad;c++)
	var precio =parseFloat(prompt("Ingresa el precipo del traje" +c));
	if (precio>=2500){
		alert (" Felicitaciones ganaste un descuento del 15% ");
		precio=precio*0.85;
		alert("Total a pagar es: "+precio)
	} else {
		alert ("Felicitaciones ganaste un descuento del 8% ");
		precio=precio*0.92;
		alert("Total a pagar es: " + precio);
	}