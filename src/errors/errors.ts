export class AppErrors extends Error {
  status: number;
  constructor(statusCode: number, massege: string) {
    super(massege);
    this.status = statusCode;
  }
}
