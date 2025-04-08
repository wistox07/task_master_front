import api from "../Libs/axios";
import { getTaskMe } from "../Api/ApiUrl";
import { TaskMeResponse } from "../Types/TaskTypes";
import { handleAxiosError } from "../Utils/errorHandler";

export const taskService = {
  getTasksMe: async (): Promise<TaskMeResponse> => {
    try {
      const response = await api.get<TaskMeResponse>(getTaskMe);
      return response.data;
    } catch (error) {
      return handleAxiosError(error);
    }
  },
};
