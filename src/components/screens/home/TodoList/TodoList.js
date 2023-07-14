import { SearchForm } from "../../../ui/SearchForm";
import { Todo } from "../../../ui/Todo";
import styles from "./TodoList.module.scss";

const tasks = ["Поїсти", "Подивитися серіал", "Поспати", "Погладити кота"];

export const TodoList = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Список задач</h1>
      <SearchForm
        btnText="Додати"
        onSubmit={() => 1}
        placeholder="Введіть задачу"
      />
      <div className={styles.list}>
        {tasks.map((todo) => (
          <Todo title={todo} key={todo} />
        ))}
      </div>
    </div>
  );
};
