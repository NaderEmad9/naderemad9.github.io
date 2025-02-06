import React from "react";
import Card from "react-bootstrap/Card";
import { FaCheckCircle } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I’m <span className="purple">Nader Emad</span>,  
            an experienced & certified <span className="purple">Application Developer </span>  
            specializing in <span className="purple">Flutter</span> and  
            <span className="purple"> Mobile App Development </span>.  
            <br />
            <br />
            I have worked on multiple applications, including  
            <span className="purple"> BugAway</span>, an advanced  
            <span className="purple"> pesticide management system</span>,  
            as well as other projects integrating  
            <span className="purple"> Firebase</span>,  
            <span className="purple"> State Management</span>,  
            <span className="purple"> Advanced Animations</span>,  
            <span className="purple"> Push Notifications & Local Notifications</span>,  
            <span className="purple"> Real-time Database & Firestore</span>, and  
            <span className="purple"> Advanced UI/UX Design</span>.  
            <br />
            <br />
            My focus is on building  
            <span className="purple"> scalable, high-performance mobile applications </span>  
            while continuously enhancing my technical and problem-solving skills.  
            <br />
            <br />
            In addition to development, I am also skilled in:
          </p>
          <ul>
            <li className="about-activity">
              <FaCheckCircle  />  Professional video and photo editing 🎥 
            </li>
            <li className="about-activity">
              <FaCheckCircle  />  UI/UX design and prototyping in <span className="purple">Figma</span>
            </li>
            <li className="about-activity">
              <FaCheckCircle  />  Optimizing workflows through new tools and techniques
            </li>
            <li className="about-activity">
              <FaCheckCircle  />  Competitive <span className="purple">Esports</span> gaming 🎮
            </li>
          </ul>

          <p style={{ color: "rgb(70, 86, 150)", fontWeight: "bold" }}>
            "Precision, Strategy, Innovation."
          </p>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;