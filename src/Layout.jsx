import React from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="container my-4" style={{minHeight: '590px'}}>{children}</main>
      <hr />
      <Footer />
    </div>
  );
};

export default Layout;
