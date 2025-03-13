/**
 *  Основной класс приложения
 * */
export default class HelpDesk {
  constructor(container, ticketService) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('This is not HTML element!');
    }
    this.container = container;
    this.ticketService = ticketService;
  }

  // async init() {
  //   console.info('init');
  //   const response = await fetch('http://localhost:7070/?method=allTickets');
  //   const tickets = await response.json();
  //   if (!response) {
  //     console.log('Ошибка !!!');
  //   } else {
  //     console.log(response);
  //   }
  // }

  init() {
    console.info('init');
  }
}
