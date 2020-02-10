

function Carrito(idCarrito,items,cantidades){
  this.idCarrito=idCarrito || 1;
  this.items = [items] || [];
  this.cantidades = [cantidades] || [];


  Object.defineProperty(this, "IdCarrito",{ //añadir  propiedad para acceder a dinero porque  es interna
      //añadir descriptores
      get: function (){
        return this.idCarrito +" get fucntion";;
      },
      set: function (value){ //para modificar el dinero propiedad
        idCarrito=value  +" set fucntion";
      }
  });

  Object.defineProperty(this, "itemsPro", {
    get : function() {
      return items +" get fucntion";
    },
    set : function (value) {
      items = value +" set fucntion";
    }
  });

      Object.defineProperty(this, "cantidadesPro", {
    get : function() {
      return cantidades;
    },
    set : function (value) {
      cantidades = value;
    }
  });
}//end objet


function  Producto(NumSerie,Nombre,Precio,Iva){
  this.NumSerie=NumSerie || 12 ;
 this.Nombre=Nombre || "";
  this.Precio=Precio || 0;
  this.Iva=Iva || 0;


Object.defineProperty(this,"numSerie",{
    get: function(){
      return this.NumSerie +"get";},

    set: function(x){
      this.NumSerie=x + "set"}
});

Object.defineProperty(this,"nombre",{
    get: function(){return this.Nombre+"get nombre";},
    set: function(x){this.Nombre=x}
});

Object.defineProperty(this,"precio",{
   get: function(){return this.Precio;},
   set: function(x){this.Precio=x +"set nombre"}
});

Object.defineProperty(this,"Iiva",{
    get: function(){return this.Iva;},
    set: function(x){this.Iva=x}
});
}//end objet producto

function Camiseta (tal,col){
  Producto.call(this);
    this.Talla=tal || "unica";
    this.Color=col || "negro ";

    Object.defineProperty(this,"talla",{
      get: function(){return this.Talla+ "get";},
      set: function(x){this.Talla=x +"set"}
    });

    Object.defineProperty(this,"color",{
      get: function(){return this.Color +"get";},
      set: function(x){this.Color=x +"set"},
    });

  }//end function
Camiseta.prototype=new Producto;

function myFunction(){
var carro = new Carrito(5,[55],[6]);
//carro.idCarrito=5;
console.log(carro.IdCarrito);
console.log();

carro.items=[54];
console.log(carro.items);

var  prod1=new Producto(1111,"prod1",15,12);

console.log(prod1.numSerie +prod1.nombre + prod1.precio);

var cami1=new Camiseta(2222,"cami1",10,89,"XL","blanco");
console.log(cami1.precio+ "precio");
console.log(cami1.Talla +"talla");
}
//https://medium.com/entendiendo-javascript/entendiendo-los-objetos-en-javascript-3a6d3a0695e5
