/**
 *  Класс для отображения тикетов на странице.
 *  Он содержит методы для генерации разметки тикета.
 * */
const container = document.querySelector('.container'); // console.log(container);

// Пока пустой закоментирую

export default class TicketView {
  constructor() {
    this.name = 'Ticket View';
  }

  list(tickets) {
    console.log(this.name);
    for (let i = 0; i < Object.entries(tickets).length; i++) {
      const ticketElement = document.createElement('div');
      ticketElement.className = 'ticketElement';
      container.appendChild(ticketElement);

      const ticket = document.createElement('div');
      ticket.className = 'ticket';
      ticketElement.appendChild(ticket);
      const inputDiv = document.createElement('div');
      inputDiv.className = 'checkboxDone';
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
      //   created.textContent = new Date(tickets[i].created).toISOString().split('T')[0];
      ticket.appendChild(created);
      const buttonEdit = document.createElement('div'); // insertAdjacentHTML('afterend', ) &#9998;
      buttonEdit.classList.add('buttonEdit');
      buttonEdit.textContent = '&#9998;';
      ticket.appendChild(buttonEdit);
      const buttonX = document.createElement('div'); // insertAdjacentHTML('afterend', ) &#9998;
      buttonX.classList.add('buttonX');
      buttonX.textContent = 'X';
      ticket.appendChild(buttonX);

      const description = document.createElement('div');
      description.className = 'description';
      description.textContent = tickets[i].description;
      ticketElement.appendChild(description);
    }
  }
}
