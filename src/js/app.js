import HelpDesk from './HelpDesk';
import TicketService from './TicketService';

const root = document.getElementById('root');

const ticketService = new TicketService();
const app = new HelpDesk(root, ticketService);

app.init();

// до БЫЛО

console.log(ticketService);
console.log(app);
