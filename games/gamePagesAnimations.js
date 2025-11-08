
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


  gsap.from(".game-video", {
    opacity: 0,
    scale: 0.95,
    duration: 1,
    delay: 0.6,
    ease: "power2.out"
  });

 
  gsap.from(".image-gallery h2, .image-gallery p, .info-block", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.9,
    stagger: 0.2,
    ease: "power2.out"
  });


  gsap.from(".small-img", {
    opacity: 0,
    y: 40,
    duration: 0.6,
    delay: 1.3,
    stagger: 0.15,
    ease: "power3.out",
    clearProps: "transform"
  });


  gsap.from(".developer-section", {
    opacity: 0,
    y: 40,
    duration: 0.8,
    delay: 2,
    ease: "power2.out"
  });


  gsap.to("#scroll-arrow", {
    y: -8,
    repeat: -1,
    yoyo: true,
    duration: 0.8,
    ease: "power1.inOut"
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navDots = document.getElementById("nav-dots");

  if (hamburger && navDots) {
    hamburger.addEventListener("click", () => {
      const isOpen = navDots.classList.toggle("show");

      
      if (isOpen) {
        gsap.fromTo(
          navDots,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
        );
      }
    });
  }
});

