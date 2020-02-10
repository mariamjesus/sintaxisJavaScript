function Employee(name,dept){
    this.name=name || "";
    this.dept=dept || "general";
    this.toString=function(){
      return this.name + this.dept;
    }
}//end employee

function Manager(){
    this.reports=[];
    this.toString=function(){
      return Employee.prototype.toString(this.reports);
    }
}//end manager
Manager.prototype=new Employee; //que hereda de employee

function WorkBee(){
    this.proyects=[];
    this.toString=function(){
      return  this.proyects;
    }
}//end workBee
WorkBee.prototype=new Employee;// hereda de employee

function SalesPerson(){
    this.dept="sales";
    this.quota=100;
    this.toString=function(){
      return Employee.prototype.toString;
    }
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

