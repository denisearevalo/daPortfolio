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
  
  export default function RESUME() {
    return (
      <div style={styles.div}>
        <h1 style={styles.h1}>RESUME</h1>
          <img style={styles.img} src={deniprof}/>
        <div className="row d-flex justify-content-center">
          <div className="col-sm-11 col-md-8 col-lg-6 my-3">
            <p style={styles.p}>
              ***UNDER CONSTRUCTION***
            </p>
            <br></br>
            <p style={styles.p}>Kindly ❤️️, Denise A</p>
          </div>
        </div>
      </div>
    );
  }