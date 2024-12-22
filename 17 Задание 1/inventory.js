import { loadItems, saveItems } from './storage.js';
export const inventoryItems = loadItems();

export function displayInventory() {
    const inventoryContainer = document.getElementById('inventory-container');
    inventoryContainer.innerHTML = "";

    const table = document.createElement('table');
    table.innerHTML = `
        <thead>
            <tr>
                <th>Название</th>
                <th>Полка</th>
                <th>Вес</th>
                <th>Время хранения</th>
                <th>Действие</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    `;

    const tbody = table.querySelector('tbody');
    inventoryItems.forEach((item) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.shelf}</td>
            <td>${item.weight}</td>
            <td>${item.storageTime}</td>
             <td><button onclick="deleteItem('${item.id}')">Удалить</button></td>
        `;
       row.dataset.id = item.id;
        tbody.appendChild(row);
    });
    inventoryContainer.appendChild(table);
}


export function deleteItem(id){
    const updatedInventory = inventoryItems.filter(item => item.id !== id);
    inventoryItems.length = 0;
    inventoryItems.push(...updatedInventory);
    saveItems(inventoryItems);
    displayInventory();
}


export function addItem(item) {
   inventoryItems.push(item);
   saveItems(inventoryItems);
   displayInventory();
}
