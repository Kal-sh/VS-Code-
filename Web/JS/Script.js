/*
 var userName1 = prompt("what is ur First Name?");
 var userName2 = prompt("what is ur Last Name?");
 var userAge = prompt("How old are you?");
 alert("nice to meet u, " + userName1 +" "+ userName2);
 alert("you are " + userAge + " Years old.");
 console.log("nice to meet u, " + userName1 +" "+ userName2);
 console.log("you are " + userAge + " Years old.");
 console.log(typeof userName1);
 
 */

/**
 
  //*Basic operators
  var year, yearJohn, yearMark;
  year = 2020;
  ageJohn = 34;
  ageMark = 23;
  
  //*Maths Operators
  yearJohn = year - ageJohn;
  yearMark = year - ageMark;
  
  console.log(yearJohn);
  console.log(yearMark);
  
  console.log(year + 2);
  console.log(year - 2);
  console.log(year * 2);
  console.log(year / 2);
  
  //*Logical Operators
  var johnOlder = ageJohn > ageMark;
 console.log(johnOlder); 
 
 
 //*Operation precedence
 
 let now = 2021;
 let yearJohn = 1998;
 let fulAge = 4;
 2;
 
 let isFullAge = now - yearJohn >= fulAge;
 console.log(isFullAge);
 
 //*Exercise
 let markBMI, markHeight, markWeight;
 let johnBMI, johnHeight, johnWeight;
 let BMI = markBMI < johnBMI;
 
 markHeight = 1.65;
 markWeight = 65;
 johnHeight = 1.76;
 johnWeight = 70;
 
 markBMI = markWeight / (markHeight * markHeight);
 johnBMI = johnWeight / (johnHeight * johnHeight);
 
 console.log(markBMI, johnBMI);
 
 console.log(`Is Mark's BMI higher than John's? ${BMI}`);
 
 
 //* If else
 
 let firstName = 'john';
 let civilStatus = 'single';
 
 if (civilStatus === 'married') {
 	console.log(`${firstName} is married!`);
} else {
	console.log(`${firstName} is single!`);
}


//*Switch

let job;

 switch (job) {
	 case 'teacher':
 		console.log(`teaches kids`);
 		break;
		 case 'driver':
 		console.log(`drive niggas`);
 		break;
		 case 'chef':
			 console.log(`cooks food`);
			 break;
 	default:
 		console.log(`student`);
 	}
 				
 //*Ternary operator
 
 let age = 13;
 
 let person = age <= 18 ? 'teen' : 'Adult';
 console.log(person);
 
 
 //*Exercise
 
 let johnAVG = (89 + 120 + 103) / 3;
 let mikeAVG = (116 + 94 + 123) / 3;
 
 let AVG =
 johnAVG >= mikeAVG
 ? `john is the winner by ${johnAVG} to ${mikeAVG} points`
 : `Mike is the winner by ${mikeAVG} to ${johnAVG} points`;
 console.log(AVG);
 
 
 //*function
 
 function person(name) {
	 console.log(`hello ${name}, Welcome back!`);
	}
	
	person('Abel');
	
	
	function agee(birthYear) {
	return 2021 - birthYear;
 }

 console.log(agee(1998));

 function yrsTillRetire(year, firstName) {
 	let age = agee(year);
 	let retirement = 65 - age;
 	if (retirement > 0) {
 		console.log(`${firstName} is Good to work till ${retirement} years.`);
 	} else {
 		console.log(`${firstName} already retired`);
 	}
 }
 yrsTillRetire(1870, 'mike');
 
 
 //*Function expression

 let whatDoYouDo = function (job, firstName) {
	switch (job) {
		case 'teacher':
			return `${firstName} teaches kids`;
		case 'driver':
			return `${firstName} takes niggas places`;
		case 'chef':
			return `${firstName} cooks food`;
		default:
			return `student`;
		}
	};

	console.log(whatDoYouDo('retired', 'mark'));
	console.log(whatDoYouDo('teacher', 'john'));
	console.log(whatDoYouDo('chef', 'jane'));
	
	
 //*Arrays

 let names = ['hohn', 'gyf', 'belal'];
 let years = new Array(1414, 4253, 6321);
 
 // console.log(names[2]);
 console.log(names.length);
 
 //*mutate arrays data
 names[1] = 'ben';
 names[names.length] = 'marry';
 console.log(names);

 //*Different data types
 
 john = ['yolo', 6133, 'teacher', 'smith', false];
 
 john.push('blue'); //add to last element
 john.unshift('mr'); //add to 1st element
 john.pop(); //remove the last element
 john.shift(); //remove the 1st element
 console.log(john.indexOf('teacher')); //position of an Array
 console.log(john);
 
 
 //*Exercise

 function tipCalculator(bill) {
 	let percentage;
 	if (bill < 50) {
 		percentage = 0.2;
 	} else if (bill >= 50 && bill < 200) {
 		percentage = 0.15;
 	} else {
 		percentage = 0.1;
 	}
 	return percentage * bill;
 }
 
 // console.log(tipCalculator(100));
 let bills = [124, 48, 268];
 let tips = [
 	tipCalculator(bills[0]),
 	tipCalculator(bills[1]),
 	tipCalculator(bills[2]),
 ];
 console.log(tips);

 
 //*Object literal

 let person = {
	firstName: 'abebe',
	lastName: 'challa',
	birthday: 1998,
	family: ['jane', 'abebech'],
	job: 'teacher',
	isMarried: false,
 };
 person.lastName = 'mola';
 let x = 'birthday';
 console.log(person[x]);
 console.log(person);

 //*Object syntax
 let names = new Object();
 names.name = 'abebe';
 console.log(names.name);

 
 let person = {
	firstName: 'abebe',
	lastName: 'challa',
	birthDay: 1998,
	calcAge: function () {
		this.age = 2021 - this.birthDay;
	},
 };
 person.calcAge();
 console.log(person);
 
 
 //*Exercise

 let john = {
	firstName: 'john',
	mass: 65,
	height: 1.67,
	johnBMI: function () {
		this.BMI = this.mass / (this.height * this.height);
		return this.BMI;
	},
 };
 let mark = {
 	firstName: 'mark',
 	mass: 70,
 	height: 1.75,
 	markBMI: function () {
 		this.BMI = this.mass / (this.height * this.height);
 		return this.BMI;
 	},
 };
 john.johnBMI();
 mark.markBMI();
 console.log(john, mark);
 
 if (john.BMI > mark.BMI) {
 	console.log(`${john.firstName} has the higher BMI of ${john.BMI}`);
 } else i(john.BMI < mark.BMI){
 	console.log(`${mark.firstName} has the higher BMI of ${mark.BMI}`);
 }else{
	console.log(`They are the same.`)
 }

*/
