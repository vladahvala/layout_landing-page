const form = document.querySelector('.contact__form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  this.reset();
});

const sendButton = document.querySelector('.contact__form-button');

sendButton.addEventListener('click', () => {
  form.reset();
});
