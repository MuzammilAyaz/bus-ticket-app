import { Router } from 'express';
import { openTicketList, closedTicketList, getTicketList, getTicketByID, updateTicket } from '../controller/user.controller.js';

const router = Router();
router.get('/ticket-list', getTicketList);
router.get('/open-ticket-list', openTicketList);
router.get('/closed-ticket-list', closedTicketList);
router.get('/ticket/:id', getTicketByID);
router.patch('/ticket/', updateTicket);

export default router;