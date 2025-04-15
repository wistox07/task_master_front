import { Card, CardBody, Col, Row } from "reactstrap";
import ContentLoaderTable from "../../Components/Common/SkeletonLoading/ContentLoaderTable";
import { useTaskStore } from "../../Stores/TaskStore";
import 'font-awesome/css/font-awesome.min.css';
import useDateRange from "../../Utils/useDateRange";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function TaskTable() {
  const { isLoading, isTasks } = useTaskStore();
  const { isDesde, isHasta } =useDateRange();

  console.log(isDesde,isHasta);

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
                    <td>Fecha de Registro</td>
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
                      <td>{}</td>
                      <td>{v.expiration_date}</td>
                      <td>{v.status}</td>
                      <td>{v.user}</td>
                      <td>
                        <div className="d-flex
                        ">
                          <button
                            className="btn btn-warning btn-sm me-2"
                            onClick={editTask}
                          >
                            <i className="fa fa-eye" aria-hidden="true"></i>
                          </button>
                          <button
                            className="btn btn-danger btn-sm me-2"
                            onClick={deleteTask}
                          >
                          <i className="fa fa-trash-o" aria-hidden="true"></i>
                          </button>
                        </div>
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
