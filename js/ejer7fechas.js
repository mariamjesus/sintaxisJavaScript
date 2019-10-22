function navidad(){
// fecha actual
var fechaActual= new Date();

//fecha navidad
var fechaNav= new Date(2019,11,25);

var dias=fechaActual-fechaNav;// resto las fechas
dias=dias/(1000*60*60*24); //pasar a dias
document.write("faltan " + Math.ceil(dias) + " para navidad!!");

}//end function
navidad();
