import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const styles = {
  mainDiv: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "48px",
    height: "100%",
    background: "#b389a1e2",
  },
  cardDiv: {
    margin: "16px",
    borderRadius: "10px",
    fontFamily: "'Handlee', cursive",
  },
  h1: {
    fontSize: "48px",
    fontFamily: "'Handlee', cursive",
    color: "#a985b1c3",
    paddingTop: "16px",
    textShadow: "2px 2px black",
  },
  icon: {
    color: "#1008119e",
    fontSize: "32px",
  },
 };

export default function Portfolio({ projects }) {
  return (
    <div style={styles.mainDiv} className="row">
      <h1 style={styles.h1}>WELCOME TO MY PORTFOLIO</h1>

      {projects.map((project) => (
        <div
          style={styles.cardDiv}
          className="card col-sm-12 col-md-5"
          key={project.id}
        >
          <img
            style={styles.img}
            src={project.imageSrc}
            alt="alt text"
            className="card-img-top img img-fluid"
          />
          <div className="card-body">
            <p className="card-text">{project.title}</p>
            <hr />
            <div className="card-body">
              <a
                href={project.githubURL}
                target={"_blank"}
                className="card-link"
                rel={"noreferrer"}
              >
                <i style={styles.icon} class="bi bi-github"></i>
              </a>
              <a
                href={project.herokuURL}
                target={"_blank"}
                className="card-link"
                rel={"noreferrer"}
              >
                <i style={styles.icon} class="bi bi-globe"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

