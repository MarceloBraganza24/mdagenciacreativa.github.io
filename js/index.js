const homeBtn = document.getElementById('homeBtn');
const homeBtnMobile = document.getElementById('homeBtnMobile');
const homeSection = document.getElementById('homeSection');

const aboutBtn = document.getElementById('aboutBtn');
const aboutBtnMobile = document.getElementById('aboutBtnMobile');
const aboutSection = document.getElementById('aboutSection');

const ourServicesBtn = document.getElementById('ourServicesBtn');
const ourServicesBtnMobile = document.getElementById('ourServicesBtnMobile');
const ourServiceSection = document.getElementById('ourServiceSection');

const contactBtn = document.getElementById('contactBtn');
const contactBtnMobile = document.getElementById('contactBtnMobile');
const contactSection = document.getElementById('contactSection');

let lastScrollTop = 0;
const header = document.getElementById('header');
const headerMobile = document.getElementById('headerMobile');

aboutBtn.addEventListener('click', () => {
  aboutSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start' 
  });
});
aboutBtnMobile.addEventListener('click', () => {
  aboutSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start' 
  });
  document.getElementById('menuOptionsContainer').style.display = 'none';
});

ourServicesBtn.addEventListener('click', () => {
  ourServiceSection.scrollIntoView({
    behavior: 'smooth', 
    block: 'start' 
  });
});
ourServicesBtnMobile.addEventListener('click', () => {
  ourServiceSection.scrollIntoView({
    behavior: 'smooth', 
    block: 'start' 
  });
  document.getElementById('menuOptionsContainer').style.display = 'none';
});

contactBtn.addEventListener('click', () => {
  contactSection.scrollIntoView({
    behavior: 'smooth', 
    block: 'start' 
  });
});
contactBtnMobile.addEventListener('click', () => {
  contactSection.scrollIntoView({
    behavior: 'smooth', 
    block: 'start' 
  });
  document.getElementById('menuOptionsContainer').style.display = 'none';
});

window.addEventListener('scroll', () => {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    header.style.top = '-14vh';
    headerMobile.style.top = '-10vh';
    document.getElementById('menuOptionsContainer').style.display = 'none';
  } else {
    header.style.top = '0';
    headerMobile.style.top = '0';
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

homeBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Desplazamiento suave
  });
});
homeBtnMobile.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Desplazamiento suave
  });
  document.getElementById('menuOptionsContainer').style.display = 'none';
});

document.getElementById('inputPhoneContact').addEventListener('input', function (e) {
  e.target.value = e.target.value.replace(/[^0-9]/g, '');
});
document.getElementById('inputFirstNameContact').addEventListener('input', function (e) {
  e.target.value = e.target.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, '');
});
document.getElementById('inputLastNameContact').addEventListener('input', function (e) {
  e.target.value = e.target.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, '');
});

document.getElementById('hmenu').addEventListener('click', function () {
  if(document.getElementById('menuOptionsContainer').style.display == 'none') {
    document.getElementById('menuOptionsContainer').style.display = 'block';
  } else {
    document.getElementById('menuOptionsContainer').style.display = 'none';
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".box");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, { threshold: 0.1 });

  boxes.forEach(box => observer.observe(box));
});