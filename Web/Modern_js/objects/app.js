let val;

/*
let user = {
  name: "challa",
  age: 39,
  email: "challa@gmail.com",
  location: "denver",
  blogs: ["blog1", "blog2"],
};

console.log(user);
console.log(user.name);

user.age = 50;
console.log(user);

console.log(0xff); // 255
console.log(0b10101);
console.log(0o377);
console.log(2.4e-3);
console.log(2e307); // 2 * 10^307
console.log(2e308); // Infinity
console.log(2e-324); // 0
console.log(2e308); // Infinity
console.log(0 / 0); // nannan
console.log(9 / Infinity); // 0
console.log(Infinity / Infinity); // NaN
Number.MAX_VALUE * 2; // Infinity
Number.NaN; // NaN
Number.isNaN("hi"); // false
NaN === NaN; // false
// BigInt
console.log(1234n); // 1234n
console.log(0b111111n); // 63n
console.log(10 / 3);
console.log(10n / 3n);

let st = "1" + "0".repeat(10);
console.log(st);

console.log(2.4 * 2n);

let euro = "€";
let love = "😄";
euro.length;
love.length;

// tagged template literals
function capitalize(strings, name) {
  return strings[0] + name.toUpperCase() + strings[1];
}
const names = "alice";
const result = capitalize`Hello ${names}!`;

console.log(result);

const numbers = [11, 45, 68, 96, 38, 92, 65, 100];
const numbers2 = [20, 14];
const fruits = ["banana", "apple", "orange", "grape"];

// numbers.reverse();
// numbers.concat(numbers2);

val = fruits.sort();
val = numbers.sort((x, y) => {
  return x - y; // to reverse y-x
});

// console.log(numbers);
console.log(val);

// objects
const person = {
  firstName: "challa",
  lastName: "ayala",
  age: 40,
  email: "abe@gmail.com",
  hobbies: ["music", "running"],
  address: {
    city: "awasa",
    state: "debub",
  },
  getBirthYear: function () {
    return 2026 - this.age;
  },
};

val = person.firstName;
val = person.hobbies[1];
val = person.address.state;
val = person.getBirthYear();

console.log(val);

// Date
const today = new Date();

val = today.getDate();
val = today.getMonth();
val = today.getFullYear();

console.log(val);

// function
const greet = function (firstName, lastName) {
  return ` hello ${firstName} ${lastName}`;
};

console.log(greet("challa", "beshadu"));

// Immidiately invokable function expression (IIFE's)

(function (name) {
  console.log(`hello ${name}`);
})("abebe");

// do while
let i = 10;
do {
  console.log(`number ${i}`);
  i++;
} while (i < 10);

// foreach
let cars = ["toyota", "ford", "bmw", "chevy"];

cars.forEach(function (car) {
  console.log(car);
});

// Map
const users = [
  {
    id: 1,
    name: "challa",
    id: 2,
    name: "aster",
    id: 3,
    name: "beshadu",
    id: 4,
    name: "abebe",
  },
];

const ids = users.map(function (user) {
  return user.id;
});

console.log(ids);

// For in
const user = {
  firstName: "challa",
  lastName: "abebe",
  age: 38,
};
for (let x in user) {
  console.log(`${x}: ${user[x]}`);
}

// window
//location
val = window.location;
val = window.location.port;
val = window.navigator;
console.log(val);

let text = "testing: 1, 2, 3";
let pattern = /\d+/g;
pattern.test(text);
text.search(pattern);
text.match(pat11tern);
text.replace(pattern, "#");
text.split(/\D+/);
console.log(typeof undefined);

let myString = "developer";
let myNewString = myString.charAt(0).toUpperCase() + myString.slice(1);
console.log(myNewString);

let x = Math.floor(Math.random() * 100 + 1);
let y = Math.floor(Math.random() * 50 + 1);

console.log(x * y);

let z = ["hello", "abebe", "challa", "beshadu"];
console.log(z.slice(1, 3));
console.log(z.splice(1, 3));
console.log(z);

let x = [44, 14, 64, 75, 84, 36];
x.splice(2, 0, 100, 200);
let y = ["abebe", "challa", "aster", "ayele"];
y.splice(1, 1, "beshadu");
console.log(x);
console.log(y);

const myObj = {
  data: [1, 2, 3],
  [Symbol.iterator]() {
    let i = 0;
    return {
      next: () => ({
        value: this.data[i],
        done: i++ >= this.data.length,
      }),
    };
  },
};

for (let val of myObj) {
  console.log(val);
}

const a = Symbol("test");
const b = Symbol("test");

a.toString();
console.log(a === b); // false

let s = Symbol.for("shared");
let t = Symbol.for("shared");

s === t; // => true
s.toString(); // => "Symbol(shared)"
Symbol.keyFor(t); // => "shared"
console.log(globalThis);

let s = new String("hello");
let a = "running";
a[2] = "v";

let o = { x: 1 };
let p = { x: 1 };
o === p;
let a = [];
let b = [];
a === b;

let x = ["a", "b", "c"];
let z = x;
z[0] = 1;
x[0];
x === z;

let c = ["a", "b", "c"];
let d = [];
for (let i = 0; i < c.length; i++) {
  d[i] = c[i];
}
let e = Array.from(c);
console.log(d);
console.log(e);

let x;
let n = 18;
x = "0b" + n.toString(2); // "0b10010"
x = "0x" + n.toString(8); // "0x22"
x = "0o" + n.toString(16); // "0o12"

for (let i = 0; i < 10; i++) {
  console.log(`Number ${i}\n`);

  for (let j = 0; j < 5; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

let j = 1;

while (j < 100) {
  if (j % 15 === 0) {
    console.log("FizzBuzz");
  } else if (j % 3 === 0) {
    console.log("Fizz");
  } else if (j % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(j);
  }

  j++;
}

let str = "abebe beso bela";

for (let i in str) {
  console.log(str[i]);
}

const socials = ["Twitter", "LinkedIn", "Facebook", "Instagram", "Telegram"];

for(let social in socials){
console.log(socials[social])
}

socials.forEach((item) => {
  console.log(item);
});
*/

function sum(...numbers) {
  let total = 0;

  for (let i of numbers) {
    total += i;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5));

function sums(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sums(3, 2, 4, 7));

function getRandom(...arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];
  console.log(item);
}

getRandom(1, 2, 4, 5, 6);
