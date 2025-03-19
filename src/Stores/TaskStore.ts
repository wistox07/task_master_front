import {createWithEqualityFn} from 'zustand/traditional'
import { TaskStoreTypes } from '../Types/TaskTypes'

export const useTaskStore = createWithEqualityFn<TaskStoreTypes>()(
      (set) => ({
        isTasks :  [],
        setTasks : (value) => set(() => ({ isTasks: value })),
      })
)