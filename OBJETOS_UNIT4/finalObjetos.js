"use strict";
//objeto
function Cat(name){
  this.name=name;
   var sonido="Miau";
  //metodo dice
  this.dice= function (){
    return sonido;
  }
}//end function

// añadir una propiedades
Cat.prototype.especie= function (){
  return "Persa";
}

//instancias de objeto
console.log("Ejemplo1: creacion de instancias");
var cat1= new Cat("sushi");
var cat2= new Cat("yaki");

//añadir propiedad nueva al objeto
Object.defineProperty(Cat.prototype,"numPatas",{
  //definir descriptores
  value:4, //valor de 4
  writable:true,
  configurable:true,
  enumerable:true
});


//añadir propiedad nueva para una instancia especifica
Object.defineProperty(cat1,"numPatas",{
          //definir descriptores
          value:4, //valor de 4
          writable:true,
          configurable:true,
          enumerable:true
});

console.log(cat1.name + " " + cat2.name);
console.log(cat1.numPatas + " " + cat2.numPatas);
console.log(cat1.dice() + " " + cat2.dice());
console.log("");

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//objeto dentro de otro objeto

var dog= new Object();
dog.name="Scooby";
dog.owner={}; //abributo que tiene un objeto
//definir el objeto nuevo anidado
dog.owner.name= "Pepido"; //atributo del objeto owner dentro de dog
dog.bark= function (){ // metodo dentro de objeto dog
  return  "guagua";
}

console.log(dog.name);//nombre del objeto dog
console.log(dog.owner.name); //sacar nombre del objeto owner dentro de dog
console.log(dog.bark());


/////////////////FORMA LITERAL DEL EJEMPLO ANTERIOR//////////////////////////////////////
//objeto dentro de otro objeto
var dog2= {
  name: "luna",
  owner: { // atributo que es objeto dentro de objeto dog
          name:"maria",
          edad: 34,
  },
  bark:function(){ //definir metodo dentro del objeto dog
    return "Guagua"
  }
}
console.log("de forma literal objeto dentro de objeto");
console.log(dog2.name);//nombre del objeto dog
console.log(dog2.owner.name); //sacar nombre del objeto owner dentro de dog
console.log(dog2.bark());


/////////////////////////////////OBJETOS DE FORMA CORRECTA Y COMPLETA//////////////////////////
 // variable dentro de objeto, ver ambito de acceso de variables
function Cartera(){
    var dinero=0;
    Object.defineProperty(this, "cantidad",{ //añadir  propiedad para acceder a dinero porque  es interna
        //añadir descriptores
        get: function (){
          return dinero;
        },
        set: function (value){ //para modificar el dinero propiedad
          dinero=value;
        }

    });

// acceder a un metodo nuevo desde fuera
    this.checkSaldo= function(){

      if(this.cantidad<100){
        return "tienes poco dinero";
      } else {
        return "no te preocupes, estas forrado";
      }//end if

    }//end method checksaldo

}//end objeto


 //añadir meetodo al prototype
 Cartera.prototype.cobroNomina= function(salario){
  this.cantidad=salario + this.cantidad;
  return this.cantidad;
 }//end method

 console.log("ejemplo Cartera con getter y setter");

 var monedero= new Cartera();//instancia de objeto cartera
 console.log(monedero.cantidad);//va la propiedad y se va al get por no pasar valor
 console.log(monedero.dinero); //va la propiedad dinero pero es interna al objeto, no sale porque es privada
 console.log(monedero.cobroNomina(1800));// llama al meetodo y hace una suma a dinero
 console.log(monedero.cantidad); //ver que el metodo anterior esta bien
monedero.cantidad=300; //asignar valor a un atributo con el set
console.log(monedero.checkSaldo());
console.log(monedero.cantidad);

console.log("instancia de objeto con objet create");
/////////////////////CREAR INSTANCIA CON EL OBJET CREATE///////////////////////////////////////////
var monedero1= Object.create(Cartera.prototype);//instancia de cartera console.log(monedero.cantidad);//va la propiedad y se va al get por no pasar valor
console.log(monedero1.dinero); //va la propiedad dinero pero es interna al objeto, no sale porque es privada
console.log(monedero1.cobroNomina(1800));// llama al meetodo y hace una suma a dinero
console.log(monedero1.cantidad); //ver que el metodo anterior esta bien
monedero1.cantidad=300; //asignar valor a un atributo con el set
console.log(monedero1.checkSaldo());
console.log(monedero1.cantidad);
