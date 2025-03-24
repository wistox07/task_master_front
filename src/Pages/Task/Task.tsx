import { Container } from "reactstrap";
import TaskSearch from "./TaskSearch";
import TaskTable from "./TaskTable";

export default function Task() {
  return (
    <Container>
      <TaskSearch />
      <TaskTable />
    </Container>
  );
}
