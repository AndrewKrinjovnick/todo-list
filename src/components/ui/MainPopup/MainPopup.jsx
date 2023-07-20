import { GrFormClose } from "react-icons/gr";
import { IconButton } from "../IconButton";
import { OverlayingPopup } from "../OverlayingPopup";
import styles from "./MainPopup.module.scss";

export const MainPopup = ({ children, title, isOpened, onClose }) => {
  return (
    <OverlayingPopup isOpened={isOpened} onClose={onClose}>
      <div className={styles.header_wrapper}>
        <h3 className={styles.header}>{title}</h3>
        <IconButton onClick={onClose}>
          <GrFormClose size={20} />
        </IconButton>
      </div>
      <div className={styles.content}>{children}</div>
    </OverlayingPopup>
  );
};
