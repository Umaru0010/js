import { showAddItemForm, displayInventory } from "./inventory.js";
import { saveItems, loadItems } from './storage.js';


window.addEventListener('DOMContentLoaded', () => {
  displayInventory();

    document.getElementById('add-item-button').addEventListener('click', () => {
        showAddItemForm();
    });
});