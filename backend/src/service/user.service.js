import { updateTicketList } from "./ticket.service.js"
export const openTicketList = (ticketList) => {
    const openTicket = ticketList.filter(ticket => ticket.status)
    return openTicket
}

export const closedTicketList = (ticketList) => {
    const closedTicket = ticketList.filter(ticket => !ticket.status)
    return closedTicket
}

export const getTicketByID = (ticketList, id) => {
    const ticket = ticketList.filter(ticket => ticket.id == id)
    return ticket
}

export const updateTicket = async(updatedTicket) => {
    return await updateTicketList(updatedTicket)
}