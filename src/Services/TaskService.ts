import api from "../Libs/axios";
import { getTaskMe } from "../Api/ApiUrl";
import { TaskMeResponse } from "../Types/TaskTypes";
import axios from "axios";

export const taskService = {
  getTasksMe: async (): Promise<TaskMeResponse> => {
    try {
      const response = await api.get<TaskMeResponse>(getTaskMe);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error("Sesión expirada");

        /*
            return error.response?.data || {
              error: true,
              message: "Error en la solicitud",
              message_detail: error.message || "No se pudo completar la solicitud",
            };
            */
      }

      throw new Error("Sesión expirada");

      /*
          return {
            error: true,
            message: "Error desconocido",
            message_detail: "No se pudo completar la solicitud",
          };
          */
    }
  },
};
