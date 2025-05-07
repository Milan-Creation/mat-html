var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  keyboard: {
    enabled: true,
  },
  mousewheel: {
    thresholdDelta: 70,
  },
  spaceBetween: 60,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

ScrollReveal().reveal(".team-card", {
  delay: 200,
  distance: "50px",
  origin: "bottom",
  interval: 100,
});

// Custom directions for each card
ScrollReveal().reveal(".team-card:nth-child(1)", { origin: "left" });
ScrollReveal().reveal(".team-card:nth-child(2)", { origin: "right" });
ScrollReveal().reveal(".team-card:nth-child(3)", { origin: "bottom" });
ScrollReveal().reveal(".team-card:nth-child(4)", { origin: "top" });

// Initialize animations when scrolled into view
document.addEventListener("DOMContentLoaded", function () {
  const heroSection = document.querySelector(".hero-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll(".animate__animated");
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.style.visibility = "visible";
              el.classList.add(el.classList[1]); // Add the specific animation class
            }, index * 300);
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(heroSection);
});

document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observe elements with animation classes
  document.querySelectorAll(".fade-in-left, .fade-in-right").forEach((el) => {
    observer.observe(el);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const paragraph = document.querySelector(".animated-paragraph");
  const words = paragraph.querySelectorAll(".word");

  // Set index for each word for staggered animation
  words.forEach((word, index) => {
    word.style.setProperty("--word-index", index);
  });

  // Optional: Trigger on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(paragraph);
});

// For CSS-only solution
document.querySelector('.animated-paragraph').classList.add('loaded');

// Using Intersection Observer API
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
});

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});