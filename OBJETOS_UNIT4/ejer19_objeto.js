function Employee(){
    this.name="asdfdsf";
    this.dept="general";
    var datos=this.name + this.dept;
    console.log(datos);
}//end employee

function Manager(){
    this.reports=[];
    var datos=this.proyects;
    console.log(datos);
}//end manager
Manager.prototype=new Employee; //que hereda de employee

function WorkBee(){
    this.proyects=["h"];
}//end workBee
WorkBee.prototype=new Employee;// hereda de employee

function SalesPerson(){
    this.dept="sales";
    this.quota=100;
}//end SalesPerson
SalesPerson.prototype=new WorkBee;

function Engineer(){
    this.machine="";
    this.dept="engineering";
}//end engineer
Engineer.prototype=new WorkBee;


function imprimir(){
    var sales1=new SalesPerson();//creo instancia de un objeto
    console.log("salesPerson tiene: "+sales1.dept +" " + sales1.quota+ " "+ sales1.proyects +" "+ sales1.name);

    var engineer1=new Engineer();
    console.log("Engineer tiene: " +engineer1.dept+" " + engineer1.proyects+" "+engineer1.name);
}//end

