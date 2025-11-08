document.addEventListener("DOMContentLoaded", () => {

  // Navbar animation
  gsap.from(".top-nav", {
    y: -50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  // Title animation
  gsap.from("h1", {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.3,
    ease: "power2.out"
  });

  // Studio buttons animation
  gsap.from(".studio-btn", {
    autoAlpha: 0,
    yPercent: 20,
    duration: 0.8,
    delay: 0.5,
    stagger: {
      amount: 1.2,
      grid: "auto",
      from: "center"
    },
    ease: "power3.out",
    clearProps: "transform"
  });

  // Scroll arrow floating animation
  gsap.to("#scrollArrow", {
    y: -8,
    repeat: -1,
    yoyo: true,
    duration: 0.8,
    ease: "power1.inOut"
  });

  // Search bar animation
  gsap.from(".search-container", { 
    opacity: 0, 
    y: 20, 
    duration: 0.8, 
    delay: 0.4, 
    ease: "power2.out" 
  });

  // Contact button animation
  gsap.from(".contact-btn", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 1.5,
    ease: "power2.out"
  });

  // Hover animation for contact button
  const contactBtn = document.querySelector(".contact-btn");
  if (contactBtn) {
    contactBtn.addEventListener("mouseenter", () => {
      gsap.to(contactBtn, { scale: 1.07, duration: 0.2, ease: "back.out(2)" });
    });
    contactBtn.addEventListener("mouseleave", () => {
      gsap.to(contactBtn, { scale: 1, duration: 0.2, ease: "power1.inOut" });
    });
  }

  // Hamburger menu animation
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
