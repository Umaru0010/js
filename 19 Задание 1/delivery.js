export class Delivery {
    constructor(customerName, address, distance) {
        this.customerName = customerName;
        this.address = address;
        this._distance = distance; // Используем _distance для хранения значения
        this.element = this.createDeliveryElement();
    }

    createDeliveryElement() {
        const card = document.createElement('div');
        card.classList.add('delivery-card');
         card.innerHTML = `
            <h2>${this.customerName}</h2>
            <p><strong>Адрес:</strong> ${this.address}</p>
            <p><strong>Расстояние:</strong> <span class="distance-value">${this._distance}</span> км</p>
        `;
        return card;
    }
    get distance() {
        return this._distance;
    }
    set distance(value) {
        this._distance = value;
       this.element.querySelector('.distance-value').textContent = value;

    }
   set customer(value) {
        this.customerName = value;
        this.element.querySelector('h2').textContent = value;
    }
    get customer() {
      return this.customerName;
   }
    set address(value) {
        this.address = value;
         this.element.querySelector('p strong + span').textContent = value;
    }
    get address() {
        return this.address;
    }
}