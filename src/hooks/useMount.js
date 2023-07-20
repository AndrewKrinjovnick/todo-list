import { useEffect, useState } from "react";

export const useMount = (open, duration = 300) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (open && !mounted) {
      setMounted(true);
      return;
    }

    if (!open && mounted) {
      setTimeout(() => {
        setMounted(false);
      }, duration);
    }
  }, [open, duration]);

  return mounted;
};
