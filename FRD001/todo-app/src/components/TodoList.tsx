import { Component } from "react";
import TodoItem from "./TodoItem";

interface TodoTask {
  id: number;
  title: string;
}

interface State {
  items: TodoTask[];
  newTodoTitle: string;
}

// Class Component

class TodoList extends Component {
  state: State = {
    // items: [] as string[],
    // items: ["Buy milk", "Buy banana", "Buy cherry"],
    items: [] as TodoTask[],
    newTodoTitle: "",
  };

  componentDidMount() {
    this.addTodoItem("Buy milk");
    this.addTodoItem("Buy banana");
    this.addTodoItem("Buy cherry");
  }

  addTodoItem = (title: string) => {
    let id = this.state.items.length + 1;
    this.setState((state: State) => ({
      items: [{ id, title }, ...state.items],
    }));
  };

  render() {
    const { items, newTodoTitle } = this.state;
    return (
      <div>
        <h1>Todo List</h1>
        <p>by Alice</p>
        <div>
          <input
            value={newTodoTitle}
            onChange={(e) => this.setState({ newTodoTitle: e.target.value })}
          />
          {/* <button onClick={this.addTodoItem}>Add</button> */}
        </div>
        <div>Preview: {newTodoTitle}</div>
        {items.map((item) => (
          <TodoItem title={item.title} />
        ))}
        {/* <TodoItem title="Buy milk" />
        <TodoItem title="Buy banana" />
        <TodoItem title="Buy cherry" /> */}
      </div>
    );
  }
}

export default TodoList;
