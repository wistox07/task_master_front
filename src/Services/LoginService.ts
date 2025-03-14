import axios
 from "axios";

import { postLoginUrl } from "../Api/ApiUrl";


import { LoginRequest, LoginResponse } from "../Types/LoginTypes";




export const loginService = {

    login: async (data: LoginRequest): Promise<LoginResponse> => {
        try {
          const response = await axios.post<LoginResponse>(postLoginUrl, data);
          return response.data
        } catch (error) {
          if (axios.isAxiosError(error)) {
            return error.response?.data || {
              error: true,
              message: "Error en la solicitud",
              message_detail: error.message || "No se pudo completar la solicitud",
            };
          }
          return {
            error: true,
            message: "Error desconocido",
            message_detail: "No se pudo completar la solicitud",
          };
        }
      },
}