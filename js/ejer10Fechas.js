function calculateDate(operacion, numdías) {
  var resultado = document.getElementById("resultado");
  var today = new Date();
  var dayms = 1000 * 60 * 60 * 24; // milisegundos que tiene un día

  if (operacion == 1) {
    let nextDate = numdías * dayms;
    let suma = today.getTime() + nextDate; //getTime devuelve milisegundos de esa fecha
    let finalDate = new Date(suma);
    resultado.innerHTML = new Date(finalDate).toLocaleString();
  }
  else {
    let prevDate = numdías * dayms;
    let resta = today.getTime() - prevDate; //getTime devuelve milisegundos de esa fecha
    let finalDate = new Date(resta);
    resultado.innerHTML = new Date(finalDate).toLocaleString();
  }
}




