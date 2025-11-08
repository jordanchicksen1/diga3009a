
const map = L.map('map').setView([-30.5595, 22.9375], 5); 


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors',
}).addTo(map);


studios.forEach(studio => {
  const marker = L.marker([studio.lat, studio.lng]).addTo(map);
  marker.bindPopup(`
    <b>${studio.name}</b><br>
    City: ${studio.city}<br>
    Games: ${studio.games.join(", ")}<br>
    <a href="${studio.website}" target="_blank">Website</a>
  `);
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
