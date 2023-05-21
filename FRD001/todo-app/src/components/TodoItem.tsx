import { useState } from "react";
import style from "./TodoItem.module.css";

// Functional Component
function TodoItem(props: { title: string }) {
  const { title } = props;
  const [count, setCount] = useState(0);
  function complete() {
    setCount(count + 1);
  }
  return (
    <div className={style.item}>
      <button onClick={complete}>Complete</button>
      <span className={style.title}>{title}</span>({count})
    </div>
  );
}

export default TodoItem;
