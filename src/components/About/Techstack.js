import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiFlutter,
  SiDart,
  SiFirebase,
  SiMongodb,
  SiGooglemaps,
  SiJsonwebtokens,
  SiGithub,
  SiVisualstudiocode,
  SiFigma,
} from "react-icons/si";
import { DiJavascript1, DiGit, DiAndroid, DiApple } from "react-icons/di";
import { TbApi, TbBellRinging2 } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDart />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglemaps />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJsonwebtokens />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbApi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBellRinging2 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAndroid />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiApple />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
    </Row>
  );
}

export default Techstack;