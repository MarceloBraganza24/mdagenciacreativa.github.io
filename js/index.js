const homeBtn = document.getElementById('homeBtn');
const homeSection = document.getElementById('homeSection');

const aboutBtn = document.getElementById('aboutBtn');
const aboutSection = document.getElementById('aboutSection');

const ourServicesBtn = document.getElementById('ourServicesBtn');
const ourServiceSection = document.getElementById('ourServiceSection');

const contactBtn = document.getElementById('contactBtn');
const contactSection = document.getElementById('contactSection');

let lastScrollTop = 0;
const header = document.getElementById('header');

homeBtn.addEventListener('click', () => {
  header.scrollIntoView({
    behavior: 'smooth',
    block: 'start' 
  });
});

aboutBtn.addEventListener('click', () => {
  aboutSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start' 
  });
});


ourServicesBtn.addEventListener('click', () => {
  ourServiceSection.scrollIntoView({
    behavior: 'smooth', 
    block: 'start' 
  });
});

contactBtn.addEventListener('click', () => {
  contactSection.scrollIntoView({
    behavior: 'smooth', 
    block: 'start' 
  });
});

window.addEventListener('scroll', () => {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    header.style.top = '-14vh';
  } else {
    header.style.top = '0';
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

homeBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Desplazamiento suave
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show"); // Opcional para animación al salir
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".animated").forEach((element) => {
    observer.observe(element);
  });
});
