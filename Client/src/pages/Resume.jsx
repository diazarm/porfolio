//import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import cvPng from "../assets/cv.png"
import Particle from '../components/Particle'
import pdf from "../assets/MarceloArDiazCv.pdf";

import {  pdfjs } from "react-pdf";
//Document, Page,
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

//const resumeLink = `https://raw.githubusercontent.com/19sajib/portfolio/main/src/assets/sajib.pdf`
//const resumeLink = `https://github.com/diazarm/porfolio/blob/main/Client/src/assets/MarceloArDiazCv.pdf`


const Resume = () => {
 // const [width, setWidth] = useState(1200);

  // useEffect(() => {
    
  //   setWidth(window.innerWidth);
  // }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        {/* <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp; Visualizar de hoja de vida
          </Button>
        </Row>

        <Row className="resume">
          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row> */}

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
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <img src={cvPng} alt="Mi Imagen" />
        </div>
      </Container>
    </div>
  )
}

export default Resume