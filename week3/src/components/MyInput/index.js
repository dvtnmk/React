import React, { Component } from "react";
import PropTypes from "prop-types";
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

MyInput.defaultProps = {
  value: "",
  onClear: () => {},
  onChange: () => {}
};

MyInput.PropTypes = {
  value: PropTypes.string.isRequired,
  onClear: PropTypes.func,
  onChange: PropTypes.func
};

export default MyInput;
