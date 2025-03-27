import { createContext, ReactNode, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginStore } from "../Stores/LoginStore";

// Crear el contexto
interface AuthContextType {
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Proveedor del contexto
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const { setUser, setToken } = useLoginStore();

  // Función para cerrar sesión
  const logout = () => {
    setUser(null);
    setToken(null);
    navigate("/login"); // Redirigir al login
  };

  return (
    <AuthContext.Provider value={{ logout }}>
      {children} {/* Aquí se renderizan los componentes hijos */}
    </AuthContext.Provider>
  );
};

// Hook para acceder al contexto
export const useAuth = () => useContext(AuthContext);
