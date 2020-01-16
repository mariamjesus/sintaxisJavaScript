function ejer1Activo(){
  var articulos= document.getElementsByTagName("article");
  for(let i=0; i<articulos.length;i++){
    articulos[i].style.background="blue";
  }//end for
}//end function ejer1

function ejer1Desactivo(){
    var articulos= document.getElementsByTagName("article");
    for(let i=0; i<articulos.length;i++){
      articulos[i].style.background="inherit";
    }//end for
}//end function ejer desa

function ejer2Activo(){
    var div=document.getElementById("ejer3");//donde voy a buscar
    var link= document.getElementById("Menu1").getElementsByTagName("a"); //coger los datos
    var ulist=document.createElement("ul"); //porque los li van el ul

    var i, li, node;

    for(i=0;i<link.length;i++){ //recorrer los li que hay y guardarlos
        li=document.createElement("li");
        node=document.createTextNode(link[i].innerHTML);//para concatenar los resoltados y guardarlos en node
        li.appendChild(node);
        ulist.appendChild(li);
    }
    div.appendChild(ulist);
}//end function

function removeElement(elem){
   while (elem.childNodes.length >0){
       elem.removeChild(elem.childNodes[0]);
   }//end while
}//end function


function ejer9activo(){
var list=document.getElementById("Menu1").getElementsByTagName("ul")[0];
var li=document.createElement("li"); //creo nodo li
var enlace=document.createElement("a"); //creo nodo a
enlace.appendChild(document.createTextNode("nuevo servicio")); //añado al enlace el texto nodo
li.appendChild(enlace);// añado al li el enlace en la posicion ultima de la colecion

//controlar el tamaño de la lista, la coleccion html de li
if(list.children.length>5){
  list.insertBefore(li,list.children[5]);// añado al lu el li en la posicion antes del 5
} else{
  list.appendChild(li);
}//end if

}//end function 9

function ejer9Desac(){
  var list=document.getElementById("Menu1").getElementsByTagName("ul")[0];
  var borrar=list.children[5]; //coger el eleemnto 6 de la lista
  borrar.remove(); //lo elimina solo el li seleccionado

  //otra opcion
 list.removeChild(list.children[5]);//tambien borra
 console.log(list); //toda la lista, el ul entero
 console.log(list.firstChild);//primer nodo, puede dar error al coger los espacios intermedios
 console.log(list.firstElementChild);//primer elemento hijo de la lista
 console.log(list.children[2]);//posicion 3
 console.log(list.childNodes[0]);
 console.log(list.childNodes[1]);
  console.log(list.childNodes[2]);
}//end function 9


function ejer11Act(){
  var list=document.getElementById("Menu1").getElementsByTagName("ul")[0];
  var reem=list.children[5];//elemento a reeemplar,posicion
  var liNuv=document.createElement("li");//creo nuevo li
  var aNuv=document.createElement("a");//creo nuevo a
  aNuv.appendChild(document.createTextNode("texto nuevo"));//añado al nuevo a texto
  liNuv.appendChild(aNuv);//unir nodos de li dentro de a
  list.replaceChild(liNuv,reem);
}//end function

function ejer12Act(){
  var images=document.getElementsByTagName("figure");
  var result=document.getElementById("resulEjer12");//para mostrar en html el error
   var i;
for(i=0;i<images.length;i++){
  //var texto=document.createTextNode(images[i].getElementsByTagName("figcaption")[0].innerHTML + "," );
  //creo el text nodo de los elementos figcaption, el 0 es porque el siguiente nodo es el texto por eso [0]innerthml
  result.appendChild(document.createTextNode(images[i].getElementsByTagName("figcaption")[0].innerHTML + "," ));
}
///sale la longitud
 let beforeCont=result.childNodes.length;
//normalizar solo saldra 1
result.normalize();
 let afterCont=result.childNodes.length;

 console.log(beforeCont);
 console.log(afterCont);
 result.appendChild(document.createElement("br"));
 result.appendChild(document.createTextNode("antes:" + beforeCont));
 result.appendChild(document.createElement("br"));
 result.appendChild(document.createTextNode("despues:" + afterCont));
}//end function

function ejer13(){
//para el 13 con un while con la funcion nextElementSibiling

//elemento a partir de cual recorrer
var item=document.getElementById("Menu1").getElementsByTagName("ul")[0].firstElementChild; //para acceder al ul desde el id, el primer elemento de la lista
let div=document.getElementById("result13"); //donde se mostrara

var ulist= document.createElement("ul"); //creo una nueva ul para añadir
//removeAllElement(div);//para limpiar el div antes y asegurar
var li;

while(item){ //mientras hay lista
  li=document.createElement("li");//creo un li nuevo
  li.appendChild(document.createTextNode(item.firstElementChild.innerHTML));//coger el primer elemento despues, el a el texto solo
  console.log(item.firstElementChild.innerHTML);
  ulist.appendChild(li);
  item=item.nextElementSibling;
}//end
 div.appendChild(ulist);
}//end function
