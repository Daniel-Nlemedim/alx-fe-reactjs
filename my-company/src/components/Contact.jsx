import { useState } from "react";

function Contact() {
  const styles = {
    form: {
      display: "flex",
      flexDirection: "column",
      maxWidth: "400px",
      margin: "auto",
      padding: "20px",
    },
    input: {
      marginBottom: "10px",
      padding: "10px",
      fontSize: "16px",
      display: "block",
      width: "100%",
    },
    button: {
      padding: "10px",
      backgroundColor: "#282c34",
      color: "white",
      border: "none",
      cursor: "pointer",
    },
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          styles={styles.input}
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ display: "block", margin: "10px 0" }}
        />
        <input
          styles={styles.input}
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ display: "block", margin: "10px 0" }}
        />
        <button type="submit" style={styles.button}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
