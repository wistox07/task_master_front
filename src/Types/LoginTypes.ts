export interface RequestLogin {
    email: string;
    password: string;
}

export interface LoginSuccessResponse {
    error : false;
    message : string;
    user: {
      id: number;
      name: string;
      email: string;
    };
    token : string ;
}

export interface LoginErrorResponse {
    error : false;
    message : string;
    message_detail: string | string[];
}

export type LoginResponse = LoginSuccessResponse | LoginErrorResponse;


export interface LoginStore {
    postLogin: (data: RequestLogin) => Promise<LoginResponse>;
}



