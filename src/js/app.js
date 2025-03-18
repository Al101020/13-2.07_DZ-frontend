import HelpDesk from './HelpDesk';
import TicketService from './TicketService';

const root = document.getElementById('root');

const ticketService = new TicketService();
const app = new HelpDesk(root, ticketService);

app.init();

// до БЫЛО  console.log(app);

console.log(app.ticketService); // console.log(app.ticketService.list);
app.ticketService.list();
// ---------
const ticketBtnAdd = document.querySelector('.ticket-btn-add');
// console.log(ticketBtnAdd);
// console.log(app.ticketService.modalAdd);
// app.ticketService.modalAdd();
// ticketBtnAdd.addEventListener('click', app.ticketService);
ticketBtnAdd.addEventListener('click', (e) => {
  e.preventDefault(); // console.log('ticketBtnAdd');
  app.ticketService.modalAdd(e);
});
