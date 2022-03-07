import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const styles = {
  nav: {
    width: "100%",
  },
  ul: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  navbarLink: {
    color: "black",
    fontSize: "20px",
    fontFamily: "'Handlee', cursive",
  },
};


function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul} className="row nav nav-tabs">
        <li className="nav-item col-sm-12 col-md-3">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
            style={styles.navbarLink}
          >
            A LITTLE ABOUT ME
          </a>
        </li>
        <li className="nav-item col-sm-12 col-md-3">
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
            style={styles.navbarLink}
          >
            VIEW MY PORTFOLIO
          </a>
        </li>
        <li className="nav-item col-sm-12 col-md-3">
          <a
            href="#Contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
            style={styles.navbarLink}
          >
            WANT CONTACT ME?
          </a>
        </li>
        <li className="nav-item col-sm-12 col-md-3">
          <a
            href="#Resume"
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
            style={styles.navbarLink}
          >
            VIEW MY RESUME
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;