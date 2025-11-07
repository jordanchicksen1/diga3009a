document.addEventListener("DOMContentLoaded", () => {
  // Navbar
  gsap.from(".top-nav", {
    y: -50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  // Title
  gsap.from("h1", {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.3,
    ease: "power2.out"
  });

  // Game tiles (fade in, but don't leave a transform)
  gsap.from(".studio-btn", {
    autoAlpha: 0,     // controls opacity + visibility
    yPercent: 20,     // temporary vertical movement
    duration: 0.8,
    delay: 0.5,
    stagger: {
      amount: 1.2,
      grid: "auto",
      from: "center"
    },
    ease: "power3.out",
    clearProps: "transform" // removes inline transform after animation
  });

  // Scroll arrow pulse
  gsap.to("#scrollArrow", {
    y: -8,
    repeat: -1,
    yoyo: true,
    duration: 0.8,
    ease: "power1.inOut"
  });
});
