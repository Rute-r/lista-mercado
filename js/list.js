const form = document.querySelector('#newItem');
const list = document.querySelector('#list');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  console.log(event);
});
