

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

export const Header = () => {

  const handleFolderIcon: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log('Folder icon clicked');
  }

  return (
    <Container>
      <Wrapper>
        <WrapperIcon onClick={handleFolderIcon}>
          <FolderIcon />
        </WrapperIcon>

        <WrapperIcon>
          <SaveIcon />
        </WrapperIcon>

        <Todo>
          <TodoText>
            To do (<TodoValue>5</TodoValue>)
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
