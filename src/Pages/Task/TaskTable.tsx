import { Card, CardBody, Col, Row } from "reactstrap";
import ContentLoaderTable from "../../Components/Common/SkeletonLoading/ContentLoaderTable";
import { useTaskStore } from "../../Stores/TaskStore";

export default function TaskTable() {
  const { isLoading, isTasks } = useTaskStore();

  const editTask = () => {};
  const deleteTask = () => {};

  return (
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
                          Edit
                        </button>
                        <button
                          className="btn btn-danger btn-sm me-2"
                          onClick={deleteTask}
                        >
                          Delete
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
  );
}
