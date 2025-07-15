function handleTouchMe() {
  alert('File touch me clicked!');
}

// Animate elements on scroll
window.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  function checkScrollAnimations() {
    animatedElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const inView = rect.top <= window.innerHeight * 0.85 && rect.bottom >= 0;
      if (inView) {
        el.classList.add('show');
      } else {
        el.classList.remove('show');
      }
    });
  }

  window.addEventListener('scroll', checkScrollAnimations);
  checkScrollAnimations();
});

// Typing loop
window.addEventListener("DOMContentLoaded", () => {
  const typingSpan = document.querySelector(".typing-text");
  const texts = ["I'm Qurr", "I'm 19 years old", "I'm a student", "I'm a masscom mc112 student"];
  let index = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeLoop() {
    const currentText = texts[index];
    typingSpan.textContent = currentText.substring(0, charIndex);

    if (!isDeleting) {
      if (charIndex < currentText.length) {
        charIndex++;
        setTimeout(typeLoop, 120);
      } else {
        isDeleting = true;
        setTimeout(typeLoop, 1500);
      }
    } else {
      if (charIndex > 0) {
        charIndex--;
        setTimeout(typeLoop, 80);
      } else {
        isDeleting = false;
        index = (index + 1) % texts.length;
        setTimeout(typeLoop, 400);
      }
    }
  }

  typeLoop();
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

//gambar qurr slider
document.addEventListener("DOMContentLoaded", function () {
  const imageSlider = document.querySelector('.image-slider');
  const images = ['img/qurr1.png', 'img/qurr2.png', 'img/qurr3.png'];

  let current = 0;
  const imgElement = document.querySelector('.slider-img');

  function changeImage() {
    imgElement.classList.remove('active');

    setTimeout(() => {
      current = (current + 1) % images.length;
      imgElement.src = images[current];
      imgElement.classList.add('active');
    }, 300); // wait before changing
  }

  imgElement.classList.add('active');
  setInterval(changeImage, 3000); // change every 3s
});

document.querySelectorAll('.draggable-paper').forEach(paper => {
  let isDragging = false;
  let offsetX, offsetY;

  paper.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - paper.getBoundingClientRect().left;
    offsetY = e.clientY - paper.getBoundingClientRect().top;
    paper.style.zIndex = 999;
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    paper.style.left = (e.clientX - offsetX) + 'px';
    paper.style.top = (e.clientY - offsetY) + 'px';
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    paper.style.zIndex = 1;
  });

  paper.addEventListener('click', (e) => {
    if (!isDragging) {
      const link = paper.getAttribute('data-link');
      window.location.href = link;
    }
  });
});

// Handle scroll buttons for each carousel
document.querySelectorAll('.product-carousel').forEach(carousel => {
  const track = carousel.querySelector('.product-track');
  const btnLeft = carousel.querySelector('.scroll-btn.left');
  const btnRight = carousel.querySelector('.scroll-btn.right');

  btnLeft?.addEventListener('click', () => {
    track.scrollBy({ left: -300, behavior: 'smooth' });
  });

  btnRight?.addEventListener('click', () => {
    track.scrollBy({ left: 300, behavior: 'smooth' });
  });
});

// Pop-up animation on scroll
const scrollElements = document.querySelectorAll('.animate-on-scroll');

function checkInView() {
  scrollElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.9 && rect.bottom >= 0) {
      el.classList.add('show');
    } else {
      el.classList.remove('show');
    }
  });
}

window.addEventListener('scroll', checkInView);
window.addEventListener('load', checkInView);

 document.querySelector('a[href="#home"]').addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector('#home');
    const offset = 180;

    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = target.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });

  // Handle scroll buttons for each carousel
document.querySelectorAll('.carousel-wrapper').forEach(carousel => {
  const track = carousel.querySelector('.product-track');
  const btnLeft = carousel.querySelector('.scroll-btn.left');
  const btnRight = carousel.querySelector('.scroll-btn.right');

  btnLeft?.addEventListener('click', () => {
    track.scrollBy({ left: -300, behavior: 'smooth' });
  });

  btnRight?.addEventListener('click', () => {
    track.scrollBy({ left: 300, behavior: 'smooth' });
  });
});

