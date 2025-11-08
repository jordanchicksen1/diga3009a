// Initialize map
const map = L.map('map').setView([-30.5595, 22.9375], 5); // Center of SA

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors',
}).addTo(map);

// Add studio markers
studios.forEach(studio => {
  const marker = L.marker([studio.lat, studio.lng]).addTo(map);
  marker.bindPopup(`
    <b>${studio.name}</b><br>
    City: ${studio.city}<br>
    Games: ${studio.games.join(", ")}<br>
    <a href="${studio.website}" target="_blank">Website</a>
  `);
});
