
 function carrito(){
  this.articulos=0;
  this.total=0;
}

carrito.incrementa= function(){ //incremento el total de productos en carrito
  console.log("incrementa");
    this.articulos+=1;
    return this.articulos;
}
carrito.total=function(precio){ // voy sumando el total del precio del carrito
    this.total=this.total +parseInt(precio);
    return this.total;
}

var carrito1= new carrito(); //insancio un nuevo objeto de carrito

function comprar(){
    //guardo los datos en variables
    var nombre=document.getElementById('nombre').value;
    var precio= document.getElementById('precio').value;
    document.getElementById('result').innerHTML="Descrip: " + nombre +" "+ "Precio: " + precio;
    var carrito1= new carrito(); //insancio un nuevo objeto de carrito
    carrito1.incrementa();
    carrito1.total(precio);
    console.log("cantidad" +carrito1.articulos + "total" + carrito1.total);

}

//v1


//v2
//sacar el nombre precio con € y el total de €
// eliminar producto
https://www.youtube.com/watch?v=nqre9kKFRpc
https://www.youtube.com/watch?v=0m4e5C-n8H0&t=656s
