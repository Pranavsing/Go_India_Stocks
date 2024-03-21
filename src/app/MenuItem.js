import React from "react";

const MenuItem = ({ icon, title }) => {
  return (
    <button className="flex items-center py-2 px-4 hover:bg-gray-700 w-full">
      <span className="mr-2">{icon}</span>
      <span>{title}</span>
    </button>
  );
};

export default MenuItem;
