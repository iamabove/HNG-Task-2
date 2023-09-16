import React from "react";
import { Image } from "react-bootstrap";

const Logo = ({ color }) => {
  return (
    <div className="d-flex align-items-center gap-3">
      <div className="logo">
        <Image
          className="w-100 h-100"
          src="https://res.cloudinary.com/dbxvk3apv/image/upload/v1694553198/cofeshop/tv_vnewym.webp"
          alt="logo"
        />
      </div>
      <h3 className={`mb-0 sans movieBox text-${color}`}>MovieBox</h3>
    </div>
  );
};

export default Logo;
