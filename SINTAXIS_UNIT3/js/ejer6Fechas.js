function getSundays(){
 var d;
 for(let year=2014; year <=2050; year++){
  d=new Date(year, 0, 1);
    if(d.getDay() === 0){
      document.write("el 1 de enero es domingo en:"+ year +"</br>");
    }//end if
 }//end for



}
 getSundays();
