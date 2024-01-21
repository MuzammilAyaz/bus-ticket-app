import { ticketListGenerator } from "../utils/generate-ticket.js";

let ticketList = [];

export const generateTicketList = () => {
    ticketList = ticketListGenerator(40, true);
    console.log("Ticket List:", ticketList);
}

export const getTicketsList = () => {
    return ticketList
}

export const updateTicketList = async (updatedTicket) => {
    for (let i = 0; i < ticketList.length; i++) {
        if (ticketList[i].id == updatedTicket?.id) {
            ticketList[i] = updatedTicket
            return { message: "ticket updated successfully" }
        }
    }
    return { message: "Unable to find ticket" }
}

export const resetTickets = () => {
    return generateTicketList()
}