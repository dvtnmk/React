import React, { Component } from "react";
import TodoListComponent from "../../components/TodoList";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <TodoListComponent />;
  }
}

export default TodoList;
