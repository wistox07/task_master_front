import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Login from "./Pages/Authentication/Login";
import Task from "./Pages/Task/Task";
import PrivateRoute from "./Routes/PrivateRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PublicRoute from "./Routes/PublicRoute";
import { useLoginStore } from "./Stores/LoginStore";
import { useEffect } from "react";
import { setGlobalNavigate } from "./Services/NavigationService";

function App() {
  return (
    <Router>
      <AppRoutes />
      <ToastContainer />
    </Router>
  );
}

// Mover `useNavigate()` a un componente dentro de `<Router>`
function AppRoutes() {
  const navigate = useNavigate();

  useEffect(() => {
    setGlobalNavigate(navigate);
  }, [navigate]);

  return (
    <Routes>
      {/* Página de Login */}
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<Login />} />
      </Route>

      {/* Rutas protegidas */}
      <Route element={<PrivateRoute />}>
        <Route path="/task" element={<Task />} />
      </Route>

      {/* Página principal */}
      <Route path="/" element={<NavigateToTaskIfLoggedIn />} />
    </Routes>
  );
}

const NavigateToTaskIfLoggedIn = () => {
  const { isToken } = useLoginStore();
  return isToken ? <Navigate to="/task" /> : <Navigate to="/login" />;
};

export default App;
