import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Gajendra Nagar </span>
            from <span className="purple"> Rajasthan, India.</span>
            <br />
            I am currently pursuing B.Tech from IIT Dhanbad
            <br />
            Also I am a Compititive Programmer Do coding mainly in C++.
            <br />
            <br />
            Apart from that I have gained valuable frontend development experience through internships at Vijaya.AI and Joymettec Pvt Ltd.

At Vijaya.AI, I designed and developed a responsive UI using React, Material UI, and Shadcn, enabling seamless customization of Large Language Models (LLMs). I also collaborated with backend teams to integrate APIs and engineered secure authentication frameworks, optimizing data handling and enhancing the platform's functionality for over 1,000 users.

At Joymettec Pvt Ltd, I worked on creating and maintaining web applications using React.js and Material UI, focusing on performance optimization and responsive design. I developed multiple API endpoints, improved the stability of applications, and introduced new features that enhanced user experience for over 2,000 users​.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">GoogleBABA</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
