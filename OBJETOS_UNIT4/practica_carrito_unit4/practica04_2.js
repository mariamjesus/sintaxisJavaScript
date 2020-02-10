
function myFunction(){

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

var camis1= new Camiseta(11222,"cami1",15,10,"xs","black");
console.log(camis1.numSerie);

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



}
