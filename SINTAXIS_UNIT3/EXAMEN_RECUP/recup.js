function validar(){

   var errorValidar=document.getElementById("errorValidar");
   var ingreso= document.getElementById("ingresos").value;

   //VALIDAR DNI EXPRE REGULAR
  var dni = document.getElementById("dni").value;
  var ExpRegDni=/\d{8}\w{1}/;
  var dniv=ExpRegDni.test(dni);
    if(dniv === true){
      //VALIDAR EL ESTADO CIVIL
    var estadoCivil = document.getElementById("estadoCivil").value;
    estadoCivil =  estadoCivil.toLowerCase(); //paso a minusculas el valor

      if (estadoCivil=="casado" || estadoCivil=="soltero" || estadoCivil=="divorciado" || estadoCivil=="viudo"){
        guardarvalores(dni,estadoCivil,ingreso);
       } else{
        errorValidar.style.color="red";
          errorValidar.innerHTML="ERROR";
       }//end if validar estadocivil

    }else{
      errorValidar.style.color="red";
      errorValidar.innerHTML="ERROR";
    }//end if
    return dni,estadoCivil,ingreso;
  }//end function validar


  function guardarvalores(dni,estadoCivil,ingreso){
var usuArray=new Array();

if(usuArray.length==0){ //si es array no tiene datos todavia
  usuArray[0]=new Array(3);
  usuArray[0][0]=dni;
  usuArray[0][1]=estadoCivil;
  usuArray[0][2]=ingreso;

  console.log(usuArray[0][0]);
  console.log(usuArray[0][1]);
  console.log(usuArray[0][2]);

} else{

  for(i=0;i<usuArray.length;i++){
    usuArray[i]=new Array(3);//creo array dibimensional para las cartas, 2
    for(j=0;j<usuArray[i].length;j++){
      usuArray[i][0].push(dni);
      usuArray[i][1].push(estadoCivil);
      usuArray[i][2].push(ingreso);
    }//end for j para valores usu
}//end for i para jugadores
console.log(usuArray[0][0]);
console.log(usuArray[0][1]);
console.log(usuArray[0][2]);

console.log(usuArray[1][0]);
console.log(usuArray[1][1]);
console.log(usuArray[1][2]);
}//end if


}//end function guardarvalores
