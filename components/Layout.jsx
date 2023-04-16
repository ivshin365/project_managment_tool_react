import React from "react";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div className="h-full flex flex-row space-x-0">
        <div className="h-screen">
        <NavBar />
        </div>
      
      <div className="w-full text-white inline-block">
          {children}
      </div>
    </div>
  );
};

export default Layout;