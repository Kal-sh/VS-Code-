let age = 25;
let year = 2026;

console.log(age, year);

age = 69;
console.log(age);

const points = 100;
console.log(points);

let firstName = "abebe";
console.log(firstName.toUpperCase());

let email = "abc@gmail.com";
console.log(email.indexOf("@"));
console.log(email.lastIndexOf("g"));
console.log(email.slice(0, 3));
console.log(email.substr(2, 6));
console.log(email.replace("a", "m"));

let results = `${firstName} is ${age} years old.`;
console.log(results);

let name = ["abebe", "challa", "tolosa"];
console.log(name.join(","));

console.log("john" - 2);

let results = name.concat(["helen", "aster"]);
console.log(results);

console.log(name.push("aster"));
console.log(name);
console.log(name.pop());

console.log("" == false);
