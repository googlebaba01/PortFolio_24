import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Crafted a personalized chat room or workspace using React.js, Material-UI, and Firebase, offering users a social hub to share resources and socialize with friends. The platform boasts real-time messaging capabilities, allowing users to engage in dynamic conversations instantly. It goes beyond text, supporting image sharing to enhance the interactive experience. Additionally, the system facilitates user interaction through message reactions, fostering a more expressive and enjoyable communication environment. The integration of React.js and Material-UI ensures a sleek and responsive user interface, while Firebase underpins the real-time functionality, creating a vibrant and feature-rich space for collaboration and socializing."
              ghLink="https://github.com/googlebaba01/News-App/tree/main"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="News - App"
              description="A React-based news application featuring real-time updates sourced from an external API, with intuitive navigation facilitated by React Router. The app categorizes news for easy exploration, allowing users to click on articles for in-depth information. With a focus on responsiveness and engagement, the application offers a dynamic and seamless news experience, ensuring users stay informed with the latest content in a visually appealing and user-friendly interface."
              ghLink="https://github.com/googlebaba01/News-App/tree/main"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="E-Commerce website"
              description="A user-centric e-commerce interface with seamless browsing, advanced search, secure checkout, personalized accounts, and interactive feedback. The admin interface ensures efficient management of inventory, orders, users, analytics, and settings. Implemented Bcrypt.js for password security, storing hashed passwords instead of plain text. Utilized Cloudinary for cloud image storage and employed JSON Web Token (JWT) for secure information exchange. Mongoose facilitated backend-MongoDB connections, while Express managed server routes. Additional third-party libraries like Node Mailer and React-alert enhance functionality. The result is a feature-rich e-commerce platform with robust security and streamlined management capabilities."
              ghLink="https://github.com/googlebaba01/E-commerce-master"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Prediction-of-fraud-transaction’s."
              description="Developed a supervised machine learning model for predicting fraudulent transactions by analyzing and visualizing credit, debit, and transfer amount data. Utilized ensemble techniques such as bagging and boosting. The model incorporates Random Forest classifier, XGBoost, and Artificial Neural Networks, with a comparative analysis to determine the best fit among the three algorithms. The approach combines the strengths of multiple models to enhance predictive accuracy and fraud detection capabilities."
              ghLink="https://github.com/googlebaba01/Prediction-fraud-Transaction"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
