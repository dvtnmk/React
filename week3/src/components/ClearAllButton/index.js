import React, { Component } from "react";
import { DeleteAllButton } from "./styled";
class ClearAllButton extends Component {
  render() {
    const { onClear } = this.props;

    return (
      <div>
        <DeleteAllButton onClick={onClear}>Clear</DeleteAllButton>
      </div>
    );
  }
}

export default ClearAllButton;
