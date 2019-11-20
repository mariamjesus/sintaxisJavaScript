function reemplazo(){
  var texto= document.getElementById("myTextarea").value; //recogo la palabra a buscar
  var buscar= document.getElementById("buscar").value; //recogo la palabra a buscar
  var reemplazar= document.getElementById("reemplazar").value; //recogo la de reemplazar
  var resultado= document.getElementById("demo");

  var n= texto.indexOf(buscar); //contador

  var res = texto.replace(buscar , reemplazar,"gi"); //cambio la primera palabra

    while(n!=-1){ // mientras no llegue al final del texto
       res = res.replace(buscar , reemplazar,"gi"); //cambio la primera palabra
        n= res.indexOf(buscar); //cambio en la cadena nueva
    }
    resultado.innerHTML=res;

}//end function
