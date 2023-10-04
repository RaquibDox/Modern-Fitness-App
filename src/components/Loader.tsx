import { useState } from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  const [toggle, setToggle] = useState(true);
  setTimeout(() => setToggle(false), 5000);

  return (
    <div className="flex flex-row items-center justify-center w-full">
      {toggle ? (
        <InfinitySpin color="gray" />
      ) : (
        <div className="p-4 my-12 font-sans text-xl text-center sm:text-3xl">
          Sorry, not available
        </div>
      )}
    </div>
  );
};

export default Loader;
