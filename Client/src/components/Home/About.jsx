import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import Particle from '../Particle'

import {
  AiFillGithub,
//  AiOutlineTwitter,
//  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Particle />
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  Permitame <span className="yellow"> presentarme </span> 
                </h1>
                <p className="home-about-body">
                Soy un desarrollador <span className="yellow">Full Stack web  </span>
                con una pasión por la tecnología y el liderazgo. Siempre buscando <span className="yellow"> aprender y crecer en nuevas tecnologías.</span>
                <br />
                <br />
                Comprometido con alcanzar el éxito en proyectos desafiantes y contribuir al logro de objetivos colectivos
                <br />
                <br />
                 Finalice un bootcamp de programacion
                  <b className="yellow"> Full-Stack </b>web,  
                 donde no solo aprendi las maravillas que se pueden hacer con codigo sino todo lo relacionado a un entorno de trabajo colaborativo.
                  <br />
                  <br />Soy competente en 
                    <b className="yellow"> Javascript, </b>
                    y framework como
                  <b className="yellow"> React.</b>
                  <br />
                  <br />
                  Tengo gran pasion en <b className="yellow">Node.js, </b> y bases de datos como 
                  <i>
                    <b className="yellow">
                      {" "}
                      Postgrest y Mongo
                    </b>
                  </i>
                  &nbsp; like
                  <i>
                    <b className="yellow"> React.js</b>
                  </i>
                  <br />
                  <br />
                  Siempre dispuesto a investigar 
                  <i>
                    <b className="yellow"> diferentes tecnologías </b>
                    y explorar nichos emergentes como
                    <b className="yellow"> Inteligencia Artificial.</b>
                  </i>
                  <br />
                  
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>Siempre dispuesto</h1>
                <p>
                Por favor, no dude en contactarse <span className="yellow">conmigo</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/diazarm"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  {/* <li className="social-icons">
                    <a
                      href="https://twitter.com/19sajib"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="twitter"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li> */}
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/marcelo-a-diaz-6a7926223/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  {/* <li className="social-icons">
                    <a
                      href="https://www.instagram.com/19sajib"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="instagram"
                    >
                      <AiFillInstagram />
                    </a>
                  </li> */}
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About