import React from "react";

const PrevButton: React.FC<any> = ({ navigate }) => {
  return (
    <div className="flex items-center justify-center">
      <button
        className="px-5 py-2 font-semibold rounded-xl bg-green-500 ml-1 dark:bg-black dark:text-white"
        onClick={() => navigate("/")}
      >
        Back
      </button>
    </div>
  );
};

export default PrevButton;
