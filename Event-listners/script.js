// Bad way
const mybtn = document.querySelector('.myButton');
mybtn.onmousemove = function(){ 
    console.log('Button was clicked');
    
}


//great way

const BEST = document.querySelector('.yourButton'); 
BEST.addEventListener("click", function(){
    console.log("HELLO JI");    
})