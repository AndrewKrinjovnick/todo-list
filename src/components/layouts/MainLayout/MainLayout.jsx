import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.scss";
import { TechnologyList } from "./TechnologyList";

export const MainLayout = () => {
  return (
    <>
      <header className={styles.wrapper}>
        <TechnologyList />
      </header>
      <Outlet />
    </>
  );
};
