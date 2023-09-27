import { useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useOutsideClick = (ref: any) => {
  const [check, setCheck] = useState(true);
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleClickOutside(event: { target: any }) {
      if (ref.current && !ref.current.contains(event.target)) {
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

// function useOutsideAlerter(ref) {
//     useEffect(() => {
//       /**
//        * Alert if clicked on outside of element
//        */
//       function handleClickOutside(event) {
//         if (ref.current && !ref.current.contains(event.target)) {
//           console.log("You clicked outside of me!");
//         }
//       }
//       // Bind the event listener
//       document.addEventListener("mousedown", handleClickOutside);
//       return () => {
//         // Unbind the event listener on clean up
//         document.removeEventListener("mousedown", handleClickOutside);
//       };
//     }, [ref]);
//   }
