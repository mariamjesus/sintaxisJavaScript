// This is what our customer data looks like.

const DB_NAME = 'UT08alumnos';
const DB_VERSION = 3;
const DB_STORE_NAME = 'students';
const studentsData = [];



var db;
var request = indexedDB.open(DB_NAME, DB_VERSION);


var students = [];
var selectedStudentTR; //Donde se almacena la fila seleccionada

//Manejadores de error o éxito al abrir nuestra bases de datos
//cuando da eRRor
request.onerror = function(event) {
  this.onError("Error en la solicidtud"+event.target.error);
  document.getElementById("error").appendChild(document.createTextNode("Error en la solicitud: " + event.target.error + "<br/>"));
};


//CUANDO SE ABRE DE FORMA CORRECTA
request.onsuccess = function(event) {
  // event.target hace referencia al objeto que lanzo el evento (base de datos)
  db = event.target.result;
  db.onerror = function(event) {
    // Generic error handler for all errors targeted at this database's
    // requests!
    onError("Error en el acceso a la base de datos: " + event.target.error);
    //document.getElementById("error").appendChild(document.createTextNode("Error en el acceso a la base de datos: " + event.target.error + "<br/>"));
  };

  var studentsObjectStore = db.transaction(DB_STORE_NAME).objectStore(DB_STORE_NAME); //si solo vamos a iniciar
  //transacciones para acceder a datos
  //no modificarlos no se pone nada readonly
  var tBody = document.getElementById("datagrid").getElementsByTagName("tbody")[0];//accedemos al tbody para pintar la tabla
  //si la transaccion se ha creado bien que compruebe que en students hay algun estudiante
  studentsObjectStore.transaction.oncomplete = function (event){
    if(students.length === 0){
      var tr = document.createElement("tr"); //filas
      var td = document.createElement("td"); //columnas
      td.setAttribute("colspan","4"); //columna de 4
      td.appendChild(document.createTextNode("No Existen estudiantes en la BD"));
      tr.appendChild(td);
      tBody.appendChild(tr);
    }
  }


//SI SE HA ECHO BIEN
studentsObjectStore.openCursor().onsuccess = function(event){
  var cursor = event.target.result;
//con cursor se accede a la base de datos, a la primera fila
  if(cursor){
    var student = new Student(cursor.value.firstname, cursor.value.lastname1,  cursor.value.specialty);
     student.lastname2 = cursor.value.lastname2;
     students.push(student);//añadir al array estudiantes

    tBody.appendChild(createTRStudent(student, cursor.key));
    cursor.continue();


  }
}
};

function createTRStudent(student,key){
  var studentTR=document.createElement("tr");
  var studentTD1=document.createElement("td");
  studentTD1.appendChild(document.createTextNode(student.firstname));

  var studentTD2=document.createElement("td");
  studentTD2.appendChild(document.createTextNode(student.lastname1));

  var studentTD3=document.createElement("td");
  studentTD3.appendChild(document.createTextNode(student.lastname2));

  var studentTD4=document.createElement("td");
  studentTD4.appendChild(document.createTextNode(student.specialty));

  studentTR.appendChild(studentTD1);
  studentTR.appendChild(studentTD2);
  studentTR.appendChild(studentTD3);
  studentTR.appendChild(studentTD4);

studentTR.dataset.studentKey=key;//var que tenga ese key para asociar valores a etiquetas
studentTR.dataset.student=student;


//añadir eventos para cuando select una fila
studentTR.addEventListener("click",function (event){
  if ( selectedStudentTR){ //si tiene algo select le quite el atributo de select y no se seleccione
    selectedStudentTR.removeAttribute("class","selected");
  }//end if

  if(!selectedStudentTR || selectedStudentTR.dataset.studentKey !=event.currentTarget.dataset.studentKey) {// no hay ninguno select o esta select y el key es diferente a la fila select,cambio de fila
    //recoger datos de nueva fila
    event.currentTarget.setAttribute("class", "selected");
    fillStudentForm(event.currentTarget);//para que rellene el form con los datos de fila seleccionada
    selectedStudentTR=event.currentTarget;//la fila select nueva, la actual
  } else{ //limpiar form y botones de eliminar actualizar
    clearStudentForm();
    selectedStudentTR=null;
  }
});
  return studentTR;

}


//Se activa cuando se carga una BD con una versión mayor a la almacenada actualmente o no existen la BD
request.onupgradeneeded = function(event) {
	db = event.target.result;
  console.log("Event onupgradeneeded: " + db.name);

  try {
    // Create an objectStore with autoincrement key
    var studentsObjectStore = db.createObjectStore(DB_STORE_NAME, { autoIncrement : true });
    console.log ("Student Object Store has been created");

    // Create an index to search customers by specialty
    studentsObjectStore.createIndex("specialty", "specialty", { unique: false});
    console.log ("Index Specialty has been created");

    // Use transaction oncomplete to make sure the objectStore creation is
    // finished before adding data into it.
    studentsObjectStore.transaction.oncomplete = function(event) {
      // Store values in the newly created objectStore.
      var studentsObjectStore = db.transaction(DB_STORE_NAME, "readwrite").objectStore(DB_STORE_NAME);
      for (var i in studentsData) {
        studentsObjectStore.add(studentsData[i].getObject());
        console.log("Student add to object store: " + studentsData[i]);
      }
    }
  } catch (e) {
    console.log("Exception creating object store: " + e);
  }
};

// Create a onsubmit event listener for student_form
document.forms["student_form"].addEventListener("submit", function (event) {
  clearMessages();
  var transaction = db.transaction([DB_STORE_NAME], "readwrite");
  transaction.onerror = function(event) {

    onError("Error. No se ha creado el estudiante en la base de datos: " + event.target.error);
   // document.getElementById("error").appendChild(document.createTextNode("Error. No se ha creado el estudiante en la base de datos: " + event.target.error + "<br/>"));
  };

  var studentsObjectStore = transaction.objectStore(DB_STORE_NAME);
  var student = new Student(event.target.elements["firstname"].value,event.target.elements["lastname1"].value,event.target.elements["specialty"].value);
  student.lastname2 = event.target.elements["lastname2"].value;

  // I add the new Student to object store
  var request = studentsObjectStore.add(student.getObject());
  request.onsuccess = function(event) {
    document.getElementById("result").appendChild(document.createTextNode("Se ha creado el nuevo estudiante: " + student));
    console.log("Student add to object store: " + student + " with key " + event.target.result);

    //para que se recargue la tabla y pinte el nuevo student
    var tBody=document.getElementById("datagrid").getElementsByTagName("tbody")[0];//select la tabla
    //var newStudentTR= createTRStudent(student,event.target.result);
   // newStudentTR.setAttribute("class","selected"); //esta select el nuevo elemento
    tBody.appendChild( createTRStudent(student,event.target.result));//añadir a la tabla
  };

  // I cancel the submit event not to send the form.
  event.preventDefault();
});

///PARA ELIMINAR EL SELECT DE LA TABLA
document.getElementById("deleteStudentButton").onclick=function (event){
  clearMessages();
  //transaccion
  var transaction=db.transaction(DB_STORE_NAME,"readwrite");
  transaction.onerror = function(event) {
    onError("Error. No se ha creado el estudiante en la base de datos: " + event.target.error);
};
var studentsObjectStore=transaction.objectStore(DB_STORE_NAME);
var request= studentsObjectStore.delete(Number(selectedStudentTR.dataset.studentKey));//pasar la clave y elimina

  request.onsuccess = function (event){
  //tabla donde se pinta
  var tBody=document.getElementById("datagrid").getElementsByTagName("tbody")[0];//select la tabla
  tBody.removeChild(selectedStudentTR); //borrar el seleccionado de la tabla
  selectedStudentTR="";// limpiar el select

  clearStudentForm(); //limpia el formulario
  }
}


//MODIFICAR DATOS DEL SELECT
document.getElementById("updateStudentButton").onclick=function (event){
  clearMessages();
//transaccion
var transaction=db.transaction(DB_STORE_NAME,"readwrite");
transaction.onerror = function(event) {
  onError("Error. No se ha modificado el  estudiante en la base de datos: " + event.target.error);
};
var studentsObjectStore=transaction.objectStore(DB_STORE_NAME); //coger el objeto el almacen

//recoger nuevos valores desde el form
var studentForm=document.forms["student_form"];//recoger el form
var student= new Student(studentForm.elements["firstname"].value,
                        studentForm.elements["lastname1"].value,
                        studentForm.elements["specialty"].value);//acceder al form a los valores

student.lastname2= studentForm.elements["lastname2"].value;

//añadirlo es con
var request=studentsObjectStore.put(student.getObject(),Number(selectedStudentTR.dataset.studentKey));//select el key

request.onsuccess = function (event){
  //tabla donde se pinta
  var tBody=document.getElementById("datagrid").getElementsByTagName("tbody")[0];//select la tabla
///nuevo student
  var newStudentTR=createTRStudent(student,selectedStudentTR.dataset.studentKey);
  newStudentTR.setAttribute("class","selected");//se queda select
  tBody.replaceChild(newStudentTR,selectedStudentTR); //reemplazar el select por el newStudent
  selectedStudentTR=newStudentTR;// el select es el nuevo modificado
  }

}


  //LIMPIAR FORMULARIO
function fillStudentForm(studentTR){ //rellenar form con fila select actual
  var studentForm=document.forms["student_form"];//acceder form donde se mostrara
  var data=studentTR.getElementsByTagName("td");//se queda con las columnas/array de 4 la cabecera de tabla
  studentForm.elements["firstname"].value=data[0].innerHTML;
  studentForm.elements["lastname1"].value=data[1].innerHTML;
  studentForm.elements["lastname2"].value=data[2].innerHTML;
  studentForm.elements["specialty"].value=data[3].innerHTML;


  document.getElementById("addStudentForm").style.display="none";//ocultar el de añadir estudiante
  document.getElementById("alterStudentForm").style.display="block"; //aparecen los dos botones de actualizar y eliminar

}

function clearStudentForm(){ //limpiar form y botones
  var studentForm=document.forms["student_form"].reset();//limpiar form reset

  document.getElementById("addStudentForm").style.display="block";
  document.getElementById("alterStudentForm").style.display="none";
}

function onError(error){
  document.getElementById("error").appendChild(document.createTextNode(error));
  document.getElementById("error").appendChild(document.createElement("br"));
}

function   clearMessages(){
  document.getElementById("error").innerHTML="";//limpiar lo del error
  document.getElementById("result").innerHTML="";
}


