function miFunction(){
  var mensaje,num;
  mensaje=document.getElementById("result");//para sacar el mensaje luego
  mensaje.innerHTML=""; //asignar valor vacio

  //coger valor del input
  num=document.getElementById("demo").value;

  //controlar los errores
  try{
    //controlar valor vacio
    if(num===""){
      throw "la cadena es vacia";
    }//end if
    if(isNaN(num)){ //para sacar rapido que no es un numero
      throw "la cadena no es numero";
    } else {
      num=Number(num); //se pasa a objeto
    }//end if

    if(num>10) throw "el numero es demasiado alto";

    if(num<5){
      throw "el numero es demasiado bjo";
    }//end if
  }//end try
  catch (err){//lo que manda el throw
    mensaje.style.color="red"; //sale en rojo
    mensaje.innerHTML="error" + err + "."; //
  }//end catch

  finally{ //siempre se ejecuta
    mensaje.style.color="blue";
    mensaje.innerHTML="datos introducidos correctamente";

  }//end finally


}//end function
