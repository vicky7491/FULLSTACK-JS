const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');

one.addEventListener('click', ()=> {
one.classList.toggle("red");
});
two.addEventListener('dblclick', ()=> {
two.classList.toggle("green");
});
three.addEventListener('contextmenu', ()=> {
three.classList.toggle("yellow");
});
four.addEventListener('mouseenter', ()=> {
four.classList.toggle("yellow");
});

const input = document.querySelector("input");
input.addEventListener("Keyup",()=>{
console.log("stop pressing me");

})