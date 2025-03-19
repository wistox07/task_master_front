import axios from "axios";
import { useLoginStore } from "../Stores/LoginStore";

const api = axios.create();

api.interceptors.request.use((config) => {
const token =  useLoginStore.getState().isToken 
if (token) {
    config.headers.token = token;
}
return config;
}, (error) => {
return Promise.reject(error);
});
  
export default api;