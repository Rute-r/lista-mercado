const form = document.querySelector('#newItem');
const list = document.querySelector('#list');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = event.target.elements['name'];
  const amount = event.target.elements['amount'];
  const itemMeasure = event.target.elements['itemMeasure'];

  createItem(name.value, amount.value, itemMeasure.value);

  name.value = '';
  amount.value = '';

  document.querySelector('#name').focus();
});

function createItem(name, amount, itemMeasure) {
  if (name !== '' && amount !== '') {
    const newItem = document.createElement('li');
    newItem.classList.add('.listItem');

    const numberItem = document.createElement('strong');
    numberItem.innerHTML = amount + itemMeasure;

    newItem.appendChild(numberItem);
    newItem.innerHTML += ' - ' + name;
    newItem.appendChild(deleteBtn());

    list.appendChild(newItem);
  }
  return;
}

function deleteBtn(id) {
  const elementButton = document.createElement('button');

  elementButton.innerText = 'X';

  elementButton.addEventListener('click', function () {
    deleteElement(this.parentNode);
  });

  return elementButton;
}

function deleteElement(tag) {
  tag.remove();
}
