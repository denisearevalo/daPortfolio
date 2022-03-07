import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const styles = {
  div: {
    padding: "2rem 0 10rem 0",
    background: "#89A98C",
  },
  h1: {
    fontSize: "3rem",
    fontFamily: "'Handlee', cursive",
    color: "#4c3455",
  },
  inputs: {
    width: "100%",
    background: "#aa99af",
    border: "3px solid #58365f",
    borderRadius: "8px",
    resize: "none",
    fontFamily: "'Handlee', cursive",
    margin: ".2rem",
  },
  submit: {
    background: "#937594",
    borderRadius: "10px",
    border: "2px solid black",
    fontFamily: "'Handlee', cursive",
    color: "black",
    width: "80px",
    fontWeight: "bold",
  },
  p: {
    paddingTop: "4rem",
    fontFamily: "'Handlee', cursive",
  },
};

export default function Contact() {

  const validateName = (name) => {
    if (name === "" || name.length < 1 || name.length > 50) {
      window.alert("Please enter a name between 1 and 50 characters");
    }
  };

  const validateEmail = (email) => {
    if (/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/.test(email)) {
      return true;
    } else {
      window.alert("Please enter an email in valid format, email@website.com");
    }
  };

  const validateMessage = (message) => {
    if (message === "" || message.length > 300 || message.length < 20) {
      window.alert("Please enter a message between 20 and 300 characters");
    }
  };

  return (
    <div className="row justify-content-center" style={styles.div}>
      <h1 style={styles.h1}>CONTACT ME</h1>
      <form className="col-10 col-md-6">
        <input
          onBlur={(e) => {
            const name = e.target.value;
            validateName(name);
          }}
          style={styles.inputs}
          type={"text"}
          placeholder={"please enter your name..."}
        ></input>
        <br />
        <input
          onBlur={(e) => {
            const email = e.target.value;
            validateEmail(email);
          }}
          style={styles.inputs}
          type={"email"}
          placeholder={"please enter your email..."}
        ></input>
        <br />
       <textarea
          onBlur={(e) => {
            const message = e.target.value;
            validateMessage(message);
          }}
          type={"text"}
          style={styles.inputs}
          placeholder={"please enter your message..."}
        ></textarea>
        <br />
        <input value="SEND MESSAGE" type={"button"} style={styles.submit}></input>
      </form>
      <p style={styles.p}>
        alternatively, contact me via:
        <br />
        <strong>deniwonder8@gmail.com</strong> or
        <strong> 310-781-0740</strong>
      </p>
    </div>
  );
}