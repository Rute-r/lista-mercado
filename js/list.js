const form = document.querySelector('#newItem');
const list = document.querySelector('#list');
const items = JSON.parse(localStorage.getItem('items')) || [];

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
  const itemError = document.querySelector('.item-error');
  const amountError = document.querySelector('.amount-error');

  if (name === '') {
    itemError.innerHTML = 'Preencha com o item desejado!';
    itemError.style.display = 'block';
    amountError.style.display = 'none';
  } else if (amount === '') {
    amountError.innerHTML = 'Preencha com a quantidade desejada!';
    amountError.style.display = 'block';
    itemError.style.display = 'none';
  } else {
    itemError.style.display = 'none';
    amountError.style.display = 'none';

    const newItem = document.createElement('li');
    newItem.classList.add('listItem');

    const numberItem = document.createElement('strong');
    numberItem.innerHTML = amount + itemMeasure;

    newItem.appendChild(numberItem);
    newItem.innerHTML += ' - ' + name;
    newItem.appendChild(deleteBtn());

    list.appendChild(newItem);
  }
}

function deleteBtn() {
  const elementButton = document.createElement('button');
  elementButton.classList.add('deleteButton');

  elementButton.innerText = 'X';

  elementButton.addEventListener('click', function () {
    deleteElement(this.parentNode);
  });

  return elementButton;
}

function deleteElement(tag) {
  tag.remove();
}
