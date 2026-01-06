const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navBar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
  // Toggle classes for hamburger animation and menu visibility
  hamburger.classList.toggle('active');
  navBar.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Optional: Close menu when a link is clicked
document.querySelectorAll('.nav-list a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});