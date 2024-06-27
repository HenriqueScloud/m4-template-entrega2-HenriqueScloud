import { booksServices } from "./../services/books.services";
import { Request, Response } from "express";
export class booksControllers {
  getBooks(req: Request, res: Response) {
    const BooksServices = new booksServices();
    const getBooks = BooksServices.getBooks();
    return res.status(200).json(getBooks);
  }
  getIdBook(req: Request, res: Response): Response {
    const BooksServices = new booksServices();
    const getIdBooks = BooksServices.getIdBook(req.params.id);
    return res.status(200).json(getIdBooks);
  }
  createBooks(req: Request, res: Response): Response {
    const BooksServices = new booksServices();
    const createBooks = BooksServices.createBooks(
      req.body.name,
      req.body.pages,
      req.body.category
    );
    return res.status(201).json(createBooks);
  }
  updateBooks(req: Request, res: Response): Response {
    const BooksServices = new booksServices();
    const updateBooks = BooksServices.updateBooks(req.params.id, req.body);
    return res.status(200).json(updateBooks);
  }
  deleteBooks(req: Request, res: Response): Response {
    const BooksServices = new booksServices();
    const deleteBook = BooksServices.deleteBooks(req.params.id);
    return res.status(204).json();
  }
}
