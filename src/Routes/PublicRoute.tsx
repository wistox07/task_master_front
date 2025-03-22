import { Navigate, Outlet } from "react-router-dom";
import { useLoginStore } from "../Stores/LoginStore";
 

const PublicRoute = () => {
    const { isToken } = useLoginStore();

    //const isAuthenticated = !!localStorage.getItem("token"); // Verifica si hay token

    return isToken ? <Navigate to="/task"/> : <Outlet /> ;
};

export default PublicRoute;