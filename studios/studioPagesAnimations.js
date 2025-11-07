
document.addEventListener("DOMContentLoaded", () => {

  gsap.from(".top-nav", {
    y: -40,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  
  gsap.from(".title", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.3,
    ease: "power2.out"
  });

  
  gsap.from(".team-img", {
  opacity: 0,
  scale: 0.95,
  duration: 1,
  delay: 0.6,
  ease: "power2.out",
  clearProps: "transform" 
});

  gsap.from(".image-gallery h2, .image-gallery p", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.9,
    stagger: 0.2,
    ease: "power2.out"
  });

  gsap.from(".info-block", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 1.5,
    ease: "power2.out"
  });

  
  gsap.from(".gamePic", {
    opacity: 0,
    y: 40,
    duration: 0.6,
    delay: 1.8,
    stagger: 0.15,
    ease: "power3.out",
    clearProps: "transform"
  });

  gsap.to("#scroll-arrow", {
    y: -8,
    repeat: -1,
    yoyo: true,
    duration: 0.8,
    ease: "power1.inOut"
  });
});
