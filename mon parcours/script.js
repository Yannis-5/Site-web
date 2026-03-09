function reveal(){

let reveals = document.querySelectorAll(".section");

for(let i=0;i<reveals.length;i++){

let windowHeight = window.innerHeight;
let elementTop = reveals[i].getBoundingClientRect().top;
let elementVisible = 100;

if(elementTop < windowHeight - elementVisible){

reveals[i].classList.add("active");

}

}

}

window.addEventListener("scroll", reveal);



let bars = document.querySelectorAll(".bar span");

bars.forEach(bar => {

let width = bar.getAttribute("data-width");

setTimeout(() => {

bar.style.width = width;

},500);

});