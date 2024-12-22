const itemList = document.getElementById('itemList');
const addItemBtn = document.getElementById('addItemBtn');

let items = ["Банан", "Апельсин", "Яблоко", "Ананас"];


function renderItems() {
    itemList.innerHTML = '';
    const sortedItems = [...items].sort();
    sortedItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        itemList.appendChild(listItem);
    });
}
renderItems();


addItemBtn.addEventListener('click', () => {
    const newItem = prompt("Введите название товара");
    if (!newItem) {
        alert("Название товара не введено!");
    } else {
        items.push(newItem);
        renderItems();
    }
});