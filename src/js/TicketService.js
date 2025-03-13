/**
 *  Класс для связи с сервером.
 *  Содержит методы для отправки запросов на сервер и получения ответов
 * */
// import Ticket from './Ticket'
// console.log(Ticket);
// const ticketHelpDesk = new Ticket;
// console.log(ticketHelpDesk.id);

const container = document.querySelector('.container'); // console.log(container);

export default class TicketService {
  constructor() {
    this.tickets = null;
  }

  async list() {
    const response = await fetch('http://localhost:7070/?method=allTickets');
    this.tickets = await response.json(); // console.log(this.tickets);
    console.log(Object.entries(this.tickets).length);

    for (let i = 0; i < Object.entries(this.tickets).length; i++) {
      // console.log(this.tickets[i].name);
      const ticket = document.createElement('div');
      ticket.className = 'ticket';
      ticket.textContent = this.tickets[i].name;

      container.appendChild(ticket);
    }

    // for (const key in this.tickets) {
    //   // console.log(this.tickets[key].name);
    //   const ticket = document.createElement('div');
    //   ticket.className = 'ticket';
    //   ticket.textContent = this.tickets[key].name;

    //   container.appendChild(ticket);
    // }
  }
  // Пока пустое закоментирую

  // list(callback) {}
  // get(id, callback) {}
  // create(data, callback) {}
  // update(id, data, callback) {}
  // delete(id, callback) {}
}
