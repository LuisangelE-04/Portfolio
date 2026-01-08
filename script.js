const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navBar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navBar.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-list a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

const projects = [
  {
    title: "Abstract Architecture",
    short: "Modern structural designs.",
    long: `
      <p>This is paragraph one of a very long description to test the scroll effect.</p>
      <p>We need enough content to exceed the height of the modal container.</p>
      <ul>
        <li>Feature 1: Sustainable materials</li>
        <li>Feature 2: Minimalist aesthetic</li>
        <li>Feature 3: Urban integration</li>
      </ul>
      <p>Repeating text to ensure scrolling: Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
      <p>More text... More text... More text... More text... More text...</p>
      <h3>Table of Contents</h3>
      <ul>
        <li>Welcome</li>
        <li>Dawn of Circuits</li>
        <li>Echoes in the Archive</li>
        <li>Glass Cities</li>
        <li>The Silent Compiler</li>
        <li>Threads of Light</li>
        <li>Vector Horizon</li>
        <li>Memory of Rain</li>
        <li>Luminous Errors</li>
        <li>The Final Commit</li>
        <li>Midnight Refactor</li>
      </ul
    `,
    img: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Digital Ecosystems",
    short: "Future of web connectivity.",
    long: "Exploring how integrated digital platforms are reshaping the way we interact with physical environments.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
  }
];

const grid = document.getElementById('card-grid');
const modal = document.getElementById('modal-overlay');
const closeModal = document.getElementById('close-modal');

projects.forEach(project => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <div class="card-img-container">
      <img src="${project.img}" alt="${project.title}">
    </div>
    <div class="card-info">
      <h3>${project.title}</h3>
      <p>${project.short}</p>
    </div>
  `;
  
  card.addEventListener('click', () => openModal(project));
  grid.appendChild(card);
});

function openModal(project) {
  document.getElementById('modal-img').src = project.img;
  document.getElementById('modal-title').textContent = project.title;
  document.getElementById('modal-description').innerHTML = project.long;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent scroll
}

function handleClose() {
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

closeModal.addEventListener('click', handleClose);

// Accessibility: Close on backdrop click or Esc key
modal.addEventListener('click', (e) => {
  if (e.target === modal) handleClose();
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) handleClose();
});
