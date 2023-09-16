import React from "react";
import Logo from "./Logo";
import SideList from "./SideList";

const Sidebar = () => {
  return (
    <div className="side-bar">
      <div className="side-fixed">
        <div className="overflow scrollbody">
        <div
          className="mt-4"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Logo color={"black"} />
        </div>
          <div className="mt-5">
            <SideList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
