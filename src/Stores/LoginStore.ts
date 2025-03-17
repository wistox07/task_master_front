//import {createWithEqualityFn} from 'zustand/traditional'
import {create} from 'zustand'
import { persist } from 'zustand/middleware'
import {LoginStore } from '../Types/LoginTypes'

export const useLoginStore = create<LoginStore>()(
  persist(
      (set) => ({
        isUser :  null,
        setUser : (value) => set(() => ({ isUser: value })),
        isToken : null ,
        setToken : (value) => set(() => ({ isToken: value })),
      }),
      {
        name: "auth", // Nombre en localStorage
        getStorage: () => localStorage, // Usa localStorage en lugar de sessionStorage
      }
  )
)