import express from "express";
import cors from "cors";
import * as middlewares from "./src/middleware/middleware.js";
// import route from "./src/routes";
import data from "./src/config/config.js"
import config from "./src/config/config.js";
import logger from "./src/utils/logger.js";
import { generateTicketList } from "./src/service/ticket.service.js";
import userRoutes from "./src/routes/user.routes.js"
import adminRoutes from "./src/routes/admin.routes.js"

const app = express();

app.use(cors({
    origin: '*',
}));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(middlewares.requestLogger);

app.use('/user', userRoutes);
app.use('/admin', adminRoutes);

app.use('*', middlewares.notFoundHandler);


app.listen(config.port, () => {
    generateTicketList()
    logger.info(`server started in port - ${config.port}`)
});

export default app