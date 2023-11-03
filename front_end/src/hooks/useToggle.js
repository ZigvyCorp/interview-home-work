import { useState } from "react";

export default function useToggle(defaultValue = false) {
  const [toggle, setToggle] = useState(defaultValue);

  const onOpen = () => {
    setToggle(true);
  }

  const onClose = () => {
    setToggle(false);
  }

  const onToggle = () => {
    setToggle(!toggle);
  }

  return {
    toggle,
    onOpen,
    onClose,
    onToggle,
  }
}
