const storageKey = "inventoryItems";

export function loadItems() {
    const items = JSON.parse(localStorage.getItem(storageKey)) || [];
    return items;
}

export function saveItems(items) {
    localStorage.setItem(storageKey, JSON.stringify(items));
}