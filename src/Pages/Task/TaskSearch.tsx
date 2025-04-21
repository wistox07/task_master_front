import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import {
  Card,
  CardBody,
  CardFooter,
  Col,
  Form,
  FormGroup,
  Label,
  Row,
  Spinner,
} from "reactstrap";
import { useTaskStore } from "../../Stores/TaskStore";
import { taskService } from "../../Services/TaskService";
import { useEffect } from "react";
import { useErrorProcessHandler } from "../../Utils/ErrorProcessHandler";
import useDateRange from "../../Utils/useDateRange";

export default function TaskSearch() {
  const { setLoading, setTasks , isLoading} = useTaskStore();
  const { isDesde, isHasta } =useDateRange();
  const { getTasksMe: callGetTaskMe } = taskService;
  const handleError = useErrorProcessHandler();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const searchTask = async () => {
    setLoading(true);
    let response = await callGetTaskMe({
      page : 1,
      per_page : 10
    });

    if (response.error) {
      setLoading(false);
      setTasks([]);
      handleError(response)
      return
    }
    setTasks(response.tasks);
    setLoading(false);
  };

  useEffect(() => {
    setValue('init_date', isDesde)
    setValue('end_date', isHasta)

  },[])

  return (

    <Row className="w-100 justify-content-center">
      <Col xs={12} sm={8} md={6} lg={4}>
        <Form onSubmit={handleSubmit(searchTask)}>
          <Card>
            <CardBody>
              <Row>
                <Col xs={12} sm={6}>
                  <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                    <Label htmlFor="init_date" className="">
                      Fecha Inicio
                    </Label>
                    <input
                      type="date"
                      className="form-control"
                      {...register("init_date", {
                        required: { value: true, message: "Campo Obligatorio" },
                      })}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="init_date"
                      render={({ message }) => (
                        <div className="text-danger">{message}</div>
                      )}
                    />
                  </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                  <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                    <Label htmlFor="end_date" className="d-block text-start">
                      Fecha Fin
                    </Label>
                    <input
                      type="date"
                      className="form-control"
                      {...register("end_date", {
                        required: { value: true, message: "Campo Obligatorio" },
                      })}
                    />
                    <ErrorMessage
                      name="end_date"
                      errors={errors}
                      render={({ message }) => (
                        <div className="text-danger">{message}</div>
                      )}
                    />
                  </FormGroup>
                </Col>
                <Col xs={12}>
                  <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                    <Label htmlFor="estado" className="d-block text-start">
                      Estado
                    </Label>
                    <select
                      className="form-select"
                      {...register("status", {
                        required: { value: true, message: "Campo Obligatorio" },
                      })}
                    >
                      <option value={"gato"}>Gato</option>
                    </select>
                    <ErrorMessage
                      name="status"
                      errors={errors}
                      render={({ message }) => (
                        <div className="text-danger">{message}</div>
                      )}
                    />
                  </FormGroup>
                </Col>
              </Row>
            </CardBody>
            <CardFooter className="text-end d-flex justify-content-end">
              {/*dataToExport.length > 0 && (
                  <UncontrolledDropdown className="me-2" direction="down">
                    <DropdownToggle className="px-2" caret color="info">
                      <i className="ri-download-cloud-2-line pe-1"></i>
                      <span className="d-none d-md-inline">Exportar</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem onClick={generateActFormaPagoPDF}>
                        <i className="ri-file-pdf-line align-bottom me-1"></i>
                        PDF
                      </DropdownItem>

                      <DropdownItem onClick={generateActFormaPagoExcel}>
                        <i className="ri-file-excel-2-line align-bottom me-1"></i>
                        Excel
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                )*/}

              <button className="btn btn-primary" type="submit" disabled=
              {isLoading}>
                {isLoading && <Spinner size="sm" color="light" className="me-2"/>}
                Buscar
              </button>
            </CardFooter>
          </Card>
        </Form>
      </Col>
    </Row>
  );
}
