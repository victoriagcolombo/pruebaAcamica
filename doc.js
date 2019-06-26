var contador = 0;
var fechaActual = new Date();
var cumple = new Date('11/26/2019');

function contadorDeDias(){
	while(fechaActual < cumple){
		var dia = fechaActual.setDate(fechaActual.getDate()+1)
		fechaActual = new Date(dia)
		contador++	
	}
	console.log('Faltan ' + contador + ' dias para tu cumpleaños.')
}

var a = 40
var b = 9
var c = 2302

