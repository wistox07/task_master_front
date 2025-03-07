import {createWithEqualityFn} from 'zustand/traditional'
import axios from 'axios'
import { postLoginUrl } from '../Api/ApiUrl'
import { LoginStore , RequestLogin } from '../Types/LoginTypes'




export const useLoginStore = createWithEqualityFn<LoginStore>((set,get) => ({
    postLogin: async (data : RequestLogin) => {
        try {
          return await axios.post(postLoginUrl, data)
        } catch (error) {
          console.log(error)
        }
      }
}))