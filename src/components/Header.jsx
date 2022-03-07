import React, { useState } from "react";
import NavBar from "./Nav";
import Footer from "./Footer";
import About from "./pageLinks/About";
import Portfolio from "./pageLinks/Portfolio";
import Contact from "./pageLinks/Contact";
import Resume from "./pageLinks/Resume";
import "bootstrap/dist/css/bootstrap.min.css";
import projects from "./Project";

const styles = {
  div: {
    backgroundImage: ``,
    width: "100%",
    paddingTop: "30px",
    height: "200px",
    justifyContent: "center",
    alignItems: "center",
  },
  innerDiv: {
    width: "100%",
    fontSize: "20px",
    color: "#c3bbc9",
    fontFamily: "'Handlee', cursive",
  },
  h1: {
    fontSize: "40px",
    color: "#604472",
    fontFamily: "'Handlee', cursive",
  },
};

function Header() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio projects={projects} />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div style={styles.div}>
        <h1 style={styles.h1}>DENISE'S DELIGHTFUL DESIGNS</h1>
        <div style={styles.innerDiv}>
          <p>The works of a junior full stack developer</p>
        </div>
      </div>
      <NavBar
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {renderPage()}
      <div>
      <Footer
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      </div>
    </div>
    
  );
}

export default Header;