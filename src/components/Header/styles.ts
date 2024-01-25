import styled from "styled-components";
import { PiFolderNotchOpen } from "react-icons/pi";
import { BiSave, BiBell, BiCog } from "react-icons/bi";


export const Container = styled.nav`
  width: 100%;
  flex: 1;
  background-color: #30353c;
  top: 0;
  right: 0;
  position: fixed;
  padding: 10px;
  /* gap: 10px; */
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 40px;
  /* margin: 0 20px; */
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: #3c414a;
  padding: 0 10px;
  gap: 10px;
`;

export const WrapperIcon = styled.button`
  background: none;
  cursor: pointer;
  border: 0;
`;

export const FolderIcon = styled(PiFolderNotchOpen)`
  color: #adb3bd;
  font-size: 20px;
`;

export const SaveIcon = styled(BiSave)`
  color: #adb3bd;
  font-size: 20px;
`;

export const Todo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 60%;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: #51555a;
  padding: 0 5px;
`;

export const TodoText = styled.h3`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #adb3bd;
  font-size: 14px;
  font-weight: 500;
`;

export const TodoValue = styled.h3`
  color: #00FFFF;
  font-size: 14px;
  font-weight: 450;
`;

export const Done = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 60%;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: #2a2e34;
  padding: 0 5px;
`;

export const InputTodo = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 60%;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: #2a2e34;
  padding: 0 5px;

  color: #adb3bd;
  font-size: 14px;
  font-weight: 500;

  &::placeholder {
    padding-left: 5px;
  }
`;

export const BellIcon = styled(BiBell)`
  color: #00FFFF;
  font-size: 20px;
`;

export const GearIcon = styled(BiCog)`
  color: #adb3bd;
  font-size: 20px;
`;