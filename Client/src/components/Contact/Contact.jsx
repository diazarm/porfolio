import React,{useState, useRef} from 'react'
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Contact.css'

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false)
    const [notDone, setNotDone] = useState(false)
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
        setDone(false)
        setNotDone(false)
    }

    const sendEmail = (e) => {
    e.preventDefault();
    
    if(!formData.from_name || !formData.reply_to ||!formData.message){
      setNotDone(true)
    } else {
      
      //  Please use your own credentials from emailjs or i will recive your email
      
    emailjs
      .sendForm(
        "default_service",
        "template_6x3879g",
        form.current,
        "mpV4SIVQfndHqu-kX"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
    };
    

    return(
        <Container style={{paddingTop: '50px'}} >
            <Row >
            <Col md={6} className="c-left" >
            <h1 >Conversemos</h1>
            <h1 className="yellow">lo leo con gusto</h1>
            </Col>
            <Col md={6} className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="from_name" className="user"  placeholder="Nombre" onChange={handleChange}/>
                <input type="email" name="reply_to" className="user" placeholder="Correo" onChange={handleChange} />
                <textarea name="message" className="user" placeholder="Mensaje" onChange={handleChange} />
                <span className='not-done' >{notDone && "Por favor, ingrese todos los datos"}</span>
                <Button type="submit" className="button" disabled={done}>Enviar</Button>
                <span className='done'>{done && "Gracias por contactarme, asegúrese de haber recibido su correo. Si está probando esta funcionalidad, confirmo que funciona perfectamente bien. Si tienes alguna consulta, le responderé. Además si desea puede contactarme por Linkedin."}</span>
                </form>
            </Col>
            </Row>
        </Container>
    )
}

export default Contact