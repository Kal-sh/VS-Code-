const ul = document.querySelector(".people");

const names = ["Liam", "Ava", "Noah", "Sophia", "Ethan", "Maya"];

let html = ``;

names.forEach((person) => {
  html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;

const greeting = function (name) {
  console.log(`hello ${name}`);
};

greeting("challa"); // hello challa

const calcArea = function (radius) {
  return 3.14 * radius ** 2;
};

let area = calcArea(5);
console.log(area);

const bill = (product, tax) => {
  let total = 0;
  for (let i = 0; i < product.length; i++) {
    total += product[i] + product[i] * tax;
  }
  return total;
};

console.log(bill([10, 15, 30], 0.2));

const myFunc = (callBackFunc) => {
  let value = 50;
  callBackFunc(value);
};

myFunc(function (value) {
  console.log(value + 2);
});

const numbers = [1, 2, 3];

numbers.forEach((num) => {
  console.log(num * 2);
});

function calculate(a, b, operation) {
  return operation(a, b);
}

const result = calculate(5, 3, (x, y) => x + y);
console.log(result);

const names = ["Liam", "Ava", "Noah", "Sophia", "Ethan", "Maya"];

const ppl = (person, index) => {
  console.log(`${index} hello ${person}`);
};

names.forEach(ppl);
