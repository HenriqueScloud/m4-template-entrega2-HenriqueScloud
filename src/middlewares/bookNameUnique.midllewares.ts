import { NextFunction, Request, Response } from "express";
import { booksDatabase } from "../database/database";
export class bookNameUnique {
  execute(req: Request, res: Response, Next: NextFunction) {
    const { name } = req.body;
    if (booksDatabase.some((book) => book.name === name)) {
      return res.status(409).json({ error: "Book already registered." });
    }
    return Next();
  }
}
