import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Pages/Authentication/Login'
import Task from './Pages/Task/Task';
import PrivateRoute from './Routes/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import PublicRoute from "./Routes/PublicRoute";



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
          </Routes>
    </Router>
    <ToastContainer></ToastContainer>
    </>

  )
}

export default App
