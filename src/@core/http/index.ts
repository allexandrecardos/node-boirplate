import { HTTP_CODES } from "constants/http";
import { Response } from "express";

type Data = Object | Array<Object> | null;

type HttpResponseData = {
  res: Response;
  status: number;
  message: string;
  data?: Data;
};

export class HttpResponse {
  static success({
    res,
    message,
    data = null,
    status = HTTP_CODES.OK,
  }: HttpResponseData) {
    res.status(status).json({
      status: status,
      message: message,
      ...(data && { data: data }),
    });
  }

  static error({
    res,
    message,
    data = null,
    status = HTTP_CODES.INTERNAL_SERVER_ERROR,
  }: HttpResponseData) {
    res.status(status).json({
      status: status,
      message: message,
      ...(data && { data: data }),
    });
  }
}
