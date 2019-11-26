var pila=new Array();
document.getElementById("demo").innerHTML=pila;
mensaje=document.getElementById("result");//para sacar el mensaje luego

function anadir(num){
  var num=parseInt(num);
//controlar los errores
try{
    //controlar valor vacio

    if(isNaN(num)){ //para sacar rapido que no es un numero
      throw "la cadena no es numero";
    }

    if(pila.length==10){ // array de longitud 10 como max
      throw "pila llena, capacidad de 10";
    }
      pila.push(num);

 } catch (err){//lo que manda el throw
    mensaje.style.color="red"; //sale en rojo
    mensaje.innerHTML="error" + err + "."; // concateno el mensaje y saldra en roojo
  }//end catch

    document.getElementById("demo1").innerHTML=pila;
}

function consumir(num){
var num=parseInt(num);
//controlar los errores
try{
  //controlar valor vacio

  if(pila.length==0){ //para sacar rapido que no es un numero
    throw "no se pueden sacar elementos, pila a 0";
  }
    pila.pop(num); //añado el elemento
  } catch (err){//lo que manda el throw
    mensaje.style.color="red"; //sale en rojo
    mensaje.innerHTML="error" + err + "."; // concateno el mensaje y saldra en roojo
  }//end catch

    document.getElementById("demo1").innerHTML=pila;
}


function colar(num){
var num=parseInt(num);
    pila.unshift(num); //añado el elemento
    document.getElementById("demo1").innerHTML=pila;
}
