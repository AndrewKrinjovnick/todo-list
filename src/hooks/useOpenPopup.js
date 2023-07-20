import { useState } from "react";

export const useOpenPopup = (initState = false) => {
  const [open, setOpen] = useState(initState);

  const onClose = () => {
    setOpen(false);
  };

  const onOpen = () => {
    setOpen(true);
  };

  return { onClose, onOpen, open };
};
