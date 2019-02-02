import React, { Component } from "react";
import MyInput from "../MyInput";
import TodoListItem from "../TodoListItem";
import { TodoListWrapper } from "./styled";

const renderTodoItem = todos => {
  return todos.map((todo, i) => <TodoListItem key={i} todo={todo} />);
};

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      todos: []
    };
  }

  clearMessage = () => {
    this.setState({ message: "" });
  };

  handleMessage = e => {
    const { value } = e.target;
    this.setState({ message: value });
  };

  onPushTodo = async e => {
    const { message } = this.state;
    if (message.trim() === "") return;
    await this.setState(({ todos }) => ({
      todos: [
        ...todos,
        {
          id: todos.length,
          message
        }
      ]
    }));
    this.clearMessage();
  };

  render() {
    const { message, todos } = this.state;
    return (
      <TodoListWrapper>
        <MyInput
          value={message}
          onClear={this.clearMessage}
          onChange={this.handleMessage}
          onEnter={this.onPushTodo}
        />
        {renderTodoItem(todos)}
      </TodoListWrapper>
    );
  }
}

export default TodoList;
