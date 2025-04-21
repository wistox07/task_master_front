import api from "../Libs/axios";
import { getTaskMe } from "../Api/ApiUrl";
import { StatusResponse } from "../Types/StatusTypes";
import { handleAxiosError } from "../Utils/errorHandler";



export const taskService = {
  getTasksMe: async (params : TaskMeRequest): Promise<TaskMeResponse> => {
    try {
      const response = await api.get<TaskMeResponse>(getTaskMe,{ params
      });
      return response.data;
    } catch (error) {
      return handleAxiosError(error);
    }
  },
};
