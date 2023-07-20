import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import {
  ANIMATION_DURATION,
  contentAnimationClassNames,
  overlayAnimationClassNames,
} from "./OverlayingContent.constants";
import styles from "./OverlayingContent.module.scss";

export const OverlayingContent = ({
  children,
  className,
  isOpened,
  onClose,
}) => {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  const [animationIn, setAnimationIn] = useState(false);

  useEffect(() => {
    setAnimationIn(isOpened);
  }, [isOpened]);

  return (
    <div className={styles.container} role="dialog">
      <CSSTransition
        nodeRef={overlayRef}
        timeout={ANIMATION_DURATION}
        mountOnEnter
        unmountOnExit
        classNames={overlayAnimationClassNames}
        in={animationIn}
      >
        <div
          className={styles.overlay}
          role="button"
          tabIndex={0}
          onClick={onClose}
          ref={overlayRef}
        />
      </CSSTransition>
      <CSSTransition
        nodeRef={contentRef}
        timeout={ANIMATION_DURATION}
        mountOnEnter
        unmountOnExit
        classNames={contentAnimationClassNames}
        in={animationIn}
      >
        <div
          ref={contentRef}
          className={classNames(styles.content, { [className]: className })}
        >
          {children}
        </div>
      </CSSTransition>
    </div>
  );
};
