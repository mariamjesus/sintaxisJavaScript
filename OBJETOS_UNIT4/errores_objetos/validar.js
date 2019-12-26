"use strict";

function EmailException(){
  this.name= "emailException";

  switch (code) {
    case 1:
        this.message="Error: la direccion necesita un @";
      break;
    case 2:
        this.message="Error: repetición excesiva de puntos o guiones";
    break;
    case 3:
          this.message="Error: dominio no valido";
    break;
    default:
      this.message="Error: error desconocido";
      break;
  }//end switch
  this.code=code;
}//end function

EmailException.prototype =new BaseException()
EmailException.prototype.constructor= EmailException(address);

function sendEMail(){

var resultado= document.getElementById('resultado').value;
  try{
    resultado.style.color="blue";
    resultado.innerHTML= validateEmail(address);

  }catch(e){
    resultado.style.color="red";
    resultado.innerHTML=e.toString();
  }//end trycasth
}//end function

function validateEmail(){
  var patron=/@/; // sacar primera excepcion
  var patron2= /w*(\.|-){2,}\w*@/; //coger .,-,_
  var patron3= /\w*(\.com|\.es|\.net)$/; // .com,.es,.net

var number= 5+ boo;

  if(! patron.test(addres)){ //sino hay @ en el email
    throw new EmailException(1);
    } else if (patron2.test(addres)) {
        throw new EmailException(2);
    } else if (!patron3.test(addres)){
        throw new EmailException(3);
    }else{ //si todo es correcto saco direccion
      return addres;
    }

} //end function
