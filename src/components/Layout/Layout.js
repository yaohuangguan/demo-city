import React from "react";
import { Link } from "@reach/router";

const Layout = ({ children }) => {
  const isRoot = window.location.pathname === "/";
  return (
    <div className="App">
      {isRoot ? (
        <h1 style={{ color: "green" }}>DEMO CITY</h1>
      ) : (
        <Link to="/">GO BACK</Link>
      )}
      <div style={{ marginTop: 50 }}>{children}</div>
    </div>
  );
};

export default Layout;
