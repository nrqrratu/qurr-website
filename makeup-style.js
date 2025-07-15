// Smooth scroll to sections if you add anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Optional: Filter by category (if added)
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.getAttribute('data-category');

    galleryItems.forEach(item => {
      if (category === 'all' || item.classList.contains(category)) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });

    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Modal popup for image preview (optional)
document.querySelectorAll('.gallery-img').forEach(img => {
  img.addEventListener('click', () => {
    const modal = document.getElementById('imgModal');
    const modalImg = document.getElementById('modalImg');
    const modalCaption = document.getElementById('modalCaption');

    modalImg.src = img.src;
    modalCaption.textContent = img.alt;
    modal.classList.remove('hidden');
  });
});

document.getElementById('closeModal')?.addEventListener('click', () => {
  document.getElementById('imgModal').classList.add('hidden');
});

document.getElementById('imgModal')?.addEventListener('click', e => {
  if (e.target.id === 'imgModal') {
    e.target.classList.add('hidden');
  }
});

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.querySelectorAll('.sub-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    // Remove active class from all
    document.querySelectorAll('.sub-link').forEach(l => l.classList.remove('active'));
    this.classList.add('active');

    // Hide all tab-content
    document.querySelectorAll('.tab-content').forEach(tc => tc.classList.add('hidden'));

    // Show selected tab-content
    const tabId = this.getAttribute('data-tab');
    document.getElementById(tabId).classList.remove('hidden');
  });
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.carousel-wrapper').forEach(carousel => {
      const track = carousel.querySelector('.carousel-container');
      const btnLeft = carousel.querySelector('.scroll-btn.left');
      const btnRight = carousel.querySelector('.scroll-btn.right');

      btnLeft.addEventListener('click', () => {
        track.scrollBy({ left: -300, behavior: 'smooth' });
      });

      btnRight.addEventListener('click', () => {
        track.scrollBy({ left: 300, behavior: 'smooth' });
      });
    });
  });


