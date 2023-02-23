import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../style/layout.css";
const Layout = (props) => {
  console.log(props);
  return (
    <Fragment>
      <Header />
      <div className="main-layout">{props.children}</div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
