import { NextFunction, Request, Response } from "express";
import { booksDatabase } from "../database/database";
export class bookExistedMiddlewares {
  execute(req: Request, res: Response, Next: NextFunction) {
    const { id } = req.params;
    if (!booksDatabase.some((book) => book.id === Number(id))) {
      return res.status(404).json({ error: "Book not found." });
    }
    return Next();
  }
}
