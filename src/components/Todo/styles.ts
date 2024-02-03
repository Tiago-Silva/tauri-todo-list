import styled, { keyframes } from "styled-components";
import { FaEdit, FaTrash } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: flex-start;
  background: #3c414a;
  color: #fff;
  padding: 0.75rem 1rem;
  border-radius: 20px;
  margin-bottom: 1rem;
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`;

export const TodoValue = styled.p`
  font-size: 1rem;
  color: #adb3bd;
  cursor: pointer;
`;

export const WrapperDescription = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Description = styled.h3`
  font-size: 0.8rem;
  color: #FF0000;
`;

export const WrapperIcon = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-end;
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(0, 255, 255, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(0, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(0, 255, 255, 0);
  }
`;

export const ButtonIcon = styled.button`
  cursor: pointer;
  border-radius: 50%;

  &:hover {
    animation: ${pulse} 2s infinite;
  }
`;

export const EditIcon = styled(FaEdit)`
  color: #adb3bd;
  font-size: 20px;
`;

export const TrashIcon = styled(FaTrash)`
  color: #adb3bd;
  font-size: 20px;
`;