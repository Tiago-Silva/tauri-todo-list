

import { useState } from 'react';
import {
  ButtonTodo,
  CloseIconContent,
  Container, 
  CloseIcon, 
  IconAdd, 
  InforForm, 
  InputTodo, 
  Title,
  TodoForm,
  Wrapper,
  ContentInfoValue,
  ContentIconForward,
  IconForward,
  WrapperInput
} from './styles';
import { Todo } from '../Todo';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { taskSchema } from '../../interfaces/Task';
import { useSpring, animated } from '@react-spring/web';


export type taskData = z.infer<typeof taskSchema>;

interface Props {
  handleTaskTodo: (qtd: number) => void;
}

export const TodoList = ({
  handleTaskTodo
}: Props) => {
  const [tasks, setTasks] = useState<taskData[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [stap, setStap] = useState<number>(0);

  const { register, handleSubmit, reset } = useForm<taskData>();

  const handleAddTask = async  (response: taskData) => {
      console.log(JSON.stringify(response));
      setStap(0);
      setShowForm(!showForm);
      if (response) {
        setTasks([...tasks, response]);
      }

      handleTaskTodo(tasks.length + 1);

      reset();
  };

  const handleShowForm = () => {
    setStap((prevent) => prevent + 1);
    setShowForm(!showForm);
  }

  const handleButtonForwards = () => {
    setStap(0);
    setShowForm(!showForm);
  }

  const handleRemoveTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }

  const slideAnimation = useSpring({
    transform: showForm ? 'translateX(0%)' : 'translateX(100%)',
  });

  return (
    <Container>
      {stap == 1 ? (
        <animated.div 
          style={
            {
              ...slideAnimation, 
              position: 'fixed', 
              bottom: 0, 
              width: '100%' 
            }
          }
        >
          <Wrapper>
            <InforForm>
              <CloseIconContent>
                <CloseIcon />
              </CloseIconContent>
              <Title>Task name</Title>
              <ContentInfoValue>
                <h3>{stap}</h3>
              </ContentInfoValue>
            </InforForm>
            <TodoForm onSubmit={handleSubmit(handleAddTask)}>
              <WrapperInput>
                <InputTodo 
                  type="text" 
                  {...register('title')}
                  placeholder='Qual é a tarefa?' 
                />
                <InputTodo 
                  type="text" 
                  {...register('description')}
                  placeholder='Descrição' 
                />
                {/* <InputTodo 
                  type="text" 
                  {...register('data')}
                  placeholder='Data' 
                /> */}
                {/* <ButtonTodo type="submit">
                  <IconAdd />
                </ButtonTodo> */}
                
              </WrapperInput>
              <ContentIconForward type='submit'>
                <IconForward />
              </ContentIconForward>
            </TodoForm>

          </Wrapper>

        </animated.div>
        ) : (
          <ButtonTodo type="button" onClick={handleShowForm}>
            <IconAdd />
          </ButtonTodo>
        )
      }
      {tasks.map((task, index) =>
        <Todo 
          key={index} 
          task={task}
          handleRemoveTask={() => handleRemoveTask(index)}
        />
      )}
    </Container>
  );
}
