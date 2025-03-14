import {createWithEqualityFn} from 'zustand/traditional'
import {LoginResponse } from '../Types/LoginTypes'
import { loginService } from '../Services/LoginService'




export const useLoginStore = createWithEqualityFn<LoginStore>((set,get) => ({
  /*
    isData : {} : ,
    setData : (value) => set(() => ({ isData: value })),


    postLogin: async (data : RequestLogin) => {

      const response = await loginService.login(data);
      get().setData(response) // Llamamos al servicio
    }
    */
}))