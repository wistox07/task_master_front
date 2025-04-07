import axios from "axios";
import { useLoginStore } from "../Stores/LoginStore";
import { getGlobalNavigate } from "../Services/NavigationService";

const api = axios.create();

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
/*
api.interceptors.response.use(
  (response) => response, // Si la respuesta es exitosa, la devuelve tal cual
  (error) => {
    if (error.response?.status === 401) {
      console.warn("Token expirado. Redirigiendo a login...");

      // Limpiar el estado del usuario en el store
      useLoginStore.getState().logoutToken(); // Asegúrate de tener esta función en tu store

      const navigate = getGlobalNavigate();
      if (navigate) {
        console.log("redirigendo a login");
        navigate("/login");
      }
    }
    return Promise.reject(error);
  }
);
*/

export default api;
