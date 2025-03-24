import { useEffect } from "react";
import { useLoginStore } from "../../Stores/LoginStore";
import { taskService } from "../../Services/TaskService";
import { useTaskStore } from "../../Stores/TaskStore";
import ContentLoaderTable from "../../Components/Common/SkeletonLoading/ContentLoaderTable";
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Label,
  Row,
} from "reactstrap";

export default function TaskOld() {
  const { getTasksMe: callGetTaskMe } = taskService;
  const { isToken, setToken, setUser } = useLoginStore();
  const { isTasks, setTasks, isLoading, setLoading } = useTaskStore();

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  const editTask = () => {
    console.log("edit");
  };

  const deleteTask = () => {
    console.log("delete");
  };

  const getTasksMe = async () => {
    setLoading(true);
    let response = await callGetTaskMe();

    if (response.error) {
      console.log(response.message, response.message_detail);
      return;
    }
    setLoading(false);
    setTasks(response.tasks);
  };

  useEffect(() => {
    getTasksMe();
  }, []);

  return (
    <Container>
      {isToken && (
        <button className="btn btn-danger" onClick={logout}>
          CERRAR SESIÓN
        </button>
      )}

      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={8} md={6} lg={4}>
          <Card>
            <CardBody>
              <Form>
                <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                  <Label htmlFor="email" className="d-block text-start">
                    Correo
                  </Label>
                  <input
                    type="text"
                    placeholder="email"
                    autoComplete="off"
                    className="form-control"
                  />
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <Card>
            <CardBody>
              {isLoading ? (
                <ContentLoaderTable />
              ) : isTasks.length > 0 ? (
                <table className="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <td>Título</td>
                      <td>Decripción</td>
                      <td>Fecha de Vencimiento</td>
                      <td>Estado</td>
                      <td>Usuario</td>
                      <td>Acciones</td>
                    </tr>
                  </thead>
                  <tbody>
                    {isTasks.map((v, i) => (
                      <tr key={i}>
                        <td>{v.title}</td>
                        <td>{v.description}</td>
                        <td>{v.expiration_date}</td>
                        <td>{v.status}</td>
                        <td>{v.user}</td>
                        <td>
                          <button
                            className="btn btn-warning btn-sm me-2"
                            onClick={editTask}
                          >
                            Edit{" "}
                          </button>
                          <button
                            className="btn btn-danger btn-sm me-2"
                            onClick={deleteTask}
                          >
                            Delete{" "}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>No hay datos</p>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
