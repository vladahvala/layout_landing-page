const form = document.querySelector('.contact__form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  this.reset();
});

const sendButton = document.querySelector('.contact__form-button');

sendButton.addEventListener('click', () => {
  form.reset();
});

// Phone nums visibility
const info = document.querySelector('.top-bar__info');
const iconsWrapper = document.querySelector('.top-bar__icons');

iconsWrapper.addEventListener('mouseenter', () => {
  info.classList.add('is-visible');
});

iconsWrapper.addEventListener('mouseleave', () => {
  info.classList.remove('is-visible');
});
