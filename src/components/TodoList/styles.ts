import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100vw;
  height: 100vw;
  /* background: #1A1A40; */
  padding: 2rem;
  border-radius: 5px;
  right: 0;
`;

export const Title = styled.h1`
  
`;

export const TodoForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;
`;

export const InputTodo = styled.input`
  outline: none;
  background: none;
  border: 1px solid #8758ff;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  width: 300px;
  color: #fff;

  &::placeholder {
    color: #ffffff4d;
  }
`;

export const ButtonTodo = styled.button`
  background: #8758ff;
  color: #fff;
  border: none;
  padding: 0.55rem;
  cursor: pointer;
`;