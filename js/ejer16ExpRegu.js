

function validarPunto1(){
     //DESCRIPCION
    var ExpReg=/^[A-Z].*\.$/;
var frase= document.getElementById("frase").value;
var resultado= document.getElementById("result");
    if(frase == ExpReg ){
      resultado.innerHTML="la expresion es verdad";
    }else{
      resultado.innerHTML="la expresion  no es verdad";
    }//end if
  }//end function



  function validarTelefono(){
    //TELEFONO
    var Expe=/^9[0-9]{8}$/;
    var telefono= document.getElementById("telefono").value;
   telefono=parseInt(telefono);
var resultado= document.getElementById("result1");
    if(telefono == Expe ){
      resultado.innerHTML="la expresion es verdad";
    }else{
      resultado.innerHTML="la expresion  no es verdad";
    }//end if

  }
