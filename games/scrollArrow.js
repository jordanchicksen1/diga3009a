const arrow = document.getElementById('scroll-arrow');
let atBottom = false;

arrow.addEventListener('click', () => {
  if (!atBottom) {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  } else {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
});

window.addEventListener('scroll', () => {
  const nearBottom =
    window.innerHeight + window.scrollY >= document.body.scrollHeight - 10;

  atBottom = nearBottom;
  arrow.textContent = atBottom ? '▲' : '▼';
});
