import { RefObject, useEffect, useState } from "react";

const useOutsideClick = <T extends HTMLElement>(ref: RefObject<T>)  => {
  const [check, setCheck] = useState(true);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent ) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setCheck(false);
      } else {
        setCheck(true);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return check;
};

export default useOutsideClick;
