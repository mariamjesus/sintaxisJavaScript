"user strict";
class Carrito{
 constructor(id,items){
   this.id= id;
   this.items=items || [];
 }
}

class Producto{
  constructor (numSerie,nombre,precio,iva){

    this.numSerie=numSerie || 12 ;
  this.nombre=nombre || "";
    this.precio=precio || 0;
    this.iva=iva || 0;
  }
}

class Pantalon extends Producto{
  constructor(numSerie,nombre,precio,iva,talla,color,ancho,largo){
    super(numSerie,nombre,precio,iva);
    this.talla=talla || "unica";
    this.color=color || "negro ";
    this.ancho=ancho || 20;
    this.largo=largo || 60;

    Pantalon.prototype.toString = function(){
      return "PANTALÓN NumSerie: "+ this.numSerie+ ",nombre: " + this.nombre+ ",precio: " +this.precio + ",IVA: " +this.iva+ ",Talla: " + this.talla + ",color: " + this.color + ",ancho: " + this.ancho + ",alto: " + this.largo;
    }

  }

  getTalla(){
    return this.talla;
  }
  getColor(){
    return this.color;
  }
  getAncho(){
    return this.ancho;
  }
  getLargo(){
    return this.largo;
  }

  setTalla(x){
    this.talla=x;
  }

  setColor(x){
    this.color=x;
  }

  setAncho(x){
    this.ancho=x;
  }
  setLargo(x){
    this.largo=x;
  }


}

class Camiseta extends Producto{
  constructor(numSerie,nombre,precio,iva,talla,color){

    super(numSerie,nombre,precio,iva);
    this.talla=talla || "unica";
    this.color=color || "negro ";

    Camiseta.prototype.toString = function(){
      return "CAMISETA NumSerie: "+ this.numSerie+ ",nombre: " + this.nombre+ ",precio: " +this.precio + ",IVA: " +this.iva+ ",Talla: " + this.talla + ",color: " + this.color;
    }
  }


  getTalla(){
    return this.talla;
  }
  getColor(){
    return this.color;
  }

  setTalla(x){
    this.talla=x;
  }

  setColor(x){
    this.color=x;
  }

}

class Zapatilla extends Producto{
  constructor(numSerie,nombre,precio,iva,numero,tipo){
    super(numSerie,nombre,precio,iva);

    this.numero=numero || 35;
    this.tipo=tipo || "EU";

    Zapatilla.prototype.toString = function(){
      return "ZAPATILLA NumSerie: "+ this.numSerie+ ",nombre: " + this.nombre+ ",precio: " +this.precio + ",IVA: " +this.iva+ ",Numero: " + this.numero + ",tipo: " + this.tipo;
    }
  }
  getNumero(){
    return this.numero;
  }

  getTipo(){
    return this.tipo;
  }

  setNumero(x){
    this.numero=x;
  }

  setTipo(x){
    this.tipo=x;
  }
}


var carrito= new Carrito(1,[]);
var texto = "";
var mensaje=""; //para las expeciones


///FUNCTION DE AÑADIR BOTON FORMULARIO
function agregarBoton() {
  var form=document.getElementById("myForm");//donde se va a mostrar
  //COMPROBAR VALORES CORRECTOS,EXCEPCION
  const buttoncompro = document.createElement('button');
  buttoncompro.type = 'button';
  buttoncompro.innerText = 'validar datos';
  form.appendChild(buttoncompro);
  buttoncompro.onclick=comprobarValores;

  //AÑADIR PRODUCTO AL CARRITO
  const buttonAna = document.createElement('button');
  buttonAna.type = 'button';
  buttonAna.innerText = 'Añadir producto';
  var form=document.getElementById("myForm");
  form.appendChild(buttonAna);
  buttonAna.onclick=anadirValores;

}



//COMPROBAR VALORES CORRECTOS DE INPUTS  ////////////EXCEPCION
function comprobarValores(){

//producto propiedades
var numSerie=document.getElementById("numSerie").value;
var nombre=document.getElementById("nombre").value;
var precio=document.getElementById("precio").value;
var iva=parseInt(document.getElementById("iva").value);

  //EXCEPCIONES COMUNES PARA PRODUCTOS     //////////////////

   mensaje=document.getElementById("errores");//donde se mostraran los errores

  //numserie validar
  var expreNumSerie=/^\w{8}$/;
  var ValiNumSerie=expreNumSerie.test(numSerie); // validar


  try {
    if( numSerie == null || numSerie.length == 0 || ValiNumSerie ===false ) { // si no cumple la condicion numserie
      throw "el NumSerie no es correcto";
    }

    if(isNaN(precio)) { //para sacar rapido que no es un numero
      throw "la cadena no es numero";
    }

    if ( iva>=21) {
      throw "iva superior a 21%";
    }

  } catch (err){//lo que manda el throw
    mensaje.style.color="red"; //sale en rojo
    mensaje.innerHTML="error " + err + "."; // concateno el mensaje y saldra en roojo
  }//end catch


var productoselect = document.getElementById("tipoProduct").value;//coger el tipo de producto

 switch (productoselect) {
   case "camiseta":
    //camiseta y pantalones propiedades
    var talla=document.getElementById("talla").value;
    talla= talla.toUpperCase();
    var color=document.getElementById("color").value;

    //EXCEPCIONES
    try{
        if ( talla =="XS" || talla =="S"  || talla =="M"  || talla =="L"  || talla =="XL" || talla =="XXL" || talla =="XXXL"  ){
          console.log("correcto");
        } else{
          throw "talla no correcta";
        }

      }catch (err){//lo que manda el throw
          mensaje.style.color="red"; //sale en rojo
          mensaje.innerHTML="error " + err + "."; // concateno el mensaje y saldra en roojo
        }//end catch
        break;

        case "pantalon":
          var talla=document.getElementById("talla").value;
          talla= talla.toUpperCase();
          var color=document.getElementById("color").value;

          // pantalones propiedades
          var ancho=parseInt(document.getElementById("ancho").value);
          var largo=parseInt(document.getElementById("largo").value);

            //EXCEPCIONES
            try{
              if ( talla =="XS" || talla =="S"  || talla =="M"  || talla =="L"  || talla =="XL" || talla =="XXL" || talla =="XXXL"  ){
                console.log("correcto");
              } else{
                throw "talla no correcta";
              }

              if (ancho>=32 && ancho<=48){
                console.log("correcto");
              } else{
                throw "el ancho no es correcto";
              }

              if (largo>=28 && largo<=54){
                console.log("correcto");
              } else{
                throw "el largo no es correcto";
              }

            }catch (err){//lo que manda el throw
                mensaje.style.color="red"; //sale en rojo
                mensaje.innerHTML="error " + err + "."; // concateno el mensaje y saldra en roojo
              }//end catch

        break;

        case "zapatilla":
            // pantalones propiedades
            var numero=document.getElementById("numero").value;
            var tipo=document.getElementById("tipo").value;
            tipo= tipo.toUpperCase();

            //EXCEPCIONES
            try{
              if (numero>=16 && numero<=48) {
                console.log("correcto");
              } else{
                throw "el numero no es correcto";
              }

              if ( tipo =="EU" || tipo =="USA"  || tipo =="UK"  || tipo =="CM" ){
                console.log("correcto");
              } else{
                throw "el tipo no es correcto";
              }

            }catch (err){//lo que manda el throw
                mensaje.style.color="red"; //sale en rojo
                mensaje.innerHTML="error " + err + "."; // concateno el mensaje y saldra en roojo
              }//end catch

            break;
      default:
        break;
    }
}



function anadirValores(){

  var form=document.getElementById("myForm");//donde se va a mostrar
 //producto propiedades
 var numSerie=document.getElementById("numSerie").value;
 var nombre=document.getElementById("nombre").value;
 var precio=parseInt(document.getElementById("precio").value);
 var iva=parseInt(document.getElementById("iva").value);

 var productoselect = document.getElementById("tipoProduct").value;//coger el tipo de producto

  switch (productoselect) {
    case "camiseta":
      //camiseta y pantalones propiedades
      var talla=document.getElementById("talla").value;
      talla= talla.toUpperCase();
      var color=document.getElementById("color").value;

      console.log(numSerie,precio,iva,talla,color);
      // creo nueva instancia de objeto camiseta
      var cami1=new Camiseta(numSerie,nombre,precio,iva,talla,color);
      carrito.items.push(cami1);//añado al array
      console.log(carrito);
      limpiarForm();
     break;

    case "pantalon":
      var talla=document.getElementById("talla").value;
      talla= talla.toUpperCase();
      var color=document.getElementById("color").value;

      // pantalones propiedades
      var ancho=parseInt(document.getElementById("ancho").value);
      var largo=parseInt(document.getElementById("largo").value);

      console.log(numSerie,precio,iva,talla,color,ancho,largo);
      // creo nueva instancia de objeto
      var pantalon1=new Pantalon(numSerie,nombre,precio,iva,talla,color,ancho,largo);
      console.log(pantalon1.toString());
      carrito.items.push(pantalon1);//añado al array
      console.log(carrito);
      limpiarForm();
     break;

    case "zapatilla":
      // pantalones propiedades
      var numero=document.getElementById("numero").value;
      var tipo=document.getElementById("tipo").value;
      tipo= tipo.toUpperCase();

      console.log(numSerie,precio,iva,numero,tipo);
      // creo nueva instancia de objeto
      var zapatilla1=new Zapatilla(numSerie,nombre,precio,iva,numero,tipo);
      carrito.items.push(zapatilla1);//añado al array
      console.log(carrito);
      limpiarForm();
     break;

    default:
      break;
     }

  ///para mostrar num productos en carrito
  var numProducitems=document.getElementById("numProduc").innerHTML="<h4>cantidad productos en carrito: </h4>"+carrito.items.length;

//para mostrar el total sin iva del carrito
var totalSinIva = (carrito.items.precio);
var total=document.getElementById("sinIva").innerHTML=totalSinIva;

 }


function limpiarForm(){
  var form=document.getElementById("myForm");//donde se va a mostrar
 ///limpiar formulario de productos
  form.removeChild(form.childNodes[1]);//eliminar fieldset
form.removeChild(form.children[0]);//eliminar el button de añadir
form.remove();

//limpiar el listado
  texto="";
  //limpiar excepcines mensaje
  mensaje="";

}

function listar(){

    for (let item of carrito.items) {
      texto += item.toString();
    }
 document.getElementById("listarPedido").innerHTML= texto + "<br>";

}


  //ELIMINAR ULTIMO ELEMENTO DEL ARRAY CARRITO
  function eliminarUltimo(){
    carrito.items.pop();
    console.log(carrito);
    var numProducitems=document.getElementById("numProduc").innerHTML="<h4>cantidad productos en carrito: </h4>"+carrito.items.length;
    listar();
  }

  //ELIMINAR TODOS ELEMENTOS DEL ARRAY CARRITO
  function eliminarTodos(){
    carrito.items.length=0;
    console.log(carrito);
    var numProducitems=document.getElementById("numProduc").innerHTML="<h4>cantidad productos en carrito: </h4>"+carrito.items.length;

    listar();
  }




function pantalonbtn(){
  mensaje="";
  var texto=document.getElementById("listarPedido"); //para el listado limpiarlo
  texto.removeChild(texto.childNodes[0]);

    //si hay form se borra
    var form=document.getElementById("myForm");
    if(form !== null ){
      form.removeChild(form.childNodes[1]);//eliminar fieldset
      form.removeChild(form.children[0]);//eliminar el button de añadir
      form.remove();//eliminar form
    }

      //HACER FORM CON NODO NUEV
      var div=document.getElementById("formulario");
      var myform=document.createElement("form");
      myform.setAttribute("id","myForm");
      myform.setAttribute("onsubmit","comprobarValores()");
      div.appendChild(myform);

      //fieldset
      var fieldset=document.createElement("fieldset");
      fieldset.setAttribute("for", "fieldset");
      var legend=document.createElement("legend");
      legend.appendChild(document.createTextNode("Información Pantalón"));
      fieldset.appendChild(legend);
      myform.appendChild(fieldset);

      //label
      var label = document.createElement("LABEL");
      var t = document.createTextNode("num serie: ");
      label.setAttribute("for", "label");
      label.appendChild(t);
      fieldset.insertBefore(label,document.getElementById("label"));
      //input
      var input= document.createElement("input");
      input.setAttribute("id","numSerie");
      fieldset.insertBefore(input,document.getElementById("numSerie"));
      //br
      var saltoLinea=document.createElement("br");
      fieldset.appendChild(saltoLinea);

      //label
      var label = document.createElement("LABEL");
      var t = document.createTextNode("nombre: ");
      label.setAttribute("for", "label");
      label.appendChild(t);
      fieldset.insertBefore(label,document.getElementById("label"));
      //input
      var input= document.createElement("input");
      input.setAttribute("id","nombre");
      fieldset.insertBefore(input,document.getElementById("nombre"));
      //br
      var saltoLinea=document.createElement("br");
      fieldset.appendChild(saltoLinea);


      //label
      var label = document.createElement("LABEL");
      var t = document.createTextNode("Precio: ");
      label.setAttribute("for", "label");
      label.appendChild(t);
      fieldset.insertBefore(label,document.getElementById("label"));
      //input
      var input= document.createElement("input");
      input.setAttribute("id","precio");
      fieldset.insertBefore(input,document.getElementById("precio"));
      //br
      var saltoLinea=document.createElement("br");
      fieldset.appendChild(saltoLinea);

      //label
      var label = document.createElement("LABEL");
      var t = document.createTextNode("IVA: ");
      label.setAttribute("for", "label");
      label.appendChild(t);
      fieldset.insertBefore(label,document.getElementById("label"));
      //input
      var input= document.createElement("input");
      input.setAttribute("id","iva");
      fieldset.insertBefore(input,document.getElementById("iva"));
      //br
      var saltoLinea=document.createElement("br");
      fieldset.appendChild(saltoLinea);

      //label
      var label = document.createElement("LABEL");
      var t = document.createTextNode("talla: ");
      label.setAttribute("for", "label");
      label.appendChild(t);
      fieldset.insertBefore(label,document.getElementById("label"));
      //input
      var input= document.createElement("input");
      input.setAttribute("id","talla");
      fieldset.insertBefore(input,document.getElementById("talla"));
      //br
      var saltoLinea=document.createElement("br");
      fieldset.appendChild(saltoLinea);

      //label
      var label = document.createElement("LABEL");
      var t = document.createTextNode("color: ");
      label.setAttribute("for", "label");
      label.appendChild(t);
      fieldset.insertBefore(label,document.getElementById("label"));
      //input
      var input= document.createElement("input");
      input.setAttribute("id","color");
      fieldset.insertBefore(input,document.getElementById("color"));
      //br
      var saltoLinea=document.createElement("br");
      fieldset.appendChild(saltoLinea);

      //label
      var label = document.createElement("LABEL");
      var t = document.createTextNode("Ancho: ");
      label.setAttribute("for", "label");
      label.appendChild(t);
      fieldset.insertBefore(label,document.getElementById("label"));
      //input
      var input= document.createElement("input");
      input.setAttribute("id","ancho");
      fieldset.insertBefore(input,document.getElementById("ancho"));
      //br
      var saltoLinea=document.createElement("br");
      fieldset.appendChild(saltoLinea);

      //label
      var label = document.createElement("LABEL");
      var t = document.createTextNode("Largo: ");
      label.setAttribute("for", "label");
      label.appendChild(t);
      fieldset.insertBefore(label,document.getElementById("label"));
      //input
      var input= document.createElement("input");
      input.setAttribute("id","largo");
      fieldset.insertBefore(input,document.getElementById("largo"));
      //br
      var saltoLinea=document.createElement("br");
      fieldset.appendChild(saltoLinea);

      //input campo oculto
var input= document.createElement("input");
input.setAttribute("id","tipoProduct");
input.setAttribute("type", "hidden");
input.setAttribute("value","pantalon");
fieldset.insertBefore(input,document.getElementById("tipoProduct"));

      agregarBoton();





}//end function pantalon


function camisetabtn(){
  mensaje="";
  var texto=document.getElementById("listarPedido"); //para el listado limpiarlo
  texto.removeChild(texto.childNodes[0]);
  //si hay form se borra
  var form=document.getElementById("myForm");
  if(form !== null ){
    form.removeChild(form.childNodes[1]);//eliminar fieldset
    form.removeChild(form.children[0]);//eliminar el button de añadir
    form.remove();//eliminar form
  }


  //HACER FORM CON NODO NUEV
  var div=document.getElementById("formulario");
  var myform=document.createElement("form");
  myform.setAttribute("id","myForm");
  div.appendChild(myform);

  //fieldset
  var fieldset=document.createElement("fieldset");
  fieldset.setAttribute("for", "fieldset");
  var legend=document.createElement("legend");
  legend.setAttribute("id","camiseta");
  legend.appendChild(document.createTextNode("Información Camiseta"));
  fieldset.appendChild(legend);
  myform.appendChild(fieldset);

  //label
  var label = document.createElement("LABEL");
  var t = document.createTextNode("num serie: ");
  label.setAttribute("for", "label");
  label.appendChild(t);
  fieldset.insertBefore(label,document.getElementById("label"));
  //input
  var input= document.createElement("input");
  input.setAttribute("id","numSerie");
  fieldset.insertBefore(input,document.getElementById("numSerie"));
  //br
  var saltoLinea=document.createElement("br");
  fieldset.appendChild(saltoLinea);

  //label
  var label = document.createElement("LABEL");
  var t = document.createTextNode("nombre: ");
  label.setAttribute("for", "label");
  label.appendChild(t);
  fieldset.insertBefore(label,document.getElementById("label"));
  //input
  var input= document.createElement("input");
  input.setAttribute("id","nombre");
  fieldset.insertBefore(input,document.getElementById("nombre"));
  //br
   var saltoLinea=document.createElement("br");
   fieldset.appendChild(saltoLinea);

  //label
  var label = document.createElement("LABEL");
  var t = document.createTextNode("Precio: ");
  label.setAttribute("for", "label");
  label.appendChild(t);
  fieldset.insertBefore(label,document.getElementById("label"));
  //input
  var input= document.createElement("input");
  input.setAttribute("id","precio");
  fieldset.insertBefore(input,document.getElementById("precio"));
  //br
  var saltoLinea=document.createElement("br");
  fieldset.appendChild(saltoLinea);

  //label
  var label = document.createElement("LABEL");
  var t = document.createTextNode("IVA: ");
  label.setAttribute("for", "label");
  label.appendChild(t);
  fieldset.insertBefore(label,document.getElementById("label"));
  //input
  var input= document.createElement("input");
  input.setAttribute("id","iva");
  fieldset.insertBefore(input,document.getElementById("iva"));
  //br
  var saltoLinea=document.createElement("br");
  fieldset.appendChild(saltoLinea);

  //label
  var label = document.createElement("LABEL");
  var t = document.createTextNode("talla: ");
  label.setAttribute("for", "label");
  label.appendChild(t);
  fieldset.insertBefore(label,document.getElementById("label"));
  //input
  var input= document.createElement("input");
  input.setAttribute("id","talla");
  fieldset.insertBefore(input,document.getElementById("talla"));
  //br
  var saltoLinea=document.createElement("br");
  fieldset.appendChild(saltoLinea);

  //label
  var label = document.createElement("LABEL");
  var t = document.createTextNode("color: ");
  label.setAttribute("for", "label");
  label.appendChild(t);
  fieldset.insertBefore(label,document.getElementById("label"));
  //input
  var input= document.createElement("input");
  input.setAttribute("id","color");
  fieldset.insertBefore(input,document.getElementById("color"));
  //br
  var saltoLinea=document.createElement("br");
  fieldset.appendChild(saltoLinea);

//input campo oculto
var input= document.createElement("input");
  input.setAttribute("id","tipoProduct");
  input.setAttribute("type", "hidden");
  input.setAttribute("value","camiseta");
  fieldset.insertBefore(input,document.getElementById("tipoProduct"));

  agregarBoton();
}//end function pantalon


function zapatillabtn(){
  mensaje="";
  var texto=document.getElementById("listarPedido"); //para el listado limpiarlo
  texto.removeChild(texto.childNodes[0]);
    //si hay form se borra
    var form=document.getElementById("myForm");
    if(form !== null ){
      form.removeChild(form.childNodes[1]);//eliminar fieldset
      form.removeChild(form.children[0]);//eliminar el button de añadir
      form.remove();//eliminar form
    }

//HACER FORM CON NODO NUEV
var div=document.getElementById("formulario");
var myform=document.createElement("form");
myform.setAttribute("id","myForm");
div.appendChild(myform);

  //fieldset
  var fieldset=document.createElement("fieldset");
  fieldset.setAttribute("for", "fieldset");
  var legend=document.createElement("legend");
  legend.appendChild(document.createTextNode("Información Zapatilla"));
  fieldset.appendChild(legend);
  myform.appendChild(fieldset);

  //label
  var label = document.createElement("LABEL");
  var t = document.createTextNode("num serie: ");
  label.setAttribute("for", "label");
  label.appendChild(t);
  fieldset.insertBefore(label,document.getElementById("label"));
  //input
  var input= document.createElement("input");
  input.setAttribute("id","numSerie");
  fieldset.insertBefore(input,document.getElementById("numSerie"));
  //br
  var saltoLinea=document.createElement("br");
  fieldset.appendChild(saltoLinea);

   //label
  var label = document.createElement("LABEL");
  var t = document.createTextNode("nombre: ");
  label.setAttribute("for", "label");
  label.appendChild(t);
  fieldset.insertBefore(label,document.getElementById("label"));
  //input
  var input= document.createElement("input");
  input.setAttribute("id","nombre");
  fieldset.insertBefore(input,document.getElementById("nombre"));
  //br
  var saltoLinea=document.createElement("br");
  fieldset.appendChild(saltoLinea);

  //label
  var label = document.createElement("LABEL");
  var t = document.createTextNode("Precio: ");
  label.setAttribute("for", "label");
  label.appendChild(t);
  fieldset.insertBefore(label,document.getElementById("label"));
  //input
  var input= document.createElement("input");
  input.setAttribute("id","precio");
  fieldset.insertBefore(input,document.getElementById("precio"));
  //br
  var saltoLinea=document.createElement("br");
  fieldset.appendChild(saltoLinea);

  //label
  var label = document.createElement("LABEL");
  var t = document.createTextNode("IVA: ");
  label.setAttribute("for", "label");
  label.appendChild(t);
  fieldset.insertBefore(label,document.getElementById("label"));
  //input
  var input= document.createElement("input");
  input.setAttribute("id","iva");
  fieldset.insertBefore(input,document.getElementById("iva"));
  //br
  var saltoLinea=document.createElement("br");
  fieldset.appendChild(saltoLinea);

  //label
  var label = document.createElement("LABEL");
  var t = document.createTextNode("numero: ");
  label.setAttribute("for", "label");
  label.appendChild(t);
  fieldset.insertBefore(label,document.getElementById("label"));
  //input
  var input= document.createElement("input");
  input.setAttribute("id","numero");
  fieldset.insertBefore(input,document.getElementById("numero"));
  //br
  var saltoLinea=document.createElement("br");
  fieldset.appendChild(saltoLinea);

  //label
  var label = document.createElement("LABEL");
  var t = document.createTextNode("tipo: ");
  label.setAttribute("for", "label");
  label.appendChild(t);
  fieldset.insertBefore(label,document.getElementById("label"));
  //input
  var input= document.createElement("input");
  input.setAttribute("id","tipo");
  fieldset.insertBefore(input,document.getElementById("tipo"));
  //br
  var saltoLinea=document.createElement("br");
  fieldset.appendChild(saltoLinea);

  //producto propiedades
  var numSerie=document.getElementById("numSerie").value;
  var precio=document.getElementById("precio").value;
  var iva=document.getElementById("iva").value;

  //zapatilla propiedades
  var numero=document.getElementById("numero").value;
  var tipo=document.getElementById("tipo").value;

//input campo oculto
var input= document.createElement("input");
  input.setAttribute("id","tipoProduct");
  input.setAttribute("type", "hidden");
  input.setAttribute("value","zapatilla");
  fieldset.insertBefore(input,document.getElementById("tipoProduct"));

  agregarBoton();
  }//end function pantalon


