export interface TaskSaveRequest {
    title: string;
    description: string;
    expiration_date : Date;
    status_id : number
}

export interface TaskMeSuccessResponse {
    error : false;
    message : string;
    tasks : Task[];
    token : string ;
}

export interface Task  {
    id : number;
    title : string ;
    description : string ;
    expiration_date : Date ;
    status : string ,
    user : string ,
}

export interface TaskMeErrorResponse {
    error : true;
    message : string;
    message_detail: string | string[];
}

export type TaskMeResponse = TaskMeSuccessResponse | TaskMeErrorResponse;


export type TaskStoreTypes = {
    isTasks : Task[] | [] ;
    setTasks: (value: Task[]  | []) => void;
}



