import styled from "styled-components";

export const ButtonStyled = styled.button`
  color: white;
  background-color: black;
  padding: 5px 10px;
  border: 3px solid rgb(200, 20, 100);
  border-radius: 10px;
  font-size: 2em;
  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
  }
`;
