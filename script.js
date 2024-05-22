// file: script.js
document.addEventListener('DOMContentLoaded', () => {
  const openButton = document.querySelector('.open-button');
  const closeButton = document.querySelector('.close-button');
  const card = document.querySelector('.card');

  openButton.addEventListener('click', () => {
    card.classList.add('visible');
    const audio = new Audio('https://www.youtube.com/watch?v=5VzlZz-_5vE');
    audio.play();
  });

  closeButton.addEventListener('click', () => {
    card.classList.remove('visible');
  });
});