import { useForm } from "react-hook-form";
import {
  FormGroup,
  Label,
  Form,
  Container,
  Row,
  Card,
  CardBody,
  Col,
  Spinner,
} from "reactstrap";
import { toast } from "react-toastify";
import { ErrorMessage } from "@hookform/error-message";
import { useLoginStore } from "../../Stores/LoginStore";
import { LoginRequest } from "../../Types/LoginTypes";
import { loginService } from "../../Services/LoginService";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>();

  const { setUser, setToken, isToken, isLoading, setLoading } = useLoginStore();

  const navigate = useNavigate();
  const { login: callLogin } = loginService;

  //Se ejecuta cuando inicie el componente
  useEffect(() => {
    if (isToken) {
      navigate("/task");
    }
  }, []);

  const onSubmit = async (values: LoginRequest) => {
    setLoading(true);
    let response = await callLogin(values);
    setLoading(false);

    if (response.error) {
      console.log(response.message, response.message_detail);
      toast.error(response.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    setToken(response.token);
    setUser(response.user);
    navigate("/task");
  };

  return (
    <Container className="container vh-100 d-flex justify-content-center align-items-center">
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={8} md={6} lg={4}>
          <Card>
            <CardBody>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                  <Label htmlFor="email" className="d-block text-start">
                    Correo
                  </Label>
                  <input
                    type="text"
                    placeholder="Correo"
                    autoComplete="off"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    {...register("email", {
                      required: { value: true, message: "Campo obligatorio" },
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "El formato de correo es incorrecto",
                      },
                    })}
                  />

                  <ErrorMessage
                    errors={errors}
                    name="email"
                    render={({ message }) => (
                      <div className="text-danger">{message}</div>
                    )}
                  />
                </FormGroup>

                <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                  <Label htmlFor="password" className="d-block text-start">
                    Contraseña
                  </Label>
                  <input
                    placeholder="Contraseña"
                    autoComplete="off"
                    type={"password"}
                    className={`form-control pe-5 password-input ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Campo obligatorio",
                      },
                    })}
                  />

                  <ErrorMessage
                    errors={errors}
                    name="password"
                    render={({ message }) => (
                      <div className="text-danger">{message}</div>
                    )}
                  />
                </FormGroup>

                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading && <Spinner size="sm" color="light" padding="2" />}{" "}
                  Ingresar
                </button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
