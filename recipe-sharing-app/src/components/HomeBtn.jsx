const HomeBtn = () => {
  const styleBtn = {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "10px 20px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    borderRadius: "4px",
    cursor: "pointer",
  };
  return (
    <div>
      <button style={styleBtn} onClick={() => (window.location.href = "/")}>
        Go Home
      </button>
    </div>
  );
};

export default HomeBtn;
