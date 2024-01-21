import { Router } from 'express';
import { resetTicketList } from "../controller/admin.controller.js"

const router = Router({ mergeParams: true });
router.use('/reset', resetTicketList);

export default router;