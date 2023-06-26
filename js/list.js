const form = document.querySelector('#newItem');
const list = document.querySelector('#list');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  createItem(event.target.elements['name'].value, event.target.elements['amount'].value);
});

function createItem(name, amount) {
  if (name !== '' || amount !== '') {
    const newItem = document.querySelector('.listItem');
    newItem.classList.remove('emptylist');

    const numberItem = document.createElement('strong');
    numberItem.innerHTML = amount;

    newItem.appendChild(numberItem);
    newItem.innerHTML += ' ' + name;

    list.appendChild(newItem);
  } else {
    newItem = '';
  }
}
