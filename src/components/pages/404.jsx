import React from "react";
import { Link } from "react-router-dom";

import Nav from "../layouts/Nav";

const styles = {
  mainContainer: {
    textAlign: "center",
    margin: "auto",
  },
  header: {
    margin: "auto",
  },
};
const NotFound = () => (
  <>
    <Nav />
    <div style={styles.mainContainer}>
      <h1 style={styles.header}>404 - Page Not Found!</h1>
      <Link to="/">Go Home</Link>
    </div>
  </>
);

export default NotFound;
