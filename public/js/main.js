// Minimal client-side JS (could be extended)
document.getElementById && (() => {
  const form = document.getElementById('scanForm');
  if (!form) return;
  form.addEventListener('submit', () => {
    const btn = form.querySelector('button[type="submit"]');
    if (btn) btn.textContent = 'Scanning...';
  });
})();
