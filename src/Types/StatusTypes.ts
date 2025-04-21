import { ApiErrorResponse } from "./ShareTypes";

export interface StatusSuccessResponse {
  error: false;
  message: string;
  statuses: Status[];
}

export interface Status {
  id: number;
  name : string ;
  description : string ; 
}

export type StatusResponse = StatusSuccessResponse | ApiErrorResponse;

/*
export type TaskStoreTypes = {
  isTasks: Task[] | [];
  setTasks: (value: Task[] | []) => void;
  isLoading: boolean;
  setLoading: (value: boolean) => void;
};
*/
