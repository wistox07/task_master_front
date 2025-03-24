const API_BASE = 'http://api.taskmaster:8080/api/v1'
//const API_BASE = 'http://localhost:9393/task_master_api/public/api/v1'
const API_BASE_AUTH = `${API_BASE}/auth`
const API_BASE_TASK = `${API_BASE}/tasks`

export const postLoginUrl = `${API_BASE_AUTH}/login`
export const getTaskMe = `${API_BASE_TASK}/me`

