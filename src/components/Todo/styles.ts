import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: flex-start;
  background: #8758ff;
  color: #fff;
  padding: 0.75rem 1rem;
  border-radius: 15px;
  margin-bottom: 1rem;
`;

export const TodoValue = styled.p`
  color: #fff;
  cursor: pointer;
`;

export const WrapperDescription = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Description = styled.h3`
  font-size: 10px;
  color: red;
`