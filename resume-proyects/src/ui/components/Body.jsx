import {
  FaYoutube,
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
} from "react-icons/fa6";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaDatabase,
  FaNode,
  FaSass,
  FaNpm,
  FaYarn,
  FaBookOpen,
  FaCertificate,
} from "react-icons/fa";

import { DiScrum, DiResponsive } from "react-icons/di";

import { SiTestinglibrary } from "react-icons/si";

import { RiTeamFill } from "react-icons/ri";

import { VscDebug } from "react-icons/vsc";

import { TbBrandVscode } from "react-icons/tb";

import { BiSupport, BiCode } from "react-icons/bi";

import "./styles.css";
export const Body = () => {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700"
        rel="stylesheet"
        type="text/css"
      />

      <div className="container-fluid p-0">
        <section className="resume-section" id="about">
          <div className="resume-section-content">
            <h1 className="mb-0 text-center">
              Francisco Javier
              <br />
              <span className="text-primary">Martinez Duran</span>
            </h1>
            <div className="subheading mb-5 text-center mt-2">
              Aguascalientes, Mexico · C.P. 20187 · (449) 111-1111 ·
              <a href="mailto:name@email.com">fjmd1987mx@gmail.com</a>
            </div>
            <p className="lead mb-5 text-center">
              Desarrollador Web en proyectos privados, tengo experiencia en
              desarrollo para paginas de escritorio y movil, con conocimiento
              del STACK MERN (Mongo, Express, React & Node).
              <br />
              <p className="mt-2">
                Con enfoque hacia el pensamiento colaborativo, hacia la
                implementacion de una propuesta de alto valor
              </p>
            </p>
            <div className="social-icons d-flex justify-content-around">
              <a
                className="social-icon"
                rel="noreferrer"
                href="https://youtu.be/2ev6A6sqxWM"
                target="_blank">
                <FaBookOpen />
              </a>
              <a
                className="social-icon"
                rel="noreferrer"
                href="https://youtu.be/2ev6A6sqxWM"
                target="_blank">
                <FaYoutube />
              </a>
              <a
                className="social-icon"
                rel="noreferrer"
                href="https://www.linkedin.com/in/francisco-javier-martinez-duran-62a003a8/"
                target="_blank">
                <FaLinkedinIn />
              </a>
              <a
                className="social-icon"
                rel="noreferrer"
                href="https://github.com/FranciscoJavier001"
                target="_blank">
                <FaGithub />
              </a>
              <a
                className="social-icon"
                rel="noreferrer"
                href="https://www.facebook.com/UserStreaming001/"
                target="_blank">
                <FaFacebookF />
              </a>
            </div>
          </div>
        </section>
        <hr className="m-0" />
        <section className="resume-section" id="experience">
          <div className="resume-section-content">
            <h2 className="mb-5 text-center">Experiencia</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Web Developer</h3>
                <div className="subheading mb-3">Junior Freelance</div>
                <p>
                  Creacion de Paginas Web usando HTML, CSS, JavaScript, Mongo y
                  Node, buscando nuevas formas de optiizar los recursos
                  generando diseños responsivos para la adaptacion en diversos
                  dispositivos, usando diversas extensiones de VS Code,
                  utilizando GitHub para el control de versiones y Heroku para
                  el despliegue del Backend, realizando pruebas en el codigo
                  para confirmar la viabilidad del mismo.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">Junio 2020 - Presente</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Web Developer</h3>
                <div className="subheading mb-3">Codellege - Softtek</div>
                <p>
                  Curso intensivo en el desarrollo web impartido en Softtek sede
                  Aguascalientes, donde conocimos lo basico de FrontEnd y
                  desarrollo de logica para la programacion.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">Enero 2020 - Junio 2020</span>
              </div>
            </div>
          </div>
        </section>
        <hr className="m-0" />
        <section className="resume-section" id="education">
          <div className="resume-section-content">
            <h2 className="mb-5 text-center">Educacion</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1x">
                <h3 className="mb-0">Universidad del Valle de Mexico</h3>
                <div className="subheading mb-3">Carrera Trunca</div>
                <div>Ingenieria Industrial y de Sistemas</div>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">Agosto 2014 - Mayo 2016</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <h3 className="mb-0">Softtek</h3>
                <div className="subheading mb-3">Codellege</div>
                <div>Curso de Desarrollo Web</div>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">Enero 2020 - Junio 2020</span>
              </div>
            </div>
          </div>
        </section>
        <hr className="m-0" />
        <section className="resume-section" id="skills">
          <div className="resume-section-content">
            <h2 className="mb-5 text-center">Habilidades</h2>
            <div className="subheading mb-3 text-center">
              <h3 className="mb-0">Lenguajes de Programacion y Herramientas</h3>
            </div>
            <ul className="list-inline dev-icons d-flex justify-content-around">
              <li className="list-inline-item">
                <FaReact />
              </li>
              <li className="list-inline-item">
                <FaHtml5 />
              </li>
              <li className="list-inline-item">
                <FaCss3Alt />
              </li>
              <li className="list-inline-item">
                <FaJsSquare />
              </li>
              <li className="list-inline-item">
                <FaBootstrap />
              </li>
              <li className="list-inline-item">
                <FaDatabase />
              </li>
              <li className="list-inline-item">
                <FaNode />
              </li>
              <li className="list-inline-item">
                <FaSass />
              </li>
              <li className="list-inline-item">
                <FaNpm />
              </li>
              <li className="list-inline-item">
                <FaYarn />
              </li>
              <li className="list-inline-item">
                <FaGithub />
              </li>
            </ul>

            <div className="subheading mb-3 mt-5 text-center">
              <h3 className="mb-0">Entorno de Trabajo</h3>
            </div>
            <ul className="list-inline dev-icons d-flex justify-content-around">
              <li className="list-inline-item">
                <TbBrandVscode />
              </li>
              <li className="list-inline-item">
                <RiTeamFill />
              </li>
              <li className="list-inline-item">
                <BiSupport />
              </li>
              <li className="list-inline-item">
                <DiScrum />
              </li>
              <li className="list-inline-item">
                <DiResponsive />
              </li>
              <li className="list-inline-item">
                <BiCode />
              </li>
              <li className="list-inline-item">
                <VscDebug />
              </li>
              <li className="list-inline-item">
                <SiTestinglibrary />
              </li>
            </ul>
          </div>
        </section>
        <hr className="m-0" />
        <section className="resume-section" id="interests">
          <div className="resume-section-content">
            <h2 className="mb-5 text-center">Intereses</h2>
            <p>
              Aparte de la pasion por la Informatica , disfruto pasar mi tiempo
              afuera leyendo, me encantan los helados, y caminar, el deporte es
              uno de mis gustos mas arraigados, siempre intento acudir en lo
              posible, amo estar con la gente que amo, y me gusta siempre estar
              abierto a nuevas posibilidades.
            </p>
            <p className="mb-0">
              Cuando estoy en casa, disfruto ver peliculas, estudiar idiomas, o
              pasar tiempo con mi familia y amigos, disfruto estar buscando
              nuevas tecnologias y metodologias para hacer las cosas y optimizar
              lo que esta echo al igual que mejorar lo que existe.
            </p>
          </div>
        </section>
        <hr className="m-0" />
        <section className="resume-section" id="awards">
          <div className="resume-section-content">
            <h2 className="mb-5 text-center">Certificaciones</h2>
            <ul className="fa-ul mb-0">
              <div className="text-center">
                <span className="fa-li">
                  <i className="text-warning">
                    <FaCertificate />
                  </i>
                </span>
                The Ultimate MySQL Bootcamp - Colt Steele - Udemy
                <i className="text-warning">
                  <FaCertificate />
                </i>
              </div>
              <li>
                <span className="fa-li">
                  <i className="fas fa-certificate text-warning"></i>
                </span>
                Master en CSS - Victor Robles - Udemy
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-certificate text-warning"></i>
                </span>
                Master en JavaScript - Victor Robles - Udemy
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-certificate text-warning"></i>
                </span>
                JavaScript Moderno - Fernando Herrera - Udemy
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-certificate text-warning"></i>
                </span>
                React - Fernando Herrera - Udemy
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-certificate text-warning"></i>
                </span>
                Curso de Programacion Orientada a Objetos con PHP - Bextlan -
                YouTube
              </li>
            </ul>
          </div>
        </section>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
};
