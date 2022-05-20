import Header from "../header/Header";
import Footer from "../footer/Footer";
import React from "react";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default DefaultLayout;
