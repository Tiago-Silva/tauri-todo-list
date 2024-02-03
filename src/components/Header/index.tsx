

import {
  BellIcon,
  Container,
  Done,
  FolderIcon,
  GearIcon,
  InputTodo,
  SaveIcon,
  Todo,
  TodoText,
  TodoValue,
  Wrapper,
  WrapperIcon
} from './styles';

interface Props {
  todo: number;
}

export const Header = ({
  todo
}: Props) => {

  return (

    <Container>
      <Wrapper>
        <WrapperIcon onClick={() => {}}>
          <FolderIcon />
        </WrapperIcon>

        <WrapperIcon>
          <SaveIcon />
        </WrapperIcon>

        <Todo>
          <TodoText>
            To do (<TodoValue>{todo}</TodoValue>)
          </TodoText>
        </Todo>

        <Done>
          <TodoText>
            Done (<TodoValue>0</TodoValue>)
          </TodoText>
        </Done>

        <InputTodo placeholder='Search for tasks' />

        <WrapperIcon>
          <BellIcon />
        </WrapperIcon>

        <WrapperIcon>
          <GearIcon />
        </WrapperIcon>

      </Wrapper>
    </Container>
  );
}
