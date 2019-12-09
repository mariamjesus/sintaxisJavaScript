function Animal(){
  var patas=4;
  var peso=15;
  Object.defineProperties(this,"patas", {
    //metodos get y set propiedad patas
   get: function() {return patas; },
   set: function(x){patas=x + 2; },
  });

  Object.defineProperties(this,peso,{
   get: function() {return this.peso; },
   set: function(x){this.peso=x;}
  });
  /*Object.defineProperty(this, dormir,{
    dormir: {get:function(){return this.dormir+1;}}
  });*/
}//end animal


function Mamifero(){
  Animal.call(this.Mamifero);// para heredar
  var colorPelo="rojo";
  Object.defineProperties(this,'colorPelo',{
    get: function() {return this.colorPelo; },
    set: function(x){this.colorPelo=x; }
  });
  Object.defineProperties(this,sangreCaliente,{

  get: function() {return this.sangreCaliente;} ,
  set: function(x){this.sangreCaliente=x;}
  });
  Object.defineProperty(this, comer,{
    comer: {get:function(){return this.comer+1;}}
  });
}//end manifero

function Felino(){
  Mamifero.call(this.Felino); //heredar
  Object.defineProperties(this,garras,{
    getGarras: {get: function() {return this.garras;} },
    setGarras: {set: function(x){this.garras=x;} }
  });

  Object.defineProperties(this,cuerpoEsbelto,{
    getCuerpoEsbelto: {get: function() {return this.cuerpoEsbelto;} },
    setCuerpoEsbelto: {set: function(x){this.cuerpoEsbelto=x;} },
  });

  Object.defineProperty(this, hacerRuido,{
    hacerRuido: {get:function(){return this.hacerRuido+1;}}
  });
}//end felino


function Canino(){
  Mamifero.call(this.Canino);
  Object.defineProperties(this.hocicoLargo,{
    getHocicoLargo: {get: function() {return this.hocicoLargo;} },
    setHocicoLargo: {set: function(x){this.hocicoLargo=x;} }
  });
  Object.defineProperties(this,olfatoAgudo,{
    getOlfatoAgudo: {get: function() {return this.olfatoAgudo;} },
    setOlfatoAgudo: {set: function(x){this.olfatoAgudo=x;} }
  });
  Object.defineProperty(this,vacunar,{
    vacunar:{get:function(){return this.vacunar+5}}
  });
}//end canino




function tester(){
//crearnos nuevos objetos
var ani1=new Animal();
console.log(ani1.patas);
 document.getElementById('result').innerHTML=ani1.patas;

}//end function
