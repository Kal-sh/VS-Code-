// deno-lint-ignore-file prefer-const
/*
let age = 25;
let year = 2026;

console.log(age, year);

age = 69;
console.log(age);

const points = 100;
console.log(points);

let firstName = 'abebe';
console.log(firstName.toUpperCase());

let email = 'abc@gmail.com';
console.log(email.indexOf('@'));
console.log(email.lastIndexOf('g'));
console.log(email.slice(0, 3));
console.log(email.substr(2, 6));
console.log(email.replace('a', 'm'));

let how_old = `${firstName} is ${age} years old.`;
console.log(how_old);

let name = ['abebe', 'challa', 'tolosa'];
console.log(name.join(','));

console.log('john' - 2);

let results = name.concat(['helen', 'aster']);
console.log(results);

console.log(name.push('aster'));
console.log(name);
console.log(name.pop());
console.log(email.includes('@'));
console.log(email.includes('mola'));
console.log('challa' > 'Challa');
console.log('challa' < 'Challa');

console.log('false' == false);
let empty = [];
console.log(empty == 0);

for (let i = 0; i < name.length; i++) {
  let html = `<div>${name[i]}</div>`;
  console.log(html);
}

// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }
let i = 7;
do {
  console.log('loop is', i);
  i++;
} while (i < 5);
i = 0;
if (i > 5) {
  console.log('if loop works');
} else if (i > 10) {
  console.log('looping');
} else {
  console.log('last loop');
} 
let floors = Math.floor(Math.random() * 100) + 1; // random int between 1-100
for (let i = 5; i <= floors; i += 5) {
  console.log(floors, i);
}
const password = 'p@ss';
if (password >= 8 || password.includes('@')) {
  console.log('strong password');
} else {
  console.log('weak password');
}
const score = [20, 25, 75, 34, 87, 0, 93, 100, 25, 75];
for (let i = 0; i < score.length; i++) {
  if (score[i] === 0) {
    continue;
  }
  console.log(score[i]);
  if (score[i] === 100) {
    console.log('best score');
    break;
  }
}
*/
let grade = "A";
switch (grade) {
  case "A":
    console.log("the best");
    break;
  case "B":
    console.log("2nd best");
    break;
  default:
    console.log("damn");
    break;
}
