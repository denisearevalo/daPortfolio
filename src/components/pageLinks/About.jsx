import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import deniprof from "../../assets/deniprof.jpg"

const styles = {
  div: {
    paddingBottom: "48px",
    paddingTop: "32",
    background: "#89A98C",
  },
  h1: {
    fontSize: "48px",
    fontFamily: "'Handlee', cursive",
    color: "#53375e",
  },
  p: {
    padding: "16px",
    margin: "24px 48px",
    fontFamily: "'Handlee', cursive",
    background: "#598b5e",
    borderRadius: "20px",
    border: "3px solid #257747",
    fontSize: "16px",
  },
  img: {
    borderRadius: "50%",
    width: "250px",
  },
};

export default function About() {
  return (
    <div style={styles.div}>
      <h1 style={styles.h1}>ABOUT ME</h1>
      <img style={styles.img} src={deniprof}/>
      <div className="row d-flex justify-content-center">
        <div className="col-sm-11 col-md-8 col-lg-6 my-3">
          <p style={styles.p}>
            Hello there, my name is Denise. I am soon to graduate from the University of Washington Coding Boot Camp. I have experience with full stack development. I have discovered that I do enjoy more front end development to better help user experience. I am eager to continue to expand my web development knowledge and if you are interested in working together, please do not hesitate to reach out. Thank you for taking the time to view my portfolio.
          </p>
          <br></br>
          <p style={styles.p}>Kindly ❤️️, Denise A</p>
        </div>
      </div>
    </div>
  );
}