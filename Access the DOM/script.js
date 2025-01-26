// get element by tag
console.log(document.getElementsByTagName("h2"));
console.log(document.getElementsByTagName("h2").length);

//get element by id
console.log(document.getElementById("displayText"));

//get element by class
console.log(document.getElementsByClassName("container"));

//get element by query

console.log(document.querySelector(".container"));

//get element by querySelector all
console.log(document.querySelectorAll(".cls"));



const h1 = document.querySelector("h1");
h1.innerText = "Practice DOM Manipulation";

const button = document.getElementById("updateTextBtn");




button.innerText = "Click Me";


const color = document.querySelector("button");
color.style.color = "red";
color.style.background = "grey";
color.style.background = "grey";

const input = document.querySelector("input");
input.placeholder = "Hey BRo";


const BUTTON2 = document.getElementById("vicky");

     BUTTON2.style.background = "red";


     const newButton = document.createElement("h5");
     newButton.textContent = "HELLO world";
     newButton.style.color = "white";
     newButton.style.background = "green";


const body = document.body.appendChild(newButton);
     console.log(newButton);


const ul = document.querySelector('ul');
const newItem = document.createElement("li");
newItem.innerText = "I am a new Example";
ul.appendChild(newItem);
ul.insertBefore(newItem, ul.children[1]);