export class Delivery {
    constructor(customerName, address, distance) {
        this.customerName = customerName;
        this.address = address;
        this._distance = distance;
        this.element = this.createDeliveryElement();
         this._status = 'delivery';
    }

    createDeliveryElement() {
        const card = document.createElement('div');
        card.classList.add('delivery-card', `status-${this._status}`);
         card.innerHTML = `
            <h2>${this.customerName}</h2>
            <p><strong>Адрес:</strong> <span>${this.address}</span></p>
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
    get customer() {
       return this.customerName;
    }

    set customer(value) {
       this.customerName = value;
        this.element.querySelector('h2').textContent = value;
    }
   get address() {
       return this.address;
   }
     set address(value) {
       this.address = value;
        this.element.querySelector('p strong + span').textContent = value;
    }
     get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
        this.element.classList.remove('status-delivery', 'status-delivered', 'status-canceled');
        this.element.classList.add(`status-${this._status}`);
    }
}