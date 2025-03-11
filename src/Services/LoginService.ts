import axios
 from "axios";

import { postLoginUrl } from "../Api/ApiUrl";


import { LoginRequest, LoginResponse } from "../Types/LoginTypes";
 postLoginUrl



export const loginService = {

    login: async (data: LoginRequest): Promise<LoginResponse> => {
        try {
          const response = await axios.post<LoginResponse>(postLoginUrl, data);
          return response.data
        } catch (error) {
          return error.response?.data || { 
            error: true, 
            message: "Error desconocido", 
            message_detail: "No se pudo completar la solicitud"
          };
        }
      },
}