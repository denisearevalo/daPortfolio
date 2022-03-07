import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const styles = {
  footer: {
    background: "#84A98C",
  },
  icon: {
    color: "#637c6c",
    fontSize: "30px",
  },
  div: {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  li: {
    padding: "10px",
  },
  p: {
    fontSize: ".12px",
    textAlign: "Center",
    fontFamily: "'Handlee', cursive",
  },
};

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.div}>
        <li style={styles.li}>
          <a
            href="https://github.com/denisearevalo"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <i class="bi bi-github" style={styles.icon}></i>
          </a>
        </li>
        <li style={styles.li}>
          <a
            href="https://www.linkedin.com/in/denise-arevalo-634831225/"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <i class="bi bi-linkedin" style={styles.icon}></i>
          </a>
        </li>
      </div>
      <p style={styles.p}>&copy; Denise Arevalo ❤️ 2022</p>
    </footer>
  );
}

export default Footer;