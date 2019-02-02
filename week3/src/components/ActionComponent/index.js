import React from "react";
import { ButtonWrapper, EditButton, RemoveButton } from "./styled";
class Action extends React.Component {
  render() {
    return (
      <ButtonWrapper>
        <EditButton />
        <RemoveButton />
      </ButtonWrapper>
    );
  }
}

export default Action;
