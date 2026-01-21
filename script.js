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
    title: "CougarCS",
    short: "Corporate Relations Officer & Algorithms Workshop Director at CougarCS.",
    long: `
      <h3>Corporate Relations Officer — University of Houston (May 2025 – Jan 2026)</h3>
      <ul>
        <li>Drove a 10.82% membership increase (Aug–Nov 2025) by securing 16+ partnerships with major companies.</li>
        <li>Facilitated event logistics via weekly executive meetings to ensure smooth operations.</li>
        <li>Honed professional communication by securing partnerships and sponsorships with corporations.</li>
      </ul>
      <br>
      <h3>Algorithms Workshop Director — University of Houston (Jan 2025 – May 2025)</h3>
      <ul>
        <li>Directed and delivered COSC3320 workshops, giving 150+ students tailored study resources.</li>
        <li>Empowered a team of 3+ tutors, overseeing content creation and facilitation for high-quality support.</li>
        <li>Built confidence in public and technical communication by explaining complex CS topics clearly.</li>
      </ul>
      <br>
      <h3>Operations Team Member — University of Houston (August 2024 – May 2025)</h3>
      <ul>
        <li>Executed 50+ high-scale events by managing food service, technical setup, and rapid teardown to ensure seamless operations for over hundreds of attendees.</li>
        <li>Recognized as the "backbone" of event operations for maintaining high reliability and speed in high-pressure environments.</li>
        <li>Strategically analyzed CougarCS leadership operations to understand the logistics and stakeholder management required to host large-scale professional development events.</li>
      </ul>
    `,
    img: "images/experiences/cougarcs-logo.svg"
  },
  {
    title: "Information Technology Intern",
    short: "Real-time monitoring and fleet tracking; reduced downtime response rates.",
    long: `
      <h3>Harris County Precinct 2 — Houston, TX (Jun 2024 – Aug 2024)</h3>
      <ul>
        <li>Developed and implemented a real-time network monitoring tracker, reducing downtime by 30%.</li>
        <li>Deployed a real-time vehicle tracking system to deliver location and usage analytics for better allocation.</li>
        <li>Resolved 50+ hardware issues and trained 30+ staff across 13 sites, improving operational efficiency.</li>
      </ul>
    `,
    img: "images/experiences/hc-precinct-2.png"
  },
  {
    title: "Coding Instructor",
    short: "Managed 34 K-5 students; built engaging, project-based CS lessons.",
    long: `
      <h3>Coder Kids — Houston, TX (Jan 2025 – May 2025)</h3>
      <ul>
        <li>Managed a class of 34 K-5 students, fostering confidence in a structured learning environment.</li>
        <li>Used Scratch and Code.org to teach programming fundamentals through interactive, project-based learning.</li>
        <li>Drove student growth and parent engagement with consistent weekly progress reporting.</li>
      </ul>
    `,
    img: "images/experiences/coder-kids.svg"
  }
];

const grid = document.getElementById('card-grid');
const modal = document.getElementById('modal-overlay');
const closeModal = document.getElementById('close-modal');
const modalBody = document.querySelector('.modal-body');

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
  modalBody.scrollTop = 0; 
  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; 
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

const fadeSections = document.querySelectorAll('.fade-section');
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    } else {
      entry.target.classList.remove('is-visible');
    }
  });
}, { threshold: 0.4 });

fadeSections.forEach(sec => fadeObserver.observe(sec));
