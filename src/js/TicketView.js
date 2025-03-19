/**
 *  Класс для отображения тикетов на странице.
 *  Он содержит методы для генерации разметки тикета.
 * */
import TicketForm from './TicketForm';

const container = document.querySelector('.container'); // console.log(container);
const ticketForm = new TicketForm();
console.log(ticketForm);

export default class TicketView {
  constructor() {
    this.name = 'Ticket View';
  }

  list(tickets) {
    console.log(this.name);
    for (let i = 0; i < Object.entries(tickets).length; i++) {
      const ticketElement = document.createElement('div');
      ticketElement.className = 'ticket-element';
      container.appendChild(ticketElement);

      const ticket = document.createElement('div');
      ticket.className = 'ticket';
      ticketElement.appendChild(ticket);
      const inputDiv = document.createElement('div');
      inputDiv.className = 'checkbox-done';
      ticket.appendChild(inputDiv);
      const inputCheckbox = document.createElement('input');
      inputCheckbox.setAttribute('type', 'checkbox');
      inputCheckbox.className = 'checkbox-input';
      inputDiv.appendChild(inputCheckbox);
      const title = document.createElement('div');
      title.className = 'title';
      title.textContent = tickets[i].name;
      ticket.appendChild(title);
      const created = document.createElement('div');
      created.className = 'created';
      const d = new Date(tickets[i].created); // console.log(d);
      const year = d.getFullYear(); // год
      const month_ = d.getMonth() + 1; // почему то неправильно вычисляет месяц, добавил + 1
      const month = month_ < 10 ? `0${month_}` : month_; // месяц
      const date = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate(); // день
      const hour = d.getHours() < 10 ? `0${d.getHours()}` : d.getHours(); // час
      const minutes = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes(); // минуты
      created.textContent = `${date}.${month}.${year} ${hour}.${minutes}`;
      ticket.appendChild(created);

      const buttonEdit = document.createElement('div');
      buttonEdit.classList.add('button-edit');
      ticket.appendChild(buttonEdit);
      buttonEdit.addEventListener('click', (e) => {
        // console.log('button-edit');
        this.modalEdit(e);
        const ticketElem = e.target.closest('.ticket-element');
        const title2 = ticketElem.querySelector('.title').textContent; // краткое описание
        const description = ticketElem.querySelector('.description').textContent; // подробное описание
        const modalEdit = document.querySelector('.modal-edit');
        const dInputModal = modalEdit.querySelector('input.d');
        const ddInputModal = modalEdit.querySelector('input.dd');
        dInputModal.value = title2;
        ddInputModal.value = description;
      });
      buttonEdit.insertAdjacentHTML('afterbegin', '<p>&#9998;</p>');

      const buttonX = document.createElement('div');
      buttonX.classList.add('button-x');
      buttonX.textContent = 'X';
      buttonX.addEventListener('click', (e) => {
        // console.log('buttonX');
        this.modalDelete(e);
      });
      ticket.appendChild(buttonX);

      const description = document.createElement('div');
      // description.className = 'description display-none';
      description.classList.add('description');
      description.classList.add('display-none');
      description.textContent = tickets[i].description;
      ticketElement.addEventListener('click', (e) => {
        if (
          e.target.classList.value === 'ticket' ||
          e.target.classList.value === 'created' ||
          e.target.classList.value === 'title' ||
          e.target.classList.value === 'ticket-element'
        ) {
          console.log(e.target.classList.value);
        } // console.log('123');
        // console.log('не то');
      });
      ticketElement.appendChild(description);
    }
  }

  modalAdd(e) {
    e.preventDefault();
    ticketForm.form('Добавить тикет');
  }

  modalEdit(e) {
    e.preventDefault();
    ticketForm.form('Изменить тикет');

    const body = document.querySelector('body');
    body.insertAdjacentHTML('beforeEnd', '<div class="modal-overlay"></div>');
    const cansel = document.querySelector('.btn-cancel');
    cansel.addEventListener('click', (event) => {
      event.preventDefault();
      const modalOverlay = body.querySelector('.modal-overlay');
      modalOverlay.remove();
      const modalEdit = body.querySelector('.modal-edit');
      modalEdit.remove();
    });
    const ok = document.querySelector('.btn-ok');

    ok.addEventListener('click', (event) => {
      event.preventDefault();
      console.log(ok);
    });
  }

  modalDelete(e) {
    e.preventDefault();
    ticketForm.form('Удалить тикет');

    const body = document.querySelector('body');
    body.insertAdjacentHTML('beforeEnd', '<div class="modal-overlay"></div>');
    const cansel = document.querySelector('.btn-cancel');
    cansel.addEventListener('click', (event) => {
      event.preventDefault();
      const modalOverlay = body.querySelector('.modal-overlay');
      modalOverlay.remove();
      const modalEdit = body.querySelector('.modal-delete');
      modalEdit.remove();
    });
    const ok = document.querySelector('.btn-ok');

    ok.addEventListener('click', (event) => {
      event.preventDefault();
      console.log(ok);
    });
  }
}
