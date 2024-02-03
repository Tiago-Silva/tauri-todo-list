import styled from "styled-components";
import { IoIosAddCircle } from 'react-icons/io';
// import { IoIosCloseCircle } from 'react-icons/io';
import { MdClose, MdArrowForwardIos } from "react-icons/md";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100vw;
  height: 100vw;
  /* background: #1A1A40; */
  padding: 2rem;
  border-radius: 5px;
  /* right: 0; */
  margin-top: 2.5rem;
`;

export const Title = styled.h3`
  color: #ffffff4d;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  bottom: 0;
  position: fixed;
  width: 100%;
  max-width: 90vw;
`;

export const InforForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #3c414a;
  border-bottom-left-radius: 30px;
  border-top-left-radius: 30px;
  width: 30%;
  height:  4rem;
  /* padding: 0 10px; */
`;

export const CloseIconContent = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px; 
  height: 30px; 
  background-color: #000000;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

export const CloseIcon = styled(MdClose)`
  font-size: 25px;
  color: #00FFFF;
`;

export const ContentInfoValue = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px; 
  height: 30px; 
  background-color: #51555a;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

export const TodoForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding: 0 10px;
`;

export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`;

export const InputTodo = styled.input`
  outline: none;
  background: none;
  
  padding: 0.5rem 1rem;
  background-color: #3c414a;
  margin-bottom: 0.2rem;
  width: auto;
  color: #fff;
  border-radius: 20px;

  &:focus {
    border: 1px solid #00FFFF; // Cor da borda quando o input está ativo
  }

  &::placeholder {
    color: #ffffff4d;
  }
`;

export const ContentIconForward = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px; 
  height: 40px; 
  background-color: #00FFFF;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

export const IconForward = styled(MdArrowForwardIos)`
  color: #FFFFFF;
  font-size: 30px;
`;

export const ButtonTodo = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export const IconAdd = styled(IoIosAddCircle)`
  color: #00FFFF;
  font-size: 60px;
`;