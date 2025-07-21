import React from "react";

function MainContent() {
  const mainContentStyle = {
    padding: "20px",
    textAlign: "center",
    fontSize: "18px",
    color: "darkslategray",
  };
  return (
    <main style={mainContentStyle}>
      <p>I love to visit New York, Paris, and Tokyo.</p>
    </main>
  );
}

export default MainContent;
