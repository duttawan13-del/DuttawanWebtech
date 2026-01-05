const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");

let index = 0;

setInterval(() => {
  index++;

  if (index >= images.length) {
    index = 0;
  }

  slides.style.transform = `translateX(${-800 * index}px)`;
}, 2000); // เปลี่ยนรูปทุก 3 วินาที
