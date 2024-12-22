import { Delivery } from './delivery.js';

export class EditDelivery extends Delivery {
    constructor(customerName, address, distance, status) {
        super(customerName, address, distance);
         this.status = status;
          const editButton = document.createElement('button');
          editButton.textContent = 'Изменить';
          editButton.addEventListener('click', () => this.openEditModal());
         this.element.appendChild(editButton);
    }

    openEditModal() {
       const modal = document.createElement('div');
        modal.classList.add('edit-modal');
        modal.innerHTML = `
            <div class="modal-content">
                <h2>Редактировать доставку</h2>
                 <div class="form-group">
                     <label>Имя:</label>
                     <input type="text" id="edit-name" value="${this.customerName}">
                  </div>
                 <div class="form-group">
                   <label>Адрес:</label>
                     <input type="text" id="edit-address" value="${this.address}">
                 </div>
               <div class="form-group">
                   <label>Расстояние:</label>
                   <input type="text" id="edit-distance" value="${this.distance}">
                </div>
                <div class="form-group">
                  <label>Статус:</label>
                     <select id="edit-status">
                         <option value="delivery" ${this.status === 'delivery' ? 'selected' : ''}>Доставляется</option>
                        <option value="delivered" ${this.status === 'delivered' ? 'selected' : ''}>Доставлен</option>
                        <option value="canceled" ${this.status === 'canceled' ? 'selected' : ''}>Отменён</option>
                   </select>
                </div>
                 <button id="save-edit">Сохранить</button>
                 <button id="cancel-edit">Отмена</button>
            </div>
         `;

        document.body.appendChild(modal);

        const saveButton = modal.querySelector('#save-edit');
        const cancelButton = modal.querySelector('#cancel-edit');

        saveButton.addEventListener('click', () => this.saveChanges(modal));
        cancelButton.addEventListener('click', () => this.closeModal(modal));
    }
    saveChanges(modal) {
        const nameInput = modal.querySelector('#edit-name');
       const addressInput = modal.querySelector('#edit-address');
        const distanceInput = modal.querySelector('#edit-distance');
         const statusSelect = modal.querySelector('#edit-status');

       this.customer = nameInput.value;
      this.address = addressInput.value;
       this.distance = parseFloat(distanceInput.value);
        this.status = statusSelect.value;
         this.closeModal(modal);
    }

    closeModal(modal) {
       modal.remove();
   }
}