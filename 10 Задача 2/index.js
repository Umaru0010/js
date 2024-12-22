const addItemBtn = document.getElementById('addItemBtn');
const removeItemBtn = document.getElementById('removeItemBtn');
const dynamicList = document.getElementById('dynamicList');

addItemBtn.addEventListener('click', () => {
  const newItem = document.createElement('li');
  newItem.textContent = 'Новый элемент списка';
  dynamicList.appendChild(newItem);
});

removeItemBtn.addEventListener('click', () => {
    const lastItem = dynamicList.lastElementChild;
    if (lastItem) {
        dynamicList.removeChild(lastItem);
    }
});