import "express-async-errors";
import express, { json } from "express";
import { bookRouters } from "./routers/books.router";
import { HandleErrors } from "./errors/HandleErrors.midllewares";
export const app = express();
const handleErros = new HandleErrors();
app.use(json());
app.use("/books", bookRouters);
app.use(handleErros.execute);
