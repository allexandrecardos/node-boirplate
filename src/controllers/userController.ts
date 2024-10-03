import { Request, Response } from "express";

abstract class UserController {

  static async index(req: Request, res: Response) {
    return res.send('teste')
  }
}

export { UserController }