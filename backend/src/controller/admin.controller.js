import { resetTickets } from "../service/ticket.service.js";
export const resetTicketList = (req, res) => {
    resetTickets();
    return res.status(200).json({ status: true, data: { message: "Ticket list resetted" } })
}