import axios from "axios";
import { ApiErrorResponse } from "../Types/ShareTypes";

export function handleAxiosError(error: unknown): ApiErrorResponse {
  if (axios.isAxiosError(error)) {
    if (error.response?.data) {
      const status = error.response.status;
      const data = error.response.data;
      return {
        code: status,
        ...data,
      };
    } else {
      return {
        code: 1,
        error: true,
        message: "Error en la solicitud",
        message_detail: "No se pudo completar la solicitud",
      };
    }
  }
  return {
    code: 0,
    error: true,
    message: "Error desconocido",
    message_detail: "Se produjo un error desconocido",
  };
}
