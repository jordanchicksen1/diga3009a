
document.addEventListener("DOMContentLoaded", () => {
  gsap.from("h1", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  gsap.from(".outer-text", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power3.out"
  });

  gsap.from(".nav-btn", {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.2,
    delay: 0.6
  });

  gsap.from(".update", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.3,
    delay: 1.2
  });

 
  const updateImgs = document.querySelectorAll(".update-img");
  updateImgs.forEach(img => {
    img.addEventListener("mouseenter", () => {
      gsap.to(img, { scale: 1.08, boxShadow: "0 0 15px rgba(0,0,0,0.3)", duration: 0.3 });
    });
    img.addEventListener("mouseleave", () => {
      gsap.to(img, { scale: 1, boxShadow: "none", duration: 0.3 });
    });
  });


  const readMoreLinks = document.querySelectorAll(".read-more");
  readMoreLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
      gsap.to(link, { scale: 1.05, duration: 0.2 });
    });
    link.addEventListener("mouseleave", () => {
      gsap.to(link, { scale: 1, duration: 0.2 });
    });
  });
});
