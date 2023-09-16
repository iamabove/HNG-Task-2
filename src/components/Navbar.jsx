import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import {HiMenuAlt4} from 'react-icons/hi'

const Navbar = () => {
  return (
    <div className="position-fixed w-100" style={{zIndex:'9999'}}>
    <div className="cc-container py-3">
      <div className="d-flex justify-content-between align-items-center">
        <Logo color={"white"}/>
        <div className="d-none d-lg-block">
          <SearchBar />
        </div>
        <div className="d-flex align-items-center gap-3">
            <p className="signin sans mb-0">Sign in</p>
            <div className="menudiv">
                <HiMenuAlt4 size={20} color="white"/>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
