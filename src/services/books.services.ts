import { IdGenerator, booksDatabase } from "../database/database";
import { IBook } from "../interfaces/books.interfaces";
export class booksServices {
  getBooks() {
    return booksDatabase;
  }
  getIdBook(id: string) {
    return booksDatabase.find((book) => book.id === Number(id));
  }
  createBooks(name: string, pages: number, category: string) {
    const newBook: IBook = {
      id: IdGenerator(),
      name,
      pages,
      category,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    booksDatabase.push(newBook);
    return newBook;
  }
  updateBooks(id: string, body: any) {
    const book = booksDatabase[Number(id)];
    const newBookUpdate: IBook = {
      id: Number(id),
      name: body.name ?? book.name,
      pages: body.pages ? Number(body.pages) : book.pages,
      category: body.category ?? book.category,
      createdAt: book?.createdAt,
      updatedAt: new Date(),
    };
    const index = booksDatabase.findIndex((book) => book.id === Number(id));
    booksDatabase.splice(index, 1, newBookUpdate);
    return newBookUpdate;
  }
  deleteBooks(id: string) {
    const index = booksDatabase.findIndex((book) => book.id === Number(id));
    booksDatabase.splice(index, 1);
  }
}
