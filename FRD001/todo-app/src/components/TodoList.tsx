import { Component } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

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
    items: [] as TodoTask[],
    newTodoTitle: "",
  };

  componentDidMount() {
    this.addTodoItem("Buy milk");
    this.addTodoItem("Buy banana");
    this.addTodoItem("Buy cherry");
  }

  // addTodoItem = (title: string) => {
  //   this.setState((state: State): Partial<State> => {
  //     if (state.items.find((item) => item.title === title)) {
  //       return {};
  //     }
  //     let id = this.state.items.length + 1;
  //     return {
  //       items: [{ id, title }, ...state.items],
  //       newTodoTitle: "",
  //     };
  //   });
  // };

  addTodoItem = (title: string) => {
    this.setState((prevState: State) => {
      const { items } = prevState;
      if (items.find((item) => item.title === title)) {
        return {}; // Return an empty object to indicate no state update is needed
      }

      const newItem: TodoTask = {
        id: items.length + 1,
        title: title,
      };

      return {
        items: [newItem, ...items],
        newTodoTitle: "",
      };
    });
  };

  render() {
    const { items, newTodoTitle } = this.state;
    return (
      <div>
        <h1 className={styles.title}>Todo List</h1>
        <p>by Alice</p>
        <div>
          <input
            value={newTodoTitle}
            onChange={(e) => this.setState({ newTodoTitle: e.target.value })}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                this.addTodoItem(newTodoTitle);
              }
            }}
          />
          <button onClick={() => this.addTodoItem(newTodoTitle)}>Add</button>
        </div>
        <div>Preview: {newTodoTitle}</div>
        {items.map((item) => (
          <TodoItem key={item.id} title={item.title} />
        ))}
        {/* <TodoItem title="Buy milk" />
        <TodoItem title="Buy banana" />
        <TodoItem title="Buy cherry" /> */}
      </div>
    );
  }
}

export default TodoList;
