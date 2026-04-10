let index = 0;
let slides = document.getElementsByClassName("slide");

function showSlide(i){
for(let s of slides){
    s.classList.remove("active");
}
slides[i].classList.add("active");
}

function nextSlide(){
index = (index + 1) % slides.length;
showSlide(index);
}

function prevSlide(){
index = (index - 1 + slides.length) % slides.length;
showSlide(index);
}

function welcomeMsg(){
alert("Welcome to the Jurassic Portfolio 🦖🔥");
}
