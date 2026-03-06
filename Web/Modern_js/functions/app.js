const ul = document.querySelector('.people');

const names = ['Liam', 'Ava', 'Noah', 'Sophia', 'Ethan', 'Maya'];

let html = ``;

names.forEach((person) => {
  html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;
