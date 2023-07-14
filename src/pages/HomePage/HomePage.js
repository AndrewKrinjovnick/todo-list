import { TodoList } from "../../components/screens/home/TodoList";
import { Container } from "../../components/ui/Container";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <main className={styles.main}>
      <Container>
        <TodoList />
      </Container>
    </main>
  );
};

export default HomePage;
