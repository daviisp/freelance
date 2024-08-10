import express from "express";
import { MessageController } from "./controllers/message-controller";

const routes = express.Router();

routes.get("/messages", MessageController.index);
routes.post("/messages", MessageController.save);

export { routes };
