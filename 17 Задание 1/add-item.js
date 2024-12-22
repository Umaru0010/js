import { addItem, inventoryItems } from "./inventory.js";

export function showAddItemForm() {
const formContainer = document.getElementById('add-item-form');
  formContainer.innerHTML = `
    <h2>Добавить запись</h2>
     <form>
         <label for="name">Название:</label>
        <input type="text" id="name" required>
       <label for="shelf">Полка:</label>
        <input type="text" id="shelf" required>
        <label for="weight">Вес:</label>
        <input type="number" id="weight" min="0" required>
        <label for="storageTime">Время хранения:</label>
        <input type="number" id="storageTime" min="0" required>
        <button type="submit">Добавить</button>
    </form>
`;

const form = document.querySelector('#add-item-form form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const shelf = document.getElementById('shelf').value;
    const weight = document.getElementById('weight').value;
    const storageTime = document.getElementById('storageTime').value;

     if (name && shelf && weight && storageTime) {
         const newItem = {
             id: Date.now(),
              name,
              shelf,
              weight,
              storageTime
         };
        addItem(newItem);
        form.reset();
    } else {
       alert('Пожалуйста, заполните все поля!');
    }
});
}