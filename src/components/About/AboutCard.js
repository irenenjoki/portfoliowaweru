import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Irene Waweru </span>
            from <span className="purple"> Nairobi, Kenya.</span>
            <br />
            I am a dedicated and detail-oriented IT professional and lab technician with hands-on
 experience in web development, networking, and laboratory operations.
            <br />
            My background
 includes expertise in front-end and back-end technologies, networking principles, and lab
 management.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Solving Challenging Puzzles
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing (Creative,Academic)
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">WAWERU</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
