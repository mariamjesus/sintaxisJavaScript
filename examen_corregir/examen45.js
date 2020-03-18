"use strict";
//variables
var recr = [];
var cont=0;
//OBJETO RECORD
class Record {
	constructor(_nombre,_descripcion,_id) {
         this._nombre= _nombre||"Pepito";
         this._descripcion= _descripcion;
         this._id=_id;

		Object.defineProperty(this, "nombre", {
			get : function() {
				return this._nombre;
			},
			set : function (value) {
				this._nombre = value;
			}
        });

        Object.defineProperty(this, "descripcion", {
			get : function() {
				return this._descripcion;
			},
			set : function (value) {
				this._descripcion = value;
			}
        });

        Object.defineProperty(this, "id", {
			get : function() {
				return this._id;
			}
        });

    }

    GeneraId(){ //contrador para el id
        var max = 3;
        var min = 1;
        var value = Math.random() * (max - min) + min;
        value = Math.round(value);
		return this._id = value;
	};

}
//ROSCON DE REYES
class Roscon extends Record {
    constructor(_nombre,_descripcion,_id,_longitud)
     {
        super(_nombre,_descripcion,_id);
         this._longitud= _longitud;

		Object.defineProperty(this, "longitud", {
			get : function() {
				return this._longitud;
			},
			set : function (value) {
                this._longitud = value;
			}
        });

    }
}

//CUBO DE RUBIK
class Rubik extends Record {
    constructor(_nombre,_descripcion,_id,_tiempo)
     {
        super(_nombre,_descripcion,_id);
         this._tiempo= _tiempo;

		Object.defineProperty(this, "tiempo", {
			get : function() {
				return this._tiempo;
			},
			set : function (value) {
                var num;
var num = document.getElementById("error");
try {
    if(isNaN(value)){
        throw "No es un numero";
    }else{
        this._tiempo = value;
    }

    if(value > 10){throw "El numero es demasiado alto";}else{
        this._tiempo = value;
    }
    if(value < 5){throw "El numero es demasiado pequeño";}else{
        this._tiempo = value;
    }

} catch (error) {
    num.style.color = "red";
    num.innerHTML = "Error "+ error;
}


			}
        });

    }
}

//TORTILLA DE PATATAS
class Tortilla extends Record {
    constructor(_nombre,_descripcion,_id,_huevos,_patatas)
     {
        super(_nombre,_descripcion,_id);
         this._huevos= _huevos;
         this._patatas= _patatas;
		Object.defineProperty(this, "huevos", {
			get : function() {
				return this._huevos;
			},
			set : function (value) {
				this._huevos = value;
			}
        });

        Object.defineProperty(this, "patatas", {
			get : function() {
				return this._patatas;
			},
			set : function (value) {
				this._patatas = value;
			}
        });
    }

    Compara(){
        var h = this._huevos;
        var p = this._patatas;
        var sum = parseInt(h)+parseInt(p);
		return sum;
	};
}

//REGISTRO GUINESS
class Registro {
	constructor(_records) {
        this._records = [_records] || [];

		Object.defineProperty(this, "nuevorecord", {
			get : function() {
				return this._records;
			},
			set : function (value) {
				this._records.push(value);
			}
        });
    }
    // meterRecord(value){
    //     for (let index = 0; index < this._records.length; index++) {
    //         const p1 = this._records[index];
    //         if(p1==value){
    //             cont++;
    //         }
    //     }

    //     if(cont==0){
    //         for (let index = 0; index < this._records.length; index++) {
    //             const p1 = this._records[index];
    //             if(p1.longitud<value.longitud){
    //                 this._records[index] = value;
    //             }
    //     }
	// 	return sum;
	// };
}

//funciones

function mostrarRecord(){


    console.log(recr);
    var div = document.getElementById("lista");
	var ulist = document.createElement("ul");

	var i,li,node;
	for (i=0; i<recr.length; i++){
		li = document.createElement("li");
		node = document.createTextNode(recr[i].innerHTML);
		li.appendChild(node);
		ulist.appendChild(li);
	}
	div.appendChild(ulist);
}

//MJTS function limpiar
function limpiarInput(){
  var div=document.getElementById("mostrar");//donde se va a mostrar
 ///limpiar formulario de productos
  div.removeChild(div.childNodes[0]);//eliminar fieldset
}


function rosca(){
  var div=document.getElementById("mostrar");//donde se va a mostrar
 //si hay hijo se borra
 if (div.childNodes[0]==0){
  limpiarInput();
 }
 //sinos se crea el input nuevo
      var ulist = document.getElementById("mostrar");
      var input = document.createElement("input");
      input.setAttribute("type","text");
      input.setAttribute("id","long");
      ulist.appendChild(input);
      a=1;

}

function rubik(){

    var ulist = document.getElementById("mostrar");
    var input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id","tiem");

    ulist.appendChild(input);
    b=1;
}
function tortilla(){

    var ulist = document.getElementById("mostrar");

    var input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id","pat");
    ulist.appendChild(input);
    var input1 = document.createElement("input");
    input1.setAttribute("type","text");
    input1.setAttribute("id","huev");
    ulist.appendChild(input1);
    c=1;
}

var a=0, b=0 ,c=0;
//PRUEBAS


function añadirRecord(){

if(a==1){

    var longi = document.getElementById("long").value;
    var prod1 = new Roscon();
    prod1.longitud=longi;


    var nom = document.getElementById("n").value;
    var num;
    var num = document.getElementById("error");
    num.innerHTML="";
    try {

        if(nom==""){
            throw "Esta vacia la cadena";
        }else{
            prod1.nombre=nom;
        }

    } catch (error) {
        num.style.color = "red";
        num.innerHTML = "Error "+ error;
    }
    console.log(prod1);
    recr=prod1;
    limpiarInput();
}

if(b==1){
    var tiempo = document.getElementById("tiem").value;
    var prod2 = new Rubik();
    prod2.tiempo=tiempo;
    console.log(prod2);
    recr=prod2;
    limpiarInput();
}

if(c==1){
    var huevos = document.getElementById("huev").value;
    var patatas = document.getElementById("pat").value;
    var prod3 = new Tortilla();
    prod3.huevos=huevos;
    prod3.patatas=patatas;
    console.log(prod3);
    recr=prod3;
    limpiarInput();
}



//---------------------------------------------------------------------------------
//para comprobar que mete bien el tiempo y hace la excepcion
// prod.tiempo=6;

//EXCEPCION AL AÑADIR Y AL COMPROBAR EL TIEMPO DEL CUBO DE RUBIK

}




