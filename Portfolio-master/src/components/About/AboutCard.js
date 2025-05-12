import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Gajendra Nagar</span>
            {" "}from <span className="purple">Rajasthan, India</span>.
            <br />
            I am 2024 graduate of IIT (ISM) Dhanbad.
            <br />
            I am also a passionate competitive programmer, primarily coding in C++.
            <br />
            <br />
            I have gained full-time software development experience through roles at 
            <strong> FrontDesk</strong> and <strong>Vijaya.AI</strong>, along with a development internship at <strong>Joymettec Pvt Ltd</strong>.
            <br />
            <br />
            At <strong>FrontDesk</strong>, I developed an interactive ReactFlow-based visualization platform for conversational AI systems,
            built robust Express.js microservices with AWS DynamoDB, and engineered seamless multi-agent transitions using LiveKit—
            significantly improving system efficiency and real-time context handling.
            <br />
            <br />
            At <strong>Vijaya.AI</strong>, I created responsive UIs with React, Material UI, and Shadcn for LLM customization,
            developed reusable frontend components, and integrated Python Django REST APIs, boosting platform performance and usability.
            <br />
            <br />
            During my internship at <strong>Joymettec Pvt Ltd</strong>, I focused on building responsive web applications using React.js and Material UI,
            implemented API endpoints, and delivered new features that enhanced UX for over 2,000 users.
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
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">GoogleBABA</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
