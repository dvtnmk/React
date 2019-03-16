import React, { Component } from "react";
import { ButtonStyled } from "./styled";
// import './styles.scss';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count || 0 // null
    };
  }

  conditionClick = () => {
    const { handle } = this.props;
    handle(); // === this.increment();
  };

  render() {
    const { count } = this.state;
    return (
      <ButtonStyled onClick={this.conditionClick}>Count {count}</ButtonStyled>
    );
  }
}

export default Button;
