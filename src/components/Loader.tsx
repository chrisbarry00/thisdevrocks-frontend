import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-[#5C96FE]" />
    </div>
  );
};

export default Loader;
