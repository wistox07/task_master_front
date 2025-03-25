import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Pages/Authentication/Login";
import Task from "./Pages/Task/Task";
import PrivateRoute from "./Routes/PrivateRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PublicRoute from "./Routes/PublicRoute";
import { useLoginStore } from "./Stores/LoginStore";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Página de Login */}
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
          </Route>

          {/* Rutas protegidas, solo accesibles si el usuario está autenticado */}
          <Route element={<PrivateRoute />}>
            <Route path="/task" element={<Task />} />
          </Route>

          {/* Página principal: decide si va a login o a task */}
          <Route path="/" element={<NavigateToTaskIfLoggedIn />} />
        </Routes>
      </Router>
      <ToastContainer></ToastContainer>
    </>
  );
}

const NavigateToTaskIfLoggedIn = () => {
  const { isToken } = useLoginStore();
  return isToken ? <Navigate to="/task" /> : <Navigate to="/login" />;
};

export default App;
