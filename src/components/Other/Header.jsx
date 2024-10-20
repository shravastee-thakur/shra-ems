import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-end">
      <h1 className="text-2xl font-medium">
        Hello <br /> <span className="text-3xl font-semibold">Shravastee</span>
      </h1>
      <button className="px-5 py-2 rounded-lg bg-red-500 text-white text-lg font-medium">
        Log Out
      </button>
    </div>
  );
};

export default Header;
