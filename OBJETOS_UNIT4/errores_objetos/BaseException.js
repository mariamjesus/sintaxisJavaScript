"use strict";

function BaseException(){
BaseException.prototype=new Error(); //objeto base que hereda de objeto error
BaseException.prototype.constructor= BaseException;

//sobrescribir toString method
BaseException.prototype.toString=function(){
  return this.name + ": " + this.message;
}; // añado metodo tostring al objeto baseException

}//end function
