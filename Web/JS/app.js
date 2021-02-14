//============= Example 1 ================

/*
let rating = 9;

if (rating > 4) {
	console.log('Great!');
} else if (rating < 4) {
	console.log('Not bad');
}
*/

//============= Example 2 ================

/*
let value = 4;
if (value === 3) {
	console.log('true');
} else {
	console.log('false');
}
*/

//============= Example 3 ================

/*
let num = 53;
if (num % 2 != 0) {
	console.log('ODD Number!');
} else {
	console.log('Even Number!');
}
*/

//============= Example 4 ================

/*
let highScore = 52333,
	userScore = 2455;

if (userScore >= highScore) {
	console.log(`Congrats, You have the new highscore ${userScore}`);
	highScore = userScore;
} else {
	console.log(
		`Good game, but your score of ${userScore} haven't beat the current highscore of ${highScore}.`
	);
}
*/

//============= Example 5 ================

/*
let password = prompt('Input password');

if (password.length >= 8) {
	if (password.indexOf(' ') === -1) {
		console.log('Successful!');
	} else {
		console.log('Space is not allowed');
	}
} else {
	console.log('Short password!');
}
*/

//============= Example 6 ================

/*
let password = prompt('Input Password');

if (password.length >= 8 && password.indexOf(' ') === -1) {
	console.log('Valid Password!');
} else {
	console.log('Invalid Password');
}
*/

//============= Example 7 ================

/*
let num = prompt('Input number b/n 1 and 10');

if (num >= 1 && num <= 10) {
	console.log('Correct!!!');
} else {
	console.log('plz input num b/n 1 and 10');
}
*/

//============= Example 8 ================

/*
let age = prompt('inpute ur age');

if (age < 6 || age >= 60) {
	console.log('Welcome! u dont pay any fee');
} else {
	console.log('cough 10$, nigga');
}
*/

//============= Example 9 ================

/*
let flavor = 'grape';

if (flavor !== 'grape' && flavor !== 'cherry') {
	console.log('We dont have that flavor!');
}

if (!(flavor === 'grape' || flavor === 'cherry')) {
	console.log(`We don't have that flavor!`);
}
*/

//============= Example 10 ================
//switch

/*
let day = prompt('Input Day of the week');
// let day = 4;
switch (day) {
	case 1:
		console.log('Monday');
		break;
	case 2:
		console.log('Tuesday');
		break;
	case 3:
		console.log('Wednesday');
		break;
	case 4:
		console.log('Thursday');
		break;
	case 5:
		console.log('Friday');
		break;
	case 6:
		console.log('Saturday');
		break;
	case 7:
		console.log('Sunday');
		break;
	default:
		console.log('Invalid Date');
}
*/

//============= Example 11 ================
//ternary operator

/*
let status = 'offline',
color;

color = status === 'offline' ? console.log('red') : console.log('green');
color = status === 'offline' ? 'red' : 'green';

let num = 5;
num === 7 ? console.log('lucky') : console.log('Idiot');
*/
