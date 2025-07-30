import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const styles = {
    nav: {
      padding: "10px",
      backgroundColor: "#282c34",
      color: "white",
      display: "flex",
      justifyContent: "space-around",
      margin: 0,
      listStyle: "none",
    },
    link: {
      margin: "0 15px",
      color: "white",
      textDecoration: "none",
      textTransform: "uppercase",
      fontWeight: "bold",
      padding: "0 15px",
    },
  };
  return (
    <nav>
      <ul style={styles.nav}>
        <li>
          <Link to="/" style={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/services" style={styles.link}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/about" style={styles.link}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" style={styles.link}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
