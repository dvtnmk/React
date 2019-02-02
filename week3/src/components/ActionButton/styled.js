import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEraser } from "@fortawesome/free-solid-svg-icons";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EditButton = props => (
  <FontAwesomeIcon icon={faEdit} {...props} size="2x" />
);

const RemoveButton = props => (
  <FontAwesomeIcon icon={faEraser} {...props} size="2x" />
);

export { ButtonWrapper, EditButton, RemoveButton };
