import React from "react";

const Layout = ({ children }) => {
  const isRoot = window.location.pathname === "/";
  return (
    <div className="App">
      {isRoot ? (
        <h1 style={{ color: "olive" }}>Demo City</h1>
      ) : (
        <a href="/">Go Back to Home List</a>
      )}
      <div style={{ marginTop: 50 }}>{children}</div>
    </div>
  );
};

export default Layout;
