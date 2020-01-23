function Carrito(){
//  var reg=/\d{6}/;
  var idCarrito=/\d{6}/;
 var items=new array();
  var cantidad=new array();

  Object.defineProperties(this,"idCarrito",{
//metodo get y set
get: function() {return idCarrito;},
set: function(x) {idCarrito=x;},
});

}//end


function  Producto(){
  //constructor(NumSerie,Nombre,Precio,Iva)
    var reg=/\w{8}/;
    var NumSerie=reg.test(NumSerie);
    var Nombre=Nombre;
    var Precio=Precio || 0;
    var Iva=Iva || 0;


Object.defineProperties(this,"NumSerie",{
  get: function(){return this.NumSerie;},
  set: function(x){this.NumSerie=x},
});

Object.defineProperties(this,"Nombre",{
  get: function(){return this.Nombre;},
  set: function(x){this.Nombre=x},
});

Object.defineProperties(this,"Precio",{
  get: function(){return this.Precio;},
  set: function(x){this.Precio=x},
});

Object.defineProperties(this,"Iva",{
  get: function(){return this.Iva;},
  set: function(x){this.Iva=x},
});
}

function Camiseta (){
  Producto.call(this.Camiseta);
    var Talla=Talla;
    var Color=Color || " ";

    Object.defineProperties(this,"Talla",{
      get: function(){return this.Talla;},
      set: function(x){this.Talla=x},
    });

    Object.defineProperties(this,"Color",{
      get: function(){return this.color;},
      set: function(x){this.color=x},
    });

  }//end function


  function Pantalon(){
    Producto.call(this.Pantalon);
    var Talla=Talla;
    var Color=Color || " ";
    var Ancho=Ancho;
    var Largo=Largo;

    Object.defineProperties(this,"Talla",{
      get: function(){return this.Talla;},
      set: function(x){this.Talla=x},
    });

    Object.defineProperties(this,"Color",{
      get: function(){return this.color;},
      set: function(x){this.color=x},
    });

    Object.defineProperties(this,"Ancho",{
      get: function(){return this.Ancho;},
      set: function(x){this.Ancho=x},
    });

    Object.defineProperties(this,"Largo",{
      get: function(){return this.Largo;},
      set: function(x){this.Largo=x},
    });
  }//end function

function Zapatilla(){
  var Numero=Numero || "numero";
  var Tipo=Tipo || " tipo";

  Object.defineProperties(this,"Numero",{
    get: function(){return this.Numero;},
    set: function(x){this.Numero=x},
  });

  Object.defineProperties(this,"Tipo",{
    get: function(){return this.Tipo;},
    set: function(x){this.Tipo=x},
  });
}//end function


function myFunction() {
  var x = document.getElementById("mySelect").selectedIndex;
  var y = document.getElementById("mySelect").options;
  document.getElementById("formProduct").innerHTML="Index: " + y[x].index;//posicion en array
  document.getElementById("formProduct2").innerHTML= " is " + y[x].text;//texto o valor
var nombreProducto=y[x].text;

switch (nombreProducto) {
  case "camiseta":
    var camisetaNew= new Camiseta;
    document.getElementById("formProduct2").innerHTML="camiseta";
   break;

  case "pantalon":

   break;

  case "zapatilla":

   break;

  default:
    break;
}



}
