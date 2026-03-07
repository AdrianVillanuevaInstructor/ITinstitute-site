let slides = document.querySelectorAll(".slide");
let index = 0;

function mostrarSlide(n){

slides.forEach(slide=>{
slide.classList.remove("activo");
});

slides[n].classList.add("activo");

}

document.querySelector(".next").onclick = function(){

index++;

if(index >= slides.length){
index = 0;
}

mostrarSlide(index);

}

document.querySelector(".prev").onclick = function(){

index--;

if(index < 0){
index = slides.length -1;
}

mostrarSlide(index);

}