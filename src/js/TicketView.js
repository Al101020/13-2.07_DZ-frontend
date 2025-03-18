/**
 *  Класс для отображения тикетов на странице.
 *  Он содержит методы для генерации разметки тикета.
 * */
const container = document.querySelector('.container'); // console.log(container);

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
      buttonEdit.addEventListener('click', () => {
        console.log('button-edit');
      });
      buttonEdit.insertAdjacentHTML('afterbegin', '<p>&#9998;</p>');
      const buttonX = document.createElement('div');
      buttonX.classList.add('buttonX');
      buttonX.textContent = 'X';
      buttonX.addEventListener('click', () => {
        console.log('buttonX');
      });
      ticket.appendChild(buttonX);

      const description = document.createElement('div');
      description.className = 'description';
      description.textContent = tickets[i].description;
      ticketElement.appendChild(description);
    }
  }

  modalAdd(e) {
    e.preventDefault();
    // console.log('ticketBtnAdd');
    const body = document.querySelector('body');
    const modal = document.createElement('div');
    modal.insertAdjacentHTML('afterbegin', '<div class="title">Добавить тикет</div>');
    modal.classList.add('modal-add');
    body.appendChild(modal);

    const modalAdd = document.querySelector('.modal-add');

    const divForm = document.createElement('div');
    divForm.classList.add('divForm');
    // divForm.textContent = 'divForm видно?';
    const formAdd = document.createElement('form');
    formAdd.classList.add('form');

    const divButton = document.createElement('div');
    divButton.classList.add('divButton');
    divButton.insertAdjacentHTML('afterbegin', '<button class="btnOk">Ok</button>');
    divButton.insertAdjacentHTML('afterbegin', '<button class="btnCancel">Отмена</button>');
    formAdd.appendChild(divButton); // ???
    formAdd.insertAdjacentHTML('afterbegin', '<input type="text" class="dd" name="name" /><br />');
    formAdd.insertAdjacentHTML('afterbegin', '<label for="d">Подробное описание</label><br />');
    formAdd.insertAdjacentHTML('afterbegin', '<input type="text" class="d" name="name" /><br />');
    formAdd.insertAdjacentHTML('afterbegin', '<label for="d">Краткое описание</label><br />');
    divForm.appendChild(formAdd);

    modalAdd.appendChild(divForm);
  }
}
