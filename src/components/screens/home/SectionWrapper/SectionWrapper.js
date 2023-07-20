import PropTypes from "prop-types";
import styles from "./SectionWrapper.module.scss";

export const SectionWrapper = ({ auxiliaryHeader, children, title }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {auxiliaryHeader && auxiliaryHeader}
      </div>
      {children}
    </div>
  );
};

SectionWrapper.propTypes = {
  title: PropTypes.string.isRequired,
};
