import api from "../Libs/axios";
import { getTaskMe } from "../Api/ApiUrl";
import { TaskMeResponse } from "../Types/TaskTypes";
import axios from "axios";


export const taskService = {
    getTasksMe: async (data: any): Promise<TaskMeResponse> => {
        try {
          const response = await api.get<TaskMeResponse>(getTaskMe, data);
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