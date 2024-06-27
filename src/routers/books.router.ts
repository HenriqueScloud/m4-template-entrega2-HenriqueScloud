import { booksControllers } from "./../controllers/books.controllers";
import { Router } from "express";
import { bookNameUnique } from "../middlewares/bookNameUnique.midllewares";
import { bookExistedMiddlewares } from "../middlewares/bookExisted.middlewares";
export const bookRouters = Router();
const BooksControllers = new booksControllers();
const BookExistedMiddlewares = new bookExistedMiddlewares();
const BookNameUnique = new bookNameUnique();
bookRouters.get("/", BooksControllers.getBooks);
bookRouters.post("/", BookNameUnique.execute, BooksControllers.createBooks);
bookRouters.get(
  "/:id",
  BookExistedMiddlewares.execute,
  BooksControllers.getIdBook
);
bookRouters.patch(
  "/:id",
  BookExistedMiddlewares.execute,
  BookNameUnique.execute,
  BooksControllers.updateBooks
);
bookRouters.delete(
  "/:id",
  BookExistedMiddlewares.execute,
  BooksControllers.deleteBooks
);
