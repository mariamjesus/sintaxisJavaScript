
 var ARRAY=[]; // array para guardar num enteros que recogo

 //FUNCION PARA LIMPIAR EL FORMULARIO Y DONDE MUESTRO RESULT
 function cleanData(){
   document.getElementById("num").value="";// limpiar input de la pagina
}//end function

function addNumber (elem) {
  var num = parseInt (elem.value);
  var resultado = document.getElementById ("resultado"); //para mostrar resultado

  if (isNaN(num)) { // 1º Si el valor no es un entero da un error.
    resultado.style.color = "red"; //cambio de color con el style
     resultado.innerHTML = "Debes introducir un entero"; //texto que se muestra

  }else{
      // Si es un num y no hemos llegado al final guardamos el dato
	 	if (num !== 0 && ARRAY.length < 5) {
      ARRAY.push(parseInt(num));// añadir al array
      resultado.style.color = "blue";
      resultado.innerHTML = ARRAY;
    }//end if

    // llegado al final se desactiva el botón y se calcula los repetidos o si es 0 un valor introducido
    if (num === 0 || ARRAY.length === 5) {
      elem.disabled = true; //desabilitar boton
      document.getElementById("addButton").disabled = true;
      let values = isThereRepeted (); // funcion para sacar repetidos
        if (values.length >0){
           resultado.innerHTML = "Repetidos: " + values;
        }else{
           resultado.innerHTML = "No hay repetidos";
         }//end if
    }//end if

  }//end if

}//end function

//FUNCTION PARA SACAR REPETIDOS DEL ARRAY
function isThereRepeted () {
  var repeatedNumbers = []; //Array  para ir guardando los repetidos.

  for (let i = 0, j, isOnARRAY; i < ARRAY.length-1; i++){
    isOnARRAY = false; // salir antes del While si hay un repetido
    j = i+1; //Mirarmos repetidos a partir de los que ha hemos comprobado.
    if (repeatedNumbers.indexOf (ARRAY[i]) === -1) { //Si el número ya está en los repetidos no hace falta buscarlos ni guardarlo
      while (j < ARRAY.length && isOnARRAY === false){ //Recorremos el array hasta que encontremos repetido o el final del array
        if (ARRAY[i] === ARRAY[j]) { // Si encontramos repetido se guarda y salimos del bucle.
          isOnARRAY = true;
          repeatedNumbers.push(ARRAY[i]);
        } else {
          j++;
        }//end if
      }//end while
    }//end if
  }//end for

  return (repeatedNumbers);
}//end function
