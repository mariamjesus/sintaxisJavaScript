function reloj(){

 var hora= new Date(); //sacar la fecha actual
//document.write(hora);
 var time=hora.toLocaleTimeString();
 document.getElementById("demo").innerHTML=time;// cambio el id del html y pongo la var del tiempo, el reloj


}//end functin reloj
//reloj();
var myVar = setInterval(reloj, 1000);//llamo a la funcion reloj y le doy la propiedad de actualizar cada segundo

