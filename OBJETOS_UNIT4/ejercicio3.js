"use strict";

var usuarios = [
	{
		id: 133,
		firstName: "Juan Carlos",
		lastName: "Rolón",
		email: "Hernn84@hotmail.com"
	},
	{
		id: 134,
		firstName: "César",
		lastName: "Jáquez",
		email: "Lorena_Delarosa@hotmail.com"
	},
	{
		id: 135,
		firstName: "Leticia",
		lastName: "Fuentes",
		email: "Santiago56@gmail.com"
	},
	{
		id: 136,
		firstName: "Amancio",
		lastName: "Fuentes",
		email: "Santiago56@gmail.com"
	},
	{
		id: 137,
		firstName: "Lourdes",
		lastName: "Armenta",
		email: "Timoteo42@gmail.com"
	}
];

var fruta={nombre:"manzana"}; //objeto
var fruta2={nombre:"manzana"};

///dar el valor de un objeto a otro
fruta=fruta2;// daria con esto true las siguientes dos comparaciones

////
1==="1";//false porque el tipo primitivo no es el mismo
1=="1";//true
fruta==fruta2; //false son objetos pero son diferentes
fruta===fruta2; //false


document.getElementById("datos").innerHTML = mostrarArray(usuarios);
document.getElementById("bCalcular").onclick = calcularResultado;

function mostrarArray(array) {
	var texto = "", i = 0;
	for (let item of array) {
		texto += "(" + item.id + ") " + item.firstName + " " + item.lastName + ", <a href='mailto:" + item.email + "'>" + item.email + "</a><br>";
	}

	return texto;
}

function calcularResultado() {
	usuarios.sort(ordenarArray);
	document.getElementById("resultado").innerHTML = mostrarArray(usuarios);
}

function ordenarArray(a, b) {
	var x = a.lastName.toLowerCase();
	var y = b.lastName.toLowerCase();
	if (x != y) { //Comparamos por apellido si no son iguales.
		if (x < y) { return -1; } 
		else { return 1; };
	} else { //Si son iguales comparamos por nombre.
		x = a.firstName.toLowerCase();
		y = b.firstName.toLowerCase();
		if (x < y) {return -1; }
		else {return 1; };
	}
}


