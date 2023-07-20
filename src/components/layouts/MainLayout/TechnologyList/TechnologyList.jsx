import { MainPopup } from "components/ui/MainPopup";
import { colors } from "config/colors";
import { useOpenPopup } from "hooks/useOpenPopup";
import { AiFillSetting } from "react-icons/ai";
import styles from "./TechnologyList.module.scss";

const technologies = [
  "react",
  "react-router-dom",
  "react-hook-form",
  "react-transition-group",
  "react-loading-skeleton",
  "react-icons",
  "react-select",
  "uuid",
  "classNames",
  "axios",
];

export const TechnologyList = () => {
  const { onClose, onOpen, open } = useOpenPopup();

  return (
    <>
      <button className={styles.icon} onClick={onOpen}>
        <AiFillSetting size={25} color={colors.white} />
      </button>
      <MainPopup isOpened={open} onClose={onClose} title="Список технологій">
        <ul className={styles.list}>
          {technologies.map((label) => (
            <li key={label} className={styles.list_item}>
              {label}
            </li>
          ))}
        </ul>
      </MainPopup>
    </>
  );
};
