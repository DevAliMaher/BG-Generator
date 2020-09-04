let section = document.querySelector("section");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let selectedColor = document.querySelector("h3");


function gradientColors() {
    section.style.backgroundImage = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    
    selectedColor.textContent = section.style.backgroundImage  + ";";
} 
color1.addEventListener("input", gradientColors);
color2.addEventListener("input", gradientColors);
