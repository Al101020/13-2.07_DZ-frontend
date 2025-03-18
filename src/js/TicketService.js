/**
 *  Класс для связи с сервером.
 *  Содержит методы для отправки запросов на сервер и получения ответов
 * */
import TicketView from './TicketView';

const ticketView = new TicketView();

// import { ticketView } from './TicketView'
// import Ticket from './Ticket'
// console.log(Ticket);
// const ticketHelpDesk = new Ticket;
// console.log(ticketHelpDesk.id);

export default class TicketService {
  constructor() {
    this.tickets = null;
  }

  async list() {
    const response = await fetch('http://localhost:7070/?method=allTickets');
    this.tickets = await response.json(); // console.log(Object.entries(this.tickets).length);

    ticketView.list(this.tickets);
  }

  modalAdd(e) {
    ticketView.modalAdd(e);
    const body = document.querySelector('body');
    body.insertAdjacentHTML('beforeEnd', '<div class="modal-overlay" id="modal-overlay"></div>');
    const cansel = document.querySelector('.btnCancel');
    cansel.addEventListener('click', (event) => {
      event.preventDefault();
      const modalOverlay = body.querySelector('.modal-overlay');
      modalOverlay.remove();
      const modalAdd = body.querySelector('.modal-add');
      modalAdd.remove();
    });
    const ok = document.querySelector('.btnOk');
    console.log(ok);
  }

  // Пока пустое закоментирую

  // list(callback) {}
  // get(id, callback) {}
  // create(data, callback) {}
  // update(id, data, callback) {}
  // delete(id, callback) {}
}
