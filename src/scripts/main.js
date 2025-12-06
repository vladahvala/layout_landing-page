document.addEventListener('DOMContentLoaded', () => {
  const phoneIcon = document.querySelector('.icon--phone');
  const numbers = document.querySelector('.top-bar__info');

  phoneIcon.addEventListener('click', () => {
    numbers.classList.toggle('is-visible');
  });
});
