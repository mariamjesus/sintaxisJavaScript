function Persona(nombre,edad, genero){
  this.nombre= nombre||"";
  this.edad=edad ||"";
  this.genero=genero || "mujer";
   this.obDetalles=function(){
    return this.nombre+ " "+this.edad + " " +this.genero;
  }

  var per1=new Persona("maria","");
}//end

function Estudiante(){
  this.curso="";
  this.grupo="";
  this.registrar=function(){
    return this.curso;
  }

}//end
Estudiante.prototype=new Persona; //estudiante hereda de persona

function Profesor(){
  this.asignatura="";
  this.nivel="";
  this.asignar=function(){
    return;
  }
}//end
Profesor.prototype= new Persona; //profesor hereda de persona
