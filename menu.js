const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'メニューを開く' : 'メニューを閉じる');
    nav.classList.toggle('is-open', !isOpen);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'メニューを開く');
      nav.classList.remove('is-open');
    });
  });
}

document.querySelectorAll('.accessory-carousel').forEach((carousel) => {
  const gallery = carousel.querySelector('.accessory-gallery');
  const previous = carousel.querySelector('.carousel-previous');
  const next = carousel.querySelector('.carousel-next');
  const scrollAmount = () => gallery.clientWidth * 0.8;

  previous.addEventListener('click', () => {
    gallery.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
  });

  next.addEventListener('click', () => {
    gallery.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
  });
});
