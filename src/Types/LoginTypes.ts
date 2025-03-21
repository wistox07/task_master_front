export interface LoginRequest {
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

export interface User  {
    name : string,
    email : string ,
}

export interface LoginErrorResponse {
    error : true;
    message : string;
    message_detail: string | string[];
}

export type LoginResponse = LoginSuccessResponse | LoginErrorResponse;


export type LoginStoreTypes = {
    isUser: User | null; // Especificamos que puede ser un objeto de respuesta o null
    setUser: (value: User | null) => void;
    isToken : string | null;
    setToken :  (value: string | null) => void;
    isLoading : boolean,
    setLoading: (value: boolean) => void;
    //postLogin: (data: LoginRequest) => Promise<void>;
}




