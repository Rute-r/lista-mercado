const form = document.querySelector('#newItem');
const list = document.querySelector('#list');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = event.target.elements['name'];
  const amount = event.target.elements['amount'];

  createItem(name.value, amount.value);

  name.value = '';
  amount.value = '';
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
