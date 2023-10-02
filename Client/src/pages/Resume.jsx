import React from "react";
import { Container, Row, Image } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import analista from "../assets/certificated/analista.jpg";
import ft from "../assets/certificated/ft.jpg";
import ha from "../assets/certificated/ha.jpg";
import ta from "../assets/certificated/ta.jpg";
import scrum from "../assets/certificated/scrum.jpg";
import Particle from '../components/Particle';
import pdf from "../assets/MarceloArDiazCv.pdf";
import "./Resume.css";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Descargar CV
          </Button>
        </Row>
        
      <Row responsive="md" className="p-5">
        <Col xs={6} md={4}>
          <Image src={ha} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={analista} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={ft} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={ta} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={scrum} thumbnail />
        </Col>
      </Row>
    
      </Container>
    </div>
  );
};

export default Resume;
