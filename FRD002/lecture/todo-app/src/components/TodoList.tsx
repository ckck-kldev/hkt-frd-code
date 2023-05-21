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

  addTodoItem(title: string) {
    this.setState((state: State): Partial<State> => {
      if (state.items.find((item) => item.title === title)) {
        return state;
      }
      let id = state.items.length + 1;
      return {
        items: [{ id, title }, ...state.items],
        newTodoTitle: "",
      };
    });
  }

  removeTodoItem(id: number) {
    this.setState({
      items: this.state.items.filter((item) => item.id !== id),
    });
  }

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
            onKeyDown={(e) =>
              e.key === "Enter" && this.addTodoItem(newTodoTitle)
            }
          />
          <button onClick={() => this.addTodoItem(newTodoTitle)}>Add</button>
        </div>
        <div>preview: {newTodoTitle}</div>
        {items.map((item) => (
          <TodoItem key={item.id} title={item.title} />
        ))}
      </div>
    );
  }
}

export default TodoList;
