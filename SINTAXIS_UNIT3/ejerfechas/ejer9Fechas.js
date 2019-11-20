 function calculateDate(dia, mes, year ){
var result=document.getElementById("resultado");

var dia = parseInt (dia);//coger valores de las opciones seleccionadas
var mes = parseInt (mes);
var year = parseInt (year);

resultado.innerHTML = new Date(year, mes, dia, 0, 0, 0, 0).toLocaleString();

 }//end function crearfecha

 calculateDate();
