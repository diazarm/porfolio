import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
//  AiOutlineTwitter,
//  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import './Social.css'

const Social = () => {
  return (
    <Container style={{padding: '30px'}}>
    <Row>
              <Col md={12} className="contact-social">
                <div className='contact-text'>
                <h1>Contacto</h1>
                <p>
                Por favor no dude en comunicarse conmigo <span className="yellow">lo espero.</span>
                </p>
                </div>
                <ul className="contact-social-links">
                  <li className="contact-icons">
                    <a
                      href="https://github.com/diazarm"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  {/* <li className="contact-icons">
                    <a
                      href="https://twitter.com/19sajib"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li> */}
                  <li className="contact-icons">
                    <a
                      href="https://www.linkedin.com/in/marcelo-a-diaz-6a7926223/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  {/* <li className="contact-icons">
                    <a
                      href="https://www.instagram.com/19sajib"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color contact-social-icons"
                    >
                      <AiFillInstagram />
                    </a>
                  </li> */}
                </ul>
              </Col>
            </Row>
          </Container>
  )
}

export default Social