import React, { Component } from "react";
import { MyInputStyled, MyInputWrapper, ClearButton } from "./MyInputStyled";

class MyInput extends Component {
  render() {
    const { value, onClear, onChange } = this.props;
    return (
      <MyInputWrapper>
        <ClearButton onClick={onClear}>Clear</ClearButton>
        <MyInputStyled value={value} onChange={onChange} />
      </MyInputWrapper>
    );
  }
}

export default MyInput;
