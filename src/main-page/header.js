import React from "react";
import logo from "./logo.png";

const Header = () => {
  return (
    <header className="row">
      <div className="col-md-5">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="col-md-7 mt-5 subtitle">
        Providing houses all over the world
      </div>
    </header>
  );
};

export default Header;
