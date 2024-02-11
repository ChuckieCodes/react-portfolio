import React from "react";
import { Container } from "reactstrap";

const styles = {
  icon: {
    fontSize: "2rem",
    margin: "auto .2rem",
    color: "inherit"
  },
};

const Footer = () => {
  return (
    <Container className="col-lg-4 text-center">
      <p>Made with &hearts; by C. Palacio</p>
      <a href="https://github.com/ChuckieCodes" style={styles.icon}><i className="bi bi-github"></i></a>
    </Container>
  );
};

export default Footer;
