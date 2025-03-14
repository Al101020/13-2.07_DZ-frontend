import HelpDesk from './HelpDesk';
import TicketService from './TicketService';

const root = document.getElementById('root');

const ticketService = new TicketService();
const app = new HelpDesk(root, ticketService);

app.init();

// до БЫЛО  console.log(app);

// import TicketView from './TicketView';
// const ticketView = new TicketView;
// ticketView.load();// console.log(ticketView);
// ---------
//   console.log(app);
console.log(app.ticketService); // console.log(app.ticketService.list);
//   console.log(app.ticketService.tickets);
app.ticketService.list();
//   console.log(app.ticketService.tickets);
