
import { Task } from '../../interfaces/Task';
import {
  Container, Description, TodoValue, WrapperDescription
} from './styles';

interface Props {
  task: Task;
}

export const Todo = ({
  task
}: Props) => {
  return (
    <Container>
      <TodoValue>{task.title}</TodoValue>
      <WrapperDescription>
        <Description>{task.description}</Description>
        <Description>{task.data}</Description>
      </WrapperDescription>
    </Container>
  );
}
