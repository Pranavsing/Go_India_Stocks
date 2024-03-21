import React from "react";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-60 bg-gray-800 text-white z-50">
      <div className="p-4 flex items-center">
        <img
          src="https://i.etsystatic.com/15636063/r/il/0f7adb/1281675230/il_fullxfull.1281675230_psb9.jpg"
          alt="User Profile"
          className="w-10 h-10 rounded-full mr-2"
        />
        <span>Hello User</span>
        <span className="ml-auto">&#128276;</span>
      </div>
      <hr className="border-white" />
      <MenuItem icon="💬" title="Discussion Forum" />
      <MenuItem icon="💵" title="Market Stories" />
      <MenuItem icon="😊" title="Sentiment" />
      <MenuItem icon="📈" title="Market" />
      <MenuItem icon="🏢" title="Sector" />
      <MenuItem icon="👀" title="Watchlist" />
      <MenuItem icon="📅" title="Events" />
      <MenuItem icon="📰" title="News" />
    </div>
  );
};

export default Menu;
