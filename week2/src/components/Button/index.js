import React, { Component } from "react";
import { ButtonStyled } from "./styled";
// import { from } from "rxjs";
class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count || 0
    };
  }

  render() {
    const { count } = this.state; // destructuring
    return <ButtonStyled>Count {count}</ButtonStyled>;
  }
}

export default Button;
