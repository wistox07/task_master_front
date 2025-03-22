//import {createWithEqualityFn} from 'zustand/traditional'
import {create} from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import {LoginStoreTypes } from '../Types/LoginTypes'

export const useLoginStore = create<LoginStoreTypes>()(
  persist(
      (set) => ({
        isUser :  null,
        setUser : (value) => set(() => ({ isUser: value })),
        isToken : null ,
        setToken : (value) => set(() => ({ isToken: value })),
        isLoading : false,
        setLoading : (value) => set(() => ({ isLoading: value })),
      }),
      {
        name: "auth", // Nombre en localStorage
        storage: createJSONStorage(() => localStorage), // Usa localStorage en lugar de sessionStorage
        partialize: (state) => ({
          isUser: state.isUser,
          isToken: state.isToken,
          // Excluimos isLoading y setLoading
        }),
  
      }
  )
)