import { memo, useCallback, useState } from "react";
import styles from "./TodoItem.module.css";

function TodoItem(props: {
  title: string;
  //  onRemove(): void;
  onRemove: () => void;
  onUpdateTitle: (newTitle: string) => void;
}) {
  const { title } = props;
  const [count, setCount] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [draftTitle, setDraftTitle] = useState("");

  function complete() {
    setCount(count + 1);
  }

  function startEdit() {
    setIsEditing(true);
    setDraftTitle(title);
  }

  const saveTitle = useCallback(
    function () {
      props.onUpdateTitle(draftTitle);
      discardTitleEdit();
    },
    [draftTitle]
  );

  const discardTitleEdit = useCallback(function () {
    setIsEditing(false);
  }, []);

  return (
    <div className={styles.item}>
      <button onClick={props.onRemove}>Remove</button>
      <button onClick={complete}>Complete ({count})</button>
      {isEditing ? (
        <>
          <input
            className={styles.title}
            value={draftTitle}
            onChange={(e) => setDraftTitle(e.target.value)}
          ></input>
          <button onClick={saveTitle}>Save</button>
          <button onClick={discardTitleEdit}>Discard</button>
        </>
      ) : (
        <>
          <span className={styles.title}>{title}</span>
          <button onClick={startEdit}>Edit</button>
        </>
      )}
      <div>last rendering time: {new Date().toLocaleTimeString()}</div>
    </div>
  );
}

export default memo(TodoItem);
