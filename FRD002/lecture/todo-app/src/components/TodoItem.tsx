import { useState } from "react";
import styles from "./TodoItem.module.css";

function TodoItem(props: { title: string; onRemove(): void }) {
  const { title } = props;
  const [count, setCount] = useState(0);

  function complete() {
    setCount(count + 1);
  }

  return (
    <div className={styles.item}>
      <button onClick={props.onRemove}>Remove</button>
      <button onClick={complete}>Complete</button>
      <span className={styles.title}>{title}</span>({count})
    </div>
  );
}

export default TodoItem;
