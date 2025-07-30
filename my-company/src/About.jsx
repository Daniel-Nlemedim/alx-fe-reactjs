function About() {
  const styles = {
    container: {
      padding: "20px",
    },
    heading: {
      color: "#333",
    },
  };
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p>
        Our company has been providing top-notch services since 1990. We
        specialize in various fields including technology, marketing, and
        consultancy.
      </p>
    </div>
  );
}

export default About;
