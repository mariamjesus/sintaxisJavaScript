"use strict";

function BaseException(errorcode) {
	if (!(this instanceof BaseException)) throw new Error("This is a constructor for BaseException");
	this.errorcode = parseInt(errorcode) || 0;
	switch (this.errorcode){
		case 0:  this.name = "Unknow error";
			break;
		default: this.name = "Unknow error";
	}
}

BaseException.prototype = new Error();
BaseException.prototype.constructor = BaseException;
BaseException.prototype.toString = function(){
  // note that name and message are properties of Error
  return this.name + ": " + this.message;
};

function StudentException(errorcode, extra) {
	if (!(this instanceof StudentException)) throw new Error("This is a constructor for StudentException");
	BaseException.call(this, errorcode);
	switch (this.errorcode){
		case 0:  this.name = "The firstname, lastname and specialty are requiered";
		break;		
		case 1:  this.name = "The firstname cant be empty";
		break;
		case 2:  this.name = "The lastname cant be empty";
		break;
		case 3:  this.name = "The specialty cant be " + extra;
		break;		
		default: this.name = "Unknown error";
	}
}
StudentException.prototype = new BaseException();
StudentException.prototype.constructor = StudentException;

function Student(vFirstname, vLastname, vSpecialty){
	if (!(this instanceof Student)) throw new Error("This is a constructor for Student");
	if (!vFirstname || !vLastname || !vSpecialty) throw new StudentException(0);
	var firstname;
	var lastname1;
	var lastname2;
	var specialty;		
	
	Object.defineProperty(this, 'firstname', {
		get: function() {
			//console.log('get! ' + firstname);
			return firstname;
		},
		set: function(value) {	
			if (!value) throw new StudentException(1);
			firstname = value.trim();
			//console.log('set! ' + firstname);
		}
	});

	Object.defineProperty(this, 'lastname1', {
		get: function() {
			//console.log('get! ' + lastname1);
			return lastname1;
		},
		set: function(value) {	
			if (!value) throw new StudentException(2);
			lastname1 = value.trim();
			//console.log('set! ' + lastname1);
		}
	});

	Object.defineProperty(this, 'lastname2', {
		get: function() {
			//console.log('get! ' + lastname2);
			return lastname2;
		},
		set: function(value) {	
			if (value) {
				lastname2 = value.trim();
				//console.log('set! ' + lastname2);				
			}
		}
	});

	Object.defineProperty(this, 'specialty', {
		get: function() {
			//console.log('get! ' + specialty);
			return specialty;
		},
		set: function(value) {	
			if (value) value = value.trim().toUpperCase();
			if (value !== 'ASIR' && value !== 'DAM' && value !== 'DAW') throw new StudentException(3, value);
			specialty = value;
			//console.log('set! ' + specialty);
		}
	});	

	this.firstname = vFirstname;
	this.lastname1 = vLastname;
	this.specialty = vSpecialty;
}
Student.prototype.constructor = Student;

Student.prototype.toString = function(){
	var str = this.firstname + " " + this.lastname1;
	if (this.lastname2){
		str += " " + this.lastname2;
	} 
	if (this.specialty){
		str += " (" + this.specialty + ")";
	} 	
	return str;
}

Student.prototype.getObject = function(){
	return {
		firstname: this.firstname,
		lastname1: this.lastname1,
		lastname2: this.lastname2,
		specialty: this.specialty
	};
}


