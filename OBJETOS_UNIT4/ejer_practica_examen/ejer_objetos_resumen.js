"user strict";



//OBJETO ARTICULO
class Articulo {
  constructor(titulo,anio,numCopias,genero,tipoArt){

    this.titulo=titulo || "";
    this.anio=anio || "";
    this.numCopias=numCopias;
    this.genero=genero || "";
    this.tipoArt=tipoArt || "pelicula";
//pra meter las propiedades directament con get y set mirar objet 2 pag 24

    Object.defineProperty(this,"hayCopias",{
      get: function(){
          if(numCopias>0){
            return true;
          } else{
            return false;
          } //end if
        }//end get
    });//end objct


    Object.defineProperty(this,"comparaTitulo",{
      get: function() {
        var x =articulos[0].titulo.toLowerCase();
	      var y = articulos[1].titulo.toLowerCase();
        if (x != y) { //Comparamos por titulo si no son iguales.
            if (x < y) {
              return -1 + x; }
            else {
              return 1 + y; };
        } else{//son iguales
          return 0 + "iguales";
        }

       }//end get
    });//end objct




    Object.defineProperty(this,"comparaAnio",{
      get: function() {
        var x =articulos[0].anio;
	      var y = articulos[1].anio;
        if (x != y) { //Comparamos por titulo si no son iguales.
            if (x < y) {
              return -1 +x; }
            else {
              return 1 +y; };
        } else{//son iguales
          return 0 + "iguales";
        }

       }//end get
    });//end objct

  }//end  constructor

  }//end objet

class Pelicula extends Articulo{
  constructor(titulo,anio,numCopias,genero,tipoArt,director,actorPrinc,actrizPrinc,distribuido){//todas propiedades de ese objeto
    super(titulo,anio,numCopias,genero,tipoArt);//propiedades del padre

    this.director=director || "";
    this.actorPrinc=actorPrinc || "";
    this.actrizPrinc=actrizPrinc || "";
    this.distribuido=distribuido || "warner";

    Object.defineProperty(this,"mostrarPelicula",{
      get: function(){
        return "titulo: " +this.titulo + "."+ "año: " +this.anio + "."+"N copias: " +this.numCopias +"." +"genero: "+ this.genero + " tipo Art: "+this.tipoArt + "";}

    });
  }//end constructor

}//end objeto pelicula

var articulos=[];// array para guardar los objetos que se van creando

function text(){
  //pelicula base para nueva
  var peliBase=new Pelicula();
  peliBase.titulo="piratas";
  peliBase.anio=2012;
  peliBase.numCopias=5;
  peliBase.genero="accion";
  peliBase.director="direc1";
  peliBase.actorPrinc="jonnyA";
  peliBase.actrizPrinc="kenny";
  articulos.push(peliBase); //añadir al array
  var peliBase1=new Pelicula();
  peliBase1.titulo="caribe";
  peliBase1.anio=2010;
  peliBase1.numCopias=5;
  peliBase1.genero="accion";
  peliBase1.director="direc2";
  peliBase1.actorPrinc="jnyA";
  peliBase1.actrizPrinc="merrny";
  articulos.push(peliBase1); //añadir al array

console.log(peliBase.mostrarPelicula);//metodo toString MOSTRARPELICULA
console.log(articulos);
console.log(peliBase.comparaAnio);//METODO COMPARA AÑO
console.log(peliBase.comparaTitulo); //METODO COMPARA TITULO
}


///FUNCTION PARA AUMENTAR EL NUMCOPIAS DEL OBJETO
function sumarNumCopias(){
  var num=document.getElementById("num").value;
  var copi=articulos[0].numCopias;//acceder al objeto primero y su propiedad
 articulos[0].numCopias=parseInt(copi)+parseInt(num);
}

//function para añadir una propiedad al objeto
function anadirPropi(){
var primera=articulos[0];
  Object.defineProperty(Pelicula.prototype,'precio',{
      get: function (){
        return presupuesto;
      },
      set: function (value){ //para modificar el dinero propiedad
        presupuesto=value;
      }
  });
  primera.precio=200;
  console.log(primera);
}


/*
function ordenarTitulo(){
  function ordenarArray() {
	var x =articulos[0].titulo.toLowerCase();
	var y = articulos[1].titulo.toLowerCase();
	if (x != y) { //Comparamos por titulo si no son iguales.
      if (x < y) {
         return -1; }
      else {
        return 1; };
	} else { //Si son iguales
    return 0;
  }
}
articulos.sort(ordenarArray);
document.getElementById("result").innerHTML =mostrarArray(articulos);

}
function mostrarArray(articulos) {
	var texto = "", i = 0;
	for (let item of articulos) {
		texto +=  item.mostrarPelicula +"<br>";
	}

	return texto;
}
*/

function ordenarTitulo(){

    for (let item of articulos) {
      var x =item.titulo.toLowerCase();
      var y = item.titulo.toLowerCase();
      if (x != y) { //Comparamos por titulo si no son iguales.
          if (x < y) {
            return -1; }
          else {
            return 1; };
      } else { //Si son iguales
        return 0;
      }
    }//END FOR

document.getElementById("result").innerHTML =mostrarArray(articulos);

}

function mostrarArray(articulos) {
	var texto = "", i = 0;
	for (let item of articulos) {
		texto +=  item.mostrarPelicula +"<br>";
	}

	return texto;
}
