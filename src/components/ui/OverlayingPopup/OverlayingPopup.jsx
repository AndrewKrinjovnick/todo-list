import { Portal } from "components/ui/Portal";
import { useMount } from "hooks/useMount";
import { useEffect } from "react";
import { OverlayingContent } from "./OverlayingContent/OverlayingContent";
import { ANIMATION_DURATION } from "./OverlayingContent/OverlayingContent.constants";

export const OverlayingPopup = ({
  children,
  className = "",
  onClose,
  isOpened,
}) => {
  const mount = useMount(isOpened, ANIMATION_DURATION);

  useEffect(() => {
    if (isOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpened]);

  if (!mount) {
    return null;
  }

  return (
    <Portal>
      <OverlayingContent
        isOpened={isOpened}
        onClose={onClose}
        className={className}
      >
        {children}
      </OverlayingContent>
    </Portal>
  );
};
