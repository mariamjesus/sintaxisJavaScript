

function validarPunto1(){
     //DESCRIPCION
    var ExpReg=/^[A-Z].*\.$/;
    var frase= document.getElementById("frase").value;
    var resultado= document.getElementById("result");
    var resul=ExpReg.test(frase);
    if(resul === true){
      resultado.innerHTML="la expresion es verdad";
    }else{
      resultado.innerHTML="la expresion  no es verdad";
    }//end if
  }//end function



  function validarTelefono(){
    //TELEFONO
    var Expe=/^9[0-9]{8}$/; //expresion regular a utilizar
    var telefono= document.getElementById("telefono").value; //coger el valor introducido en el input
    telefono=parseInt(telefono); // hacer parseo para num
    var resultado= document.getElementById("result1"); // donde lo voy a mostrar en el html
     var resul=Expe.test(telefono);// compruebo la expresion y devuelve True o False
     var resul=Exp.test(telefono); // validar telefono internacional

    if(resul === true ){
      resultado.innerHTML="la expresion es verdad";
    }else{
      resultado.innerHTML="la expresion  no es verdad";
    }//end if

  }

  function validarTelfInter(){
    var Exp=/^\(\+34\)9\d{8}/; // expresion regular telf fijo
    var telefono= document.getElementById("telefonoInter").value; //coger el valor introducido en el input
    telefono=parseInt(telefono); // hacer parseo para num
    var resultado= document.getElementById("result2"); // donde lo voy a mostrar en el html
    var resul=Exp.test(telefono); // validar telefono internacional

    if(resul === true ){
      resultado.innerHTML="la expresion es verdad";
    }else{
      resultado.innerHTML="la expresion  no es verdad";
    }//end if
  }//end function


   function validarFecha(){
    var Exp=/^(0[1-9]|[12]\d|3[01])\(0[1-9]|1[012])\/\d{4}+\s([01]\d |2[0-3])\:[0-5]\d$/;
    var fecha= document.getElementById("fecha").value; //coger el valor introducido en el input
    var resultado= document.getElementById("result3"); // donde lo voy a mostrar en el html
    var resul=Exp.test(fecha); // validar telefono internacional

    if(resul === true ){
      resultado.innerHTML="la expresion es verdad";
    }else{
      resultado.innerHTML="la expresion  no es verdad";
    }//end if
   }//end functi

   function validarCP(){
   /// var Exp=/0[1-9][0-9]{3}|[1-4][0-9]{4}|5[0-2][0-9]{3}/;
    var Exp=/^[0-9]{5}$/;
    var codigopostal= document.getElementById("cp").value; //coger el valor introducido en el input
    var resultado= document.getElementById("result4"); // donde lo voy a mostrar en el html
    var resul=Exp.test(codigopostal);

    if(resul === true ){
      resultado.innerHTML="la expresion es verdad";
    }else{
      resultado.innerHTML="la expresion  no es verdad";
    }//end if
   }//end function


   function validarEmail(){
     // var Exp=/^[_A-Za-z0-9-]+(?:\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9]+\.[A-Za-z0-9]{1,3}/;
      var Exp=/^\w+[\.\w+]*\@\w+\.[A-Za-z]{2,3}$/;
      var email= document.getElementById("email").value;
      var resultado= document.getElementById("result5");
      var resul=Exp.test(codigopostal);

      if(resul === true ){
        resultado.innerHTML="la expresion es verdad";
      }else{
        resultado.innerHTML="la expresion  no es verdad";
      }//end if
   }//end function

   function validarImporte(){
      //num real
    var Expr=/^(\-?)\d+([\.\,]\d+)?$/;
     var importe= document.getElementById("importe").value;
     var resultado= document.getElementById("result6");
     var resul=Expr.test(importe);

     if(resul === true ){
       resultado.innerHTML="la expresion es verdad";
     }else{
       resultado.innerHTML="la expresion  no es verdad";
     }//end if
  }//end function

   function validarDatosBanco(){
  //banco
  var Exp=/^\d{4}\s\d{4}\s\d{2}\s\d{10}$/;
   var datosBancarios= document.getElementById("datosBancarios").value;
   var resultado= document.getElementById("result7");
   var resul=Exp.test(datosBancarios);

   if(resul === true ){
     resultado.innerHTML="la expresion es verdad";
   }else{
     resultado.innerHTML="la expresion  no es verdad";
   }//end if
}//end function

function validarPagWeb(){
   //web simple
   var Exp=/^[w]{3}\.\w+\.[A-Za-z]{2,3}$/;
   var paginaWeb= document.getElementById("paginaWeb").value;
   var resultado= document.getElementById("result8");
   var resul=Exp.test(paginaWeb);

   if(resul === true ){
     resultado.innerHTML="la expresion es verdad";
   }else{
     resultado.innerHTML="la expresion  no es verdad";
   }//end if
}//end functio

function validarWeb(){
    //web completa
    //var exp=/^(http[s]?\:\/\/[w]{3}\.\w+\.[A-Za-z]{2,3}$/;
    var paginaWeb1= document.getElementById("paginaWeb1").value;
    var resultado= document.getElementById("result9");
    var resul=exp.test(paginaWeb1);

    if(resul === true ){
      resultado.innerHTML="la expresion es verdad";
    }else{
      resultado.innerHTML="la expresion  no es verdad";
    }//end if
  }//end function


  function validarWebCompleta(){
    var exp=/^http[s]?\:\/\/[w]{3}\.\w+\.[A-Za-z]{2,3}:\d{1,5}\?(\w+=\w+)(\&\w+=\w+)*$/;

    var webCompleta= document.getElementById("webCompleta").value;
    var resultado= document.getElementById("result10");
    var resul=exp.test(webCompleta);

    if(resul === true ){
      resultado.innerHTML="la expresion es verdad";
    }else{
      resultado.innerHTML="la expresion  no es verdad";
    }//end if
  }//end function




