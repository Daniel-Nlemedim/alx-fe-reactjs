function Services() {
  const styles = {
    container: {
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    heading: {
      color: "#333",
    },
    list: {
      listStyleType: "none",
      padding: 0,
      display: "flex",
      flexDirection: "column",
    },
  };
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Our Services</h1>
      <ul style={styles.list}>
        <li>Technology Consulting</li>
        <li>Market Analysis</li>
        <li>Product Development</li>
      </ul>
    </div>
  );
}

export default Services;
