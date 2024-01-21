import { getTicketsList } from "../service/ticket.service.js"
import * as userService from "../service/user.service.js"
export const getTicketList = (req, res) => {
    const ticketList = getTicketsList();
    return res.status(200).json({ status: true, data: { ticket: ticketList } })
}

export const openTicketList = (req, res) => {
    const ticketList = getTicketsList();
    const openTickets = userService.openTicketList(ticketList);
    return res.status(200).json({ status: true, data: { ticket: openTickets } })
}

export const closedTicketList = (req, res) => {
    const ticketList = getTicketsList();
    const closedTickets = userService.closedTicketList(ticketList);
    return res.status(200).json({ status: true, data: { ticket: closedTickets } })
}

export const getTicketByID = (req, res) => {
    if (!req?.params?.id) {
        return res.status(400).json({ status: false, error: { message: "seat ID not found" } })
    }
    const ticketList = getTicketsList();
    const ticketDetails = userService.getTicketByID(ticketList, req.params.id)
    return res.status(200).json({ status: true, data: { ticket: ticketDetails } })
}

export const updateTicket = async(req, res) => {
    try {
        if (!req?.body?.id) {
            return res.status(400).json({ status: false, error: { message: "seat ID not found" } })
        }
        if (!req?.body?.userDetails?.name
            || !req?.body?.userDetails?.age
            || !req?.body?.userDetails?.gender
            || !req?.body?.userDetails?.proofID
            || !req?.body?.userDetails?.proofNO
        ) {
            return res.status(400).json({ status: false, error: { message: "Please provide user details" } })
        }
        const ticketDetails = await userService.updateTicket(req.body)
        return res.status(200).json({ status: true, data: ticketDetails })
    } catch (err) {
        logger.error(`Error in updateTicket API: ${err?.message ? err?.message : err}`);
        return res.status(500).json({ status: false })
    }
}