var iniciales=[100,"Europa",3,"Asia",-5,"America",23,"Africa",32,"Oceania",14,2];
//var resultado= document.getElementById("resultado").value;
function ordenar(iniciales){

var num=new Array();//donde guardo los numeros
var string=new Array();//donde guardo los numeros
var cont=0;
for (var i=0;i<iniciales.length;i++){
  if(iniciales[i]==typeof("number")){ //comparo para saber si es namber
    num[cont]=iniciales[i];
    cont++;
  } else if (iniciales[i]==typeof("string")) { //comparo para saber si es string
    string[cont]=iniciales[i];
    cont++;

  }//end if
}//end for

num=num.sort(function(a, b){return a-b});
string=string.sort();

var final=num.concat(string);
document.write(final);
}//end ordenar

ordenar();
