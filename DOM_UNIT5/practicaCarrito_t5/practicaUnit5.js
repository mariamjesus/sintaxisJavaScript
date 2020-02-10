
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


class Camiseta extends Producto{
  constructor(numSerie,nombre,precio,iva,talla,color){

    super(numSerie,nombre,precio,iva);
    this.talla=talla || "unica";
    this.color=color || "negro ";

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



var carrito= new Carrito(1,[]);

///FUNCTION DE AÑADIR BOTON FORMULARIO
function agregarBoton() {
  const button = document.createElement('button');
  button.type = 'button';
  button.innerText = 'Añadir producto';
var form=document.getElementById("myForm");
form.appendChild(button);
button.onclick=limpiarFormulario;

}
//LIMPIAR FORMULARIO Y BOTON
function limpiarFormulario(){

 var form=document.getElementById("myForm");//donde se va a mostrar
//producto propiedades
var numSerie=document.getElementById("numSerie").value;
var precio=document.getElementById("precio").value;
var iva=document.getElementById("iva").value;


var tipoProdu=document.getElementById("camiseta");
 switch (tipoProdu) {
   case "camiseta":
     //camiseta y pantalones propiedades
      var talla=document.getElementById("talla").value;
      var color=document.getElementById("color").value;

      console.log(numSerie,precio,iva,talla,color);
      // creo nueva instancia de objeto camiseta
      var cami1=new Camiseta(numSerie,precio,iva,talla,color);
      carrito.items.push(cami1);//añado al array
      console.log(carrito);

     break;

   default:
     break;
 }

//pantalon propiedad
//var ancho=document.getElementById("ancho").value;
//var largo=document.getElementById("largo").value;



  form.removeChild(form.childNodes[1]);//eliminar fieldset
form.removeChild(form.children[0]);//eliminar el button de añadir
form.remove();

  // AÑADIR PRODUCTO A OBJETO CARRITO EN UN ARRAY
    // con push en array
  //PASAR VALORES DE INPUT A UN NUEVO OBJETO Y GUARDARLOS
}


function pantalonbtn(){

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


      agregarBoton();





}//end function pantalon


function camisetabtn(){
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
  input.setAttribute("id","camiseta");
  input.setAttribute("type", "hidden");
  fieldset.insertBefore(input,document.getElementById("camiseta"));

  agregarBoton();
}//end function pantalon


function zapatillabtn(){

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



  agregarBoton();
  }//end function pantalon
