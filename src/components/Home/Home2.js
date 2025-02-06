import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ABOUT <span className="purple"> ME </span>
            </h1>
            <p className="home-about-body">
              I am a professional developer with a strong focus on creating{" "}
              <b className="purple">efficient</b> and <b className="purple">scalable</b>{" "}
              solutions for modern applications. With expertise in{" "}
              <b className="purple">Flutter</b>, I specialize in cross-platform 
              mobile app development, ensuring seamless experiences on both{" "}
              <b className="purple">iOS</b> and <b className="purple">Android</b>.
              <br />
              <br />
              My skill set includes integrating advanced functionalities such as{" "}
              <b className="purple">Firebase</b>, <b className="purple">RESTful APIs</b>, 
              <b className="purple">geofencing</b>, <b className="purple">localization</b>, 
              and <b className="purple">push notifications</b>. I also bring strong 
              knowledge in <b className="purple">state management</b> techniques, 
              using tools like <b className="purple">BLoC</b> and <b className="purple">Provider</b>.
              <br />
              <br />
              I have worked on projects that incorporate interactive maps, 
              <b className="purple"> advanced animations</b>, and real-time updates, 
              combining my technical expertise with attention to user experience.
              <br />
              <br />
              I am committed to building applications that not only solve real-world 
              problems but also showcase my ability to adapt and implement{" "}
              <b className="purple">modern technologies</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONNECT WITH ME</h1>
            <p>
              Feel free to reach out to discuss opportunities or collaborations.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/NaderEmad9"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons github-icon"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://wa.me/966539812835"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons whatsapp-icon"
                >
                  <FaWhatsapp />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/naderr-emadd"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons linkedin-icon"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/naderr.emadd"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons instagram-icon"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;