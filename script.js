// Example: Scroll to top on reload
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// Optional: Smooth scroll behavior (if not using CSS scroll-behavior)
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Alert after submitting the reservation form
document.querySelector('.reservation-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your reservation! We look forward to welcoming you at Eat&Go.');
  this.reset();
});
