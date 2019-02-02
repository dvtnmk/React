import React, { Component } from "react";
import PropTypes from "prop-types";
import { MyInputStyled, MyInputWrapper, ClearButton } from "./MyInputStyled";

class MyInput extends Component {
  onEnter = e => {
    if (e.key === "Enter") {
      this.props.onEnter();
    }
  };
  render() {
    const { value, onClear, onChange } = this.props;
    return (
      <MyInputWrapper>
        <ClearButton onClick={onClear}>clear</ClearButton>
        <MyInputStyled
          value={value}
          onChange={onChange}
          onKeyDown={this.onEnter}
        />
      </MyInputWrapper>
    );
  }
}

MyInput.defaultProps = {
  value: "",
  onClear: () => {},
  onChange: () => {}
};

MyInput.propTypes = {
  value: PropTypes.string,
  onClear: PropTypes.func,
  onChange: PropTypes.func
};

export default MyInput;
