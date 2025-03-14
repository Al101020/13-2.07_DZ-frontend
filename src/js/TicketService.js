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

  // Пока пустое закоментирую

  // list(callback) {}
  // get(id, callback) {}
  // create(data, callback) {}
  // update(id, data, callback) {}
  // delete(id, callback) {}
}
