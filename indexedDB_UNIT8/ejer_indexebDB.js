"user strict";

//CREAR INDEXEDDB//////////////////
var bd;
//crear la bbdd
var request = window.indexedDB.open("alumnos", 3);

//function para ver si se ha creado o no
request.onerror = function(event) { //function del error
  alert("error al crear/obtener la base de datos");
};
request.onsuccess = function(event) { //function de exito conexion a bd
  db = request.result;
};

//datos de bd
// Así se ve nuestra información
const alumn= [
  { nombre: "maria", apellido1: "torres", apellido1: "fernandez", curso: "DAW" },
  {  nombre: "antonio", apellido1: "segura", apellido1: "sanchez", curso: "DAM" }
];

//para acutalizar la version de bd
request.onupgradeneeded = function(event) {
  var db = event.target.result;

  // Crea un almacén de objetos  para esta base de datos
  //dni como clave ya que es garantizado que es única
  var  objectStore = db.createObjectStore("id", { autoIncrement : true });

  // Se usa transaction.oncomplete para asegurarse que la creación del almacén  haya finalizado antes de añadir los datos en el.
  objectStore.transaction.oncomplete = function(event) {
    // Guarda los datos en el almacén recién creado.
    var customerObjectStore = db.transaction("alumnos", "readwrite").objectStore("alumnos");
    for (var i in alumn) {
      customerObjectStore.add(alumn[i]);
    }//end for
  }//end oncomplete

};//end function




