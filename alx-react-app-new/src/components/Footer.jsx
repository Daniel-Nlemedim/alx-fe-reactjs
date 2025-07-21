import React from "react";

function Footer() {
  const footerStyle = {
    backgroundColor: "lightgray",
    color: "black",
    textAlign: "center",
    font: "italic ",
  };
  return (
    <footer style={footerStyle}>
      <p>© 2023 City Lovers</p>
    </footer>
  );
}
export default Footer;
