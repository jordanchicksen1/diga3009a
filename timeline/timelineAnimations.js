// timelineAnimations.js
console.log("timelineAnimations.js loaded!");
// Wait for DOM to be loaded
document.addEventListener("DOMContentLoaded", () => {
  // GSAP + ScrollTrigger setup

  const items = document.querySelectorAll(".timeline-item");

  if (items.length === 0) return;

  // Initial animation: fade + move up with stagger
  gsap.from(items, {
    opacity: 0,
    y: 50,
    scale: 0.8,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.15
  });

  // Scroll-triggered animation for items not yet visible
  items.forEach(item => {
    gsap.fromTo(
      item,
      { opacity: 0, y: 50, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          toggleActions: "play none none none",
        }
      }
    );
  });

  // Hover animation (GSAP)
  items.forEach(item => {
    item.addEventListener("mouseenter", () => {
      gsap.to(item, { scale: 1.05, boxShadow: "0 4px 15px rgba(0,0,0,0.3)", duration: 0.2 });
    });
    item.addEventListener("mouseleave", () => {
      gsap.to(item, { scale: 1, boxShadow: "0 0 0 rgba(0,0,0,0)", duration: 0.2 });
    });
  });
});
