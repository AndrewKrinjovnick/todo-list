import styles from "./OverlayingContent.module.scss";

export const ANIMATION_DURATION = 300;

export const overlayAnimationClassNames = {
  enter: styles.overlayEnter,
  enterActive: styles.overlayEnterActive,
  exit: styles.overlayExit,
  exitActive: styles.overlayExitActive,
};

export const contentAnimationClassNames = {
  enter: styles.contentEnter,
  enterActive: styles.contentEnterActive,
  exit: styles.contentExit,
  exitActive: styles.contentExitActive,
};
