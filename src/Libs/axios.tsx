import axios from "axios";
import { useLoginStore } from "../Stores/LoginStore";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext/AuthContext";

const api = axios.create();
const navigate = useNavigate();

api.interceptors.request.use(
  (config) => {
    const token = useLoginStore.getState().isToken;
    if (token) {
      config.headers.token = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const setupInterceptors = (logout: any) => {
  api.interceptors.response.use(
    (response) => response, // Si la respuesta es exitosa, la devuelve tal cual
    (error) => {
      if (error.response?.status === 401) {
        logout();
        console.warn("Token expirado. Redirigiendo a login...");

        // Limpiar el estado del usuario en el store
        useLoginStore.getState().logoutToken(); // Asegúrate de tener esta función en tu store

        // Redirigir al login
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );
};

export default api;
