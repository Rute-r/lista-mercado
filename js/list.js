const form = document.querySelector('#newItem');
const list = document.querySelector('#list');
const items = JSON.parse(localStorage.getItem('items')) || [];

items.forEach((element) => {
  createItem(element);
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = event.target.elements['name'];
  const amount = event.target.elements['amount'];
  const itemMeasure = event.target.elements['itemMeasure'];

  const currentItem = {
    name: name.value,
    amount: amount.value,
    itemMeasure: itemMeasure.value,
  };

  createItem(currentItem);
  items.push(currentItem);

  localStorage.setItem('items', JSON.stringify(items));

  name.value = '';
  amount.value = '';

  document.querySelector('#name').focus();
});

function createItem(item) {
  const itemError = document.querySelector('.item-error');
  const amountError = document.querySelector('.amount-error');

  if (item.name === '') {
    itemError.innerHTML = 'Preencha com o item desejado!';
    itemError.style.display = 'block';
    amountError.style.display = 'none';
  } else if (item.amount === '') {
    amountError.innerHTML = 'Preencha com a quantidade desejada!';
    amountError.style.display = 'block';
    itemError.style.display = 'none';
  } else {
    itemError.style.display = 'none';
    amountError.style.display = 'none';

    const newItem = document.createElement('li');
    newItem.classList.add('listItem');

    const numberItem = document.createElement('strong');
    numberItem.innerHTML = item.amount + item.itemMeasure;
    numberItem.dataset.id = item.id;
    newItem.appendChild(numberItem);
    newItem.innerHTML += ' - ' + item.name;
    newItem.appendChild(deleteBtn(item.id));

    list.appendChild(newItem);
  }
}

function deleteBtn(id) {
  const elementButton = document.createElement('button');
  elementButton.classList.add('deleteButton');

  elementButton.innerText = 'X';

  elementButton.addEventListener('click', function () {
    deleteElement(this.parentNode, id);
  });

  return elementButton;
}

function deleteElement(tag, id) {
  tag.remove();

  items.splice(
    items.findIndex((element) => element.id === id),
    1
  );

  localStorage.setItem('items', JSON.stringify(items));
}
