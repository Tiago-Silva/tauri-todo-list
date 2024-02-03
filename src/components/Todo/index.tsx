
import { Task } from '../../interfaces/Task';
import {
  ButtonIcon,
  Container, 
  Description, 
  EditIcon, 
  TodoValue, 
  TrashIcon, 
  WrapperContent, 
  WrapperDescription, 
  WrapperIcon
} from './styles';

interface Props {
  task: Task;
  handleRemoveTask: () => void;
}

export const Todo = ({
  task,
  handleRemoveTask
}: Props) => {
  return (
    <Container>
      <WrapperContent>
        <TodoValue>{task.title}</TodoValue>
        <WrapperDescription>
          <Description>{task.description}</Description>
          <Description>{task.data}</Description>
        </WrapperDescription>
      </WrapperContent>
      <WrapperIcon>
        <ButtonIcon>
          <EditIcon />
        </ButtonIcon>
        <ButtonIcon onClick={handleRemoveTask}>
          <TrashIcon />
        </ButtonIcon>
      </WrapperIcon>
    </Container>
  );
}
