const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const caption = document.getElementById("caption");
const close = document.querySelector(".close");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const images = Array.from(document.querySelectorAll(".small-img, .team-img"));

let currentIndex = 0;

function showImage(index) {
  if (index < 0) index = images.length - 1;
  if (index >= images.length) index = 0;
  currentIndex = index;
  lightboxImg.src = images[currentIndex].src;
  caption.textContent = images[currentIndex].alt || "";
  lightbox.style.display = "flex";
}


images.forEach((img, index) => {
  img.addEventListener("click", () => {
    showImage(index);
  });
});


prev.addEventListener("click", (e) => {
  e.stopPropagation();
  showImage(currentIndex - 1);
});

next.addEventListener("click", (e) => {
  e.stopPropagation();
  showImage(currentIndex + 1);
});


close.addEventListener("click", () => {
  lightbox.style.display = "none";
});


lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});


document.addEventListener("keydown", (e) => {
  if (lightbox.style.display === "flex") {
    if (e.key === "ArrowLeft") showImage(currentIndex - 1);
    if (e.key === "ArrowRight") showImage(currentIndex + 1);
    if (e.key === "Escape") lightbox.style.display = "none";
  }
});
