import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import eCalendary from "../assets/projects/eCalendary.svg";
import dogs from "../assets/projects/dogs-capture.svg";
import rick from "../assets/projects/rick.svg";
import aprende from "../assets/projects/aprende.svg";
import country from "../assets/projects/country.svg";
import film from "../assets/projects/film.svg";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Proyectos <strong className="yellow">recientes </strong>
        </h1>
        <p style={{ color: "white" }}>
          Aqui podra encontrar una review de los ultimos proyectos.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rick}
              isBlog={false}
              title="Rick & Morty"
              description="Mi primera incursión en React involucró la obtención de imágenes desde una API externa y la implementación de un componente de búsqueda y filtrado. Además, utilicé estados de Redux y desarrollé la funcionalidad de eliminación mediante la gestión de estados. Posteriormente, creé una base de datos para almacenar las tarjetas que se generaron, lo que permitió llevar a cabo operaciones CRUD. Además, la implementación se realizó con Postgrest."
              ghLink="https://github.com/diazarm/RickandMorty"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dogs}
              isBlog={false}
              title="Dogs app"
              description="Utilizando React como framework, obtuve imágenes de una API externa e implementé un componente de búsqueda y filtrado. Además, empleé estados de Redux y diseñé la funcionalidad de eliminación mediante la gestión de estados. En una etapa posterior, establecí una base de datos para el almacenamiento de las tarjetas generadas, lo que habilitó la ejecución de operaciones CRUD. Además, el servidor utilizó Sequelize como ORM, Express para la creación de rutas y gestionó solicitudes y respuestas HTTP, todo sobre una base de datos relacional."
              ghLink="https://github.com/diazarm/Dogs-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aprende}
              isBlog={false}
              title="Aprende conmigo"
              description="Trabajo colaborativo, en solucion a la problematica real de busqueda de profesores por área escolar, superior o universitaria, incluye chat creado en base de datos, login, dashboard de administradores, creacion y suspension de publicaciones, sistema de reseña y puntuaciion. Tambien pasarela de pagos para abonas los cursos."
              ghLink="https://github.com/JorgeAlfredoLozano/Aprende-Conmigo"
              demoLink="https://aprende-one.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eCalendary}
              isBlog={false}
              title="eCalendary"
              description="Proyecto de calendario electronico donde el usuario genera mediante sus necesidades y disponibilidad una agenda, y envia a sus clientes mediante un link, el cual reserva un espacio de tiempo seleccionable y administrable. Dejo el link de Github donde se puede observar las tecnologias utilizadas."
              ghLink="https://github.com/diazarm/eCalendary"
              demoLink="https://youtu.be/g15TsSHgii0"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={country}
              isBlog={false}
              title="Countries"
              description="Proyecto del bootcamp, donde se genera una base de datos con un json, no se consume una Api externa. Al iniciar la aplicacion, se cargan los paises, se genera un paginado. se pueden generar actividades propias de un pais o varios, y luego filtrarlas por densidead de poblacion, continentes o por nombre. Dejo el enlace de github con capturas de pantalla."
              ghLink="https://github.com/diazarm/Pi-countries"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={film}
              isBlog={false}
              title="Film management"
              description="Proyecto que consume una Api externa de peliculas, pero aqui el desafio principal fue la implementacion de la autenticacion de forma manual (No auth0), utilizando base de datos relacional, y autorizacion generando un Token con Json Wen Token, ademas de encriptar las contraseñas"
              ghLink="https://github.com/diazarm/film_management"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects