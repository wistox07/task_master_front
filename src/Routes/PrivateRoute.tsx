import { Navigate, Outlet } from "react-router-dom";
import { useLoginStore } from "../Stores/LoginStore";
 

const PrivateRoute = () => {
    const { isToken } = useLoginStore();

    //const isAuthenticated = !!localStorage.getItem("token"); // Verifica si hay token

    return isToken ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;