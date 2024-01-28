

import { useState } from 'react';
import {
  ButtonTodo,
  Container, 
  InputTodo, 
  Title,
  TodoForm
} from './styles';
import { Todo } from '../Todo';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { taskSchema } from '../../interfaces/Task';

export type taskData = z.infer<typeof taskSchema>;

export const TodoList = () => {
  const [tasks, setTasks] = useState<taskData[]>([]);

  const { register, handleSubmit } = useForm<taskData>();

  const handleAddTask = async  (response: taskData) => {
      console.log(JSON.stringify(response));
      if (response) {
        setTasks([...tasks, response]);
      }
  };
  return (
    <Container>
      <Title>Faça suas tarefas</Title>
      <TodoForm onSubmit={handleSubmit(handleAddTask)}>
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
        <InputTodo 
          type="text" 
          {...register('data')}
          placeholder='Data' 
        />
        <ButtonTodo type="submit">Adicione tarefa</ButtonTodo>
      </TodoForm>
      {tasks.map((task, index) =>
        <Todo 
          key={index} 
          task={task}
        />
      )}
    </Container>
  );
}
