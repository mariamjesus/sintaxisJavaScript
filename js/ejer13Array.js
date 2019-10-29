function CrearCadena (){
  var num;
  var cont=0;
 if (num!= 0){

      num= prompt("introduce 5 numeros"); // pedir los 5 numeros
      // guardar en un array
    var NumArr=num.split(" ");
    cont ++;
  }else{
    // si hay un 0 cerrar ventana
   // window.close();
  }

 var text = "";
 var i;
 //recorrer el array
  for (i = 0; i < NumArr.length; i++) {
    text += NumArr[i] + "<br>";
  }//end for
 document.getElementById("demo").innerHTML = text;
return NumArr;
}//end function


////////////////////////////////////////////////////
function BuscarRepetidos(NumArr){
 //recorrer el array

 for (i = 0; i < NumArr.length; i++) {
  document.write(NumArr[i] + "<br/>");
}//end for


}//end function

CrearCadena();

BuscarRepetidos();
