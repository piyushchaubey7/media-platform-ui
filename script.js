// Optional: Live search filtering
document.getElementById('searchInput').addEventListener('input', function (e) {
  const search = e.target.value.toLowerCase();
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(search) ? 'block' : 'none';
  });
});