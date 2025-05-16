import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" }
      ]
    };
  }
  handleAdd = (value) => {
    this.setState((prevState) => {
      return {
        todos: [...prevState.todos, {text: value}]
      }
    });
  };

  handleRemove = (row) => {
    this.setState({ todos: this.state.todos.filter((elem) => elem != row) });
  };
  render() {
    return (
      <div className="App">
        <span>Todo</span>
        <Form
          handleAdd={this.handleAdd.bind(this)}
        />
        <List todos={this.state.todos} handleRemove={this.handleRemove} />

      </div>
    );
  }
}
