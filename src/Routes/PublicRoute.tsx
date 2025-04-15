import { Navigate, Outlet } from "react-router-dom";
import { useLoginStore } from "../Stores/LoginStore";
 

const PublicRoute = () => {
    const { isToken } = useLoginStore();
    return isToken ? <Navigate to="/task"/> : <Outlet /> ;
};

export default PublicRoute;