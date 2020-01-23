///FUNCTION DE AÑADIR BOTON FORMULARIO
function agregarBoton() {
  const button = document.createElement('button');
  button.type = 'button';
  button.innerText = 'Añadir producto'
var form=document.getElementById("myForm");
form.appendChild(button);
button.onclick=anadirCarrito;

}
//LIMPIAR FORMULARIO Y BOTON
function anadirCarrito(){
  var form=document.getElementById("myForm");//donde se va a mostrar
  form.removeChild(form.childNodes[1]);//eliminar fieldset
  form.removeChild(form.children[0]);//eliminar el button de añadir

  // AÑADIR PRODUCTO A OBJETO CARRITO EN UN ARRAY
    // con push en array
  //PASAR VALORES DE INPUT A UN NUEVO OBJETO Y GUARDARLOS
}



function pantalon(){

var form=document.getElementById("myForm");//donde se va a mostrar


//fieldset
var fieldset=document.createElement("fieldset");
fieldset.setAttribute("for", "fieldset");
var legend=document.createElement("legend");
legend.appendChild(document.createTextNode("Información Pantalón"));
fieldset.appendChild(legend);
form.appendChild(fieldset);

//label
var label = document.createElement("LABEL");
var t = document.createTextNode("num serie: ");
label.setAttribute("for", "numSerie");
label.appendChild(t);
fieldset.insertBefore(label,document.getElementById("numSerie"));
//input
var input= document.createElement("input");
input.setAttribute("for","input");
fieldset.insertBefore(input,document.getElementById("input"));
//br
var saltoLinea=document.createElement("br");
fieldset.appendChild(saltoLinea);

//label
var label = document.createElement("LABEL");
var t = document.createTextNode("Precio: ");
label.setAttribute("for", "precio");
label.appendChild(t);
fieldset.insertBefore(label,document.getElementById("precio"));
//input
var input= document.createElement("input");
input.setAttribute("for","input");
fieldset.insertBefore(input,document.getElementById("input"));
//br
var saltoLinea=document.createElement("br");
fieldset.appendChild(saltoLinea);

//label
var label = document.createElement("LABEL");
var t = document.createTextNode("IVA: ");
label.setAttribute("for", "IVA");
label.appendChild(t);
fieldset.insertBefore(label,document.getElementById("IVA"));
//input
var input= document.createElement("input");
input.setAttribute("for","input");
fieldset.insertBefore(input,document.getElementById("input"));
//br
var saltoLinea=document.createElement("br");
fieldset.appendChild(saltoLinea);

//label
var label = document.createElement("LABEL");
var t = document.createTextNode("talla: ");
label.setAttribute("for", "talla");
label.appendChild(t);
fieldset.insertBefore(label,document.getElementById("talla"));
//input
var input= document.createElement("input");
input.setAttribute("for","input");
fieldset.insertBefore(input,document.getElementById("input"));
//br
var saltoLinea=document.createElement("br");
fieldset.appendChild(saltoLinea);

//label
var label = document.createElement("LABEL");
var t = document.createTextNode("color: ");
label.setAttribute("for", "color");
label.appendChild(t);
fieldset.insertBefore(label,document.getElementById("color"));
//input
var input= document.createElement("input");
input.setAttribute("for","input");
fieldset.insertBefore(input,document.getElementById("input"));
//br
var saltoLinea=document.createElement("br");
fieldset.appendChild(saltoLinea);

//label
var label = document.createElement("LABEL");
var t = document.createTextNode("Ancho: ");
label.setAttribute("for", "ancho");
label.appendChild(t);
fieldset.insertBefore(label,document.getElementById("ancho"));
//input
var input= document.createElement("input");
input.setAttribute("for","input");
fieldset.insertBefore(input,document.getElementById("input"));
//br
var saltoLinea=document.createElement("br");
fieldset.appendChild(saltoLinea);

//label
var label = document.createElement("LABEL");
var t = document.createTextNode("Largo: ");
label.setAttribute("for", "largo");
label.appendChild(t);
fieldset.insertBefore(label,document.getElementById("largo"));
//input
var input= document.createElement("input");
input.setAttribute("for","input");
fieldset.insertBefore(input,document.getElementById("input"));
//br
var saltoLinea=document.createElement("br");
fieldset.appendChild(saltoLinea);

agregarBoton();

}//end function pantalon


function camiseta(){

  var form=document.getElementById("myForm");//donde se va a mostrar


  //fieldset
  var fieldset=document.createElement("fieldset");
  fieldset.setAttribute("for", "fieldset");
  var legend=document.createElement("legend");
  legend.appendChild(document.createTextNode("Información Camiseta"));
  fieldset.appendChild(legend);
  form.appendChild(fieldset);

  //label
  var label = document.createElement("LABEL");
  var t = document.createTextNode("num serie: ");
  label.setAttribute("for", "numSerie");
  label.appendChild(t);
  fieldset.insertBefore(label,document.getElementById("numSerie"));
  //input
  var input= document.createElement("input");
  input.setAttribute("for","input");
  fieldset.insertBefore(input,document.getElementById("input"));
  //br
  var saltoLinea=document.createElement("br");
  fieldset.appendChild(saltoLinea);

  //label
  var label = document.createElement("LABEL");
  var t = document.createTextNode("Precio: ");
  label.setAttribute("for", "precio");
  label.appendChild(t);
  fieldset.insertBefore(label,document.getElementById("precio"));
  //input
  var input= document.createElement("input");
  input.setAttribute("for","input");
  fieldset.insertBefore(input,document.getElementById("input"));
  //br
  var saltoLinea=document.createElement("br");
  fieldset.appendChild(saltoLinea);

  //label
  var label = document.createElement("LABEL");
  var t = document.createTextNode("IVA: ");
  label.setAttribute("for", "IVA");
  label.appendChild(t);
  fieldset.insertBefore(label,document.getElementById("IVA"));
  //input
  var input= document.createElement("input");
  input.setAttribute("for","input");
  fieldset.insertBefore(input,document.getElementById("input"));
  //br
  var saltoLinea=document.createElement("br");
  fieldset.appendChild(saltoLinea);

  //label
  var label = document.createElement("LABEL");
  var t = document.createTextNode("talla: ");
  label.setAttribute("for", "talla");
  label.appendChild(t);
  fieldset.insertBefore(label,document.getElementById("talla"));
  //input
  var input= document.createElement("input");
  input.setAttribute("for","input");
  fieldset.insertBefore(input,document.getElementById("input"));
  //br
  var saltoLinea=document.createElement("br");
  fieldset.appendChild(saltoLinea);

  //label
  var label = document.createElement("LABEL");
  var t = document.createTextNode("color: ");
  label.setAttribute("for", "color");
  label.appendChild(t);
  fieldset.insertBefore(label,document.getElementById("color"));
  //input
  var input= document.createElement("input");
  input.setAttribute("for","input");
  fieldset.insertBefore(input,document.getElementById("input"));
  //br
  var saltoLinea=document.createElement("br");
  fieldset.appendChild(saltoLinea);

  agregarBoton();
}//end function pantalon


function zapatilla(){

  var form=document.getElementById("myForm");//donde se va a mostrar

  //fieldset
  var fieldset=document.createElement("fieldset");
  fieldset.setAttribute("for", "fieldset");
  var legend=document.createElement("legend");
  legend.appendChild(document.createTextNode("Información Zapatilla"));
  fieldset.appendChild(legend);
  form.appendChild(fieldset);

  //label
  var label = document.createElement("LABEL");
  var t = document.createTextNode("num serie: ");
  label.setAttribute("for", "numSerie");
  label.appendChild(t);
  fieldset.insertBefore(label,document.getElementById("numSerie"));
  //input
  var input= document.createElement("input");
  input.setAttribute("for","input");
  fieldset.insertBefore(input,document.getElementById("input"));
  //br
  var saltoLinea=document.createElement("br");
  fieldset.appendChild(saltoLinea);

  //label
  var label = document.createElement("LABEL");
  var t = document.createTextNode("Precio: ");
  label.setAttribute("for", "precio");
  label.appendChild(t);
  fieldset.insertBefore(label,document.getElementById("precio"));
  //input
  var input= document.createElement("input");
  input.setAttribute("for","input");
  fieldset.insertBefore(input,document.getElementById("input"));
  //br
  var saltoLinea=document.createElement("br");
  fieldset.appendChild(saltoLinea);

  //label
  var label = document.createElement("LABEL");
  var t = document.createTextNode("IVA: ");
  label.setAttribute("for", "IVA");
  label.appendChild(t);
  fieldset.insertBefore(label,document.getElementById("IVA"));
  //input
  var input= document.createElement("input");
  input.setAttribute("for","input");
  fieldset.insertBefore(input,document.getElementById("input"));
  //br
  var saltoLinea=document.createElement("br");
  fieldset.appendChild(saltoLinea);

  //label
  var label = document.createElement("LABEL");
  var t = document.createTextNode("numero: ");
  label.setAttribute("for", "numero");
  label.appendChild(t);
  fieldset.insertBefore(label,document.getElementById("numero"));
  //input
  var input= document.createElement("input");
  input.setAttribute("for","input");
  fieldset.insertBefore(input,document.getElementById("input"));
  //br
  var saltoLinea=document.createElement("br");
  fieldset.appendChild(saltoLinea);

  //label
  var label = document.createElement("LABEL");
  var t = document.createTextNode("tipo: ");
  label.setAttribute("for", "tipo");
  label.appendChild(t);
  fieldset.insertBefore(label,document.getElementById("tipo"));
  //input
  var input= document.createElement("input");
  input.setAttribute("for","input");
  fieldset.insertBefore(input,document.getElementById("input"));
  //br
  var saltoLinea=document.createElement("br");
  fieldset.appendChild(saltoLinea);

  agregarBoton();
  }//end function pantalon
