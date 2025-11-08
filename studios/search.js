  const searchInput = document.getElementById('studioSearch');
  const studios = document.querySelectorAll('.studio-btn');

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();

    studios.forEach(studio => {
      const altText = studio.querySelector('img').alt.toLowerCase();
     
      if (altText.includes(query)) {
        studio.style.display = 'flex';
      } else {
        studio.style.display = 'none';
      }
    });
  });