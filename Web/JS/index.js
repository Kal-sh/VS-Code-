//*********** object ************//
/** 
let person = {
	name: 'kal',
	age: 23,
};

//* Dot notation
person.name = 'cherinet';
person.age = 55;

//* Bracket notation
person['name'] = 'merry';

let select = 'name';
person[select] = 'challa';
console.log(person);
*/

//************ Array ************//
/** 
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';

console.log(selectedColors[2]);
*/

//********* Functions ***********//
/** 
function greet(name, lastName) {
	console.log(`hello ${(name, lastName)}`);
}

greet('challa', 'haylu');

function square(number) {
	return number * number;
}

console.log(square(2));

let x = 400;
let y = x >= 788 ? 'green' : 'red';
console.log(y);


//* Exercise 

 let a = 'red';
 let b = 'blue';
 let c = a;
 a = b;
 b = c;
 
 console.log(a);
 console.log(b);
 
 let hr = 10;
 let y = hr >= 6 && hr <= 12 ? 'Good Morning' : 'Good Night';
 console.log(y);
 */

//************ if else ************/

/*
 let hour = 20;
 if (hour >= 6 && hour <= 12) {
	 console.log('good Morning');
	} else if (hour >= 13 && hour <= 18) {
		console.log('Good Night');
	} else {
		console.log('Good Evening');
	}
*/

//********* switch **************/

/** 
 
 let role = 'moderator';
 
 switch (role) {
	case 'Guest':
		console.log('Guest User');
		break;
		 
	case 'moderator':
		console.log('Moderator User');
	 	break;
	default:
		console.log('Unknown User');
	}
				
*/

//********* for loop **********/

/** 
 
 for (i = 0; i <= 5; i++) {
	 // console.log('Hello World', i);
	 if (i % 2 !== 0) console.log(i);
	}
*/

//******* while loop **********/

/**
 
 let i = 0;
 while (i <= 5) {
	 if (i % 2 !== 0) console.log(i);
	 i++;
	}
*/

//********* Do while loop *********/

/**
 
 i = 0;
 do {
	 if (i % 2 !== 0) console.log(i);
	 i++;
	} while (i <= 5);
*/

//*********** forin ************/

/**
 
 const colors = ['red', 'blue', 'green'];
 
 for (let index in colors) console.log(index, colors[index]);
 */

//*********** forof *************/

/** 
 
 const colors = ['red', 'blue', 'green'];
 
 for (let pp of colors) console.log(pp);
*/
