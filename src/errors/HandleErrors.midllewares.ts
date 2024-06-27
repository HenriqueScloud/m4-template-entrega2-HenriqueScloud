import { NextFunction, Request, Response } from "express";
import { AppErrors } from "./errors";
export class HandleErrors {
  execute(err: Error, req: Request, res: Response, Next: NextFunction) {
    if (err instanceof Error) {
      throw new AppErrors(400, err.message);
    } else {
      console.log(err);
      throw new AppErrors(500, "Internal Server Error");
    }
  }
}
