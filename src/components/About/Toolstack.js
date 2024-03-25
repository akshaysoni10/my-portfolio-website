import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://leetcode.com/ak_soni_10/" target="_blank" style={{ color: "white" }}>
          <SiLeetcode />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://auth.geeksforgeeks.org/user/soniakshay17738" target="_blank" style={{ color: "white" }}>
          <SiGeeksforgeeks />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.hackerrank.com/profile/soniakshay17738" target="_blank" style={{ color: "white" }}>
          <SiHackerrank />
        </a>
      </Col>
    </Row>
  );
}

export default Toolstack;
