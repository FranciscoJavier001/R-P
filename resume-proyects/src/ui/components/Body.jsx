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
              Aguascalientes, Mexico · C.P. 20187 ·{" "}
              <a
                href="http://wa.me/+524495946298"
                target="_blank"
                rel="noopener noreferrer">
                (+52) 449-594-6298
              </a>
              {` `} · {` `}
              <a href="mailto:fjmd1987mx@gmail.com">fjmd1987mx@gmail.com</a>
            </div>
            <p className="lead mb-5 text-center">
              Web Developer in Private and Professional Projects, I have
              Experience in Development for Desktop and Mobile Pages and Apps
              with knowledge in MERN STACK (Mongo, Express, React and Node)
              <br />
              <p className="mt-2">
                With a Focus on Collaborative Thinking, Towards Implementation
                of a High Value Proposition
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
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Web Developer</h3>
                <div className="subheading mb-3">Freelance</div>
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
                <span className="text-primary">Julio 2020 - Abril 2022</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Subject Matter Experts</h3>
                <div className="subheading mb-3">
                  SME in Software Development with React - Emonics Llc
                </div>
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
                <span className="text-primary">Mayo 2022 - Diciembre 2022</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Full Stack Developer</h3>
                <div className="subheading mb-3">Prompt Engineering</div>
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
                <span className="text-primary">Febrero 2023 - Presente</span>
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
                <h3 className="mb-0">Unidep</h3>
                <div className="subheading mb-3">Carrera Trunca</div>
                <div>Ingenieria en Sistemas Computacionales</div>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">
                  Julio 2011 - Noviembre 2012
                </span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1x">
                <h3 className="mb-0">Universidad del Valle de Mexico</h3>
                <div className="subheading mb-3">Licenciatura</div>
                <div>Ingenieria Industrial y de Sistemas</div>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">
                  Agosto 2014 - Diciembre 2017
                </span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1x">
                <h3 className="mb-0">Softtek</h3>
                <div className="subheading mb-3">Codellege</div>
                <div>Bootcamp de Desarrollo Web FrontEnd</div>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">Enero 2020 - Junio 2020</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <h3 className="mb-0">IT Certifications</h3>
                <div className="subheading mb-3">
                  Certifications and Training
                </div>
                <div>Variety of Courses in Different IT Web Platforms</div>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">Enero 2020 - Present</span>
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
                <br />
                <h4 className="text-center">React</h4>
              </li>
              <li className="list-inline-item">
                <FaHtml5 />
                <br />
                <h4 className="text-center">Html</h4>
              </li>
              <li className="list-inline-item">
                <FaCss3Alt />
                <br />
                <h4 className="text-center">Css</h4>
              </li>
              <li className="list-inline-item">
                <FaJsSquare />
                <br />
                <h4 className="text-center">Js</h4>
              </li>
              <li className="list-inline-item align-center">
                <FaBootstrap />
                <br />
                <h4 className="text-center">Bs</h4>
              </li>
              <li className="list-inline-item">
                <FaDatabase />
                <br />
                <h4 className="text-center">Db</h4>
              </li>
              <li className="list-inline-item">
                <FaNode />
                <br />
                <h4 className="text-center">Node</h4>
              </li>
              <li className="list-inline-item">
                <FaSass />
                <br />
                <h4 className="text-center">Sass</h4>
              </li>
              <li className="list-inline-item">
                <FaNpm />
                <br />
                <h4 className="text-center">Npm</h4>
              </li>
              <li className="list-inline-item">
                <FaYarn />
                <br />
                <h4 className="text-center">Yarn</h4>
              </li>
              <li className="list-inline-item">
                <FaGithub />
                <br />
                <h4 className="text-center">Git</h4>
              </li>
            </ul>

            <div className="subheading mb-3 mt-5 text-center">
              <h3 className="mb-0">Entorno de Trabajo</h3>
            </div>
            <ul className="list-inline dev-icons d-flex justify-content-around">
              <li className="list-inline-item">
                <TbBrandVscode />
                <br />
                <h4 className="text-center">Vsc</h4>
              </li>
              <li className="list-inline-item">
                <RiTeamFill />
                <br />
                <h4 className="text-center">Team</h4>
              </li>
              <li className="list-inline-item">
                <BiSupport />
                <br />
                <h4 className="text-center">Cs/Ts</h4>
              </li>
              <li className="align-items-center">
                <DiScrum />
                <br />
                <h4 className="text-center">Scrum</h4>
              </li>
              <li className="list-inline-item">
                <DiResponsive />
                <br />
                <h4 className="text-center">Desing</h4>
              </li>
              <li className="list-inline-item">
                <BiCode />
                <br />
                <h4 className="text-center">Code</h4>
              </li>
              <li className="list-inline-item">
                <VscDebug />
                <br />
                <h4 className="text-center">Debug</h4>
              </li>
              <li className="list-inline-item">
                <SiTestinglibrary />
                <br />
                <h4 className="text-center">Test</h4>
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
                    {` `}
                  </i>
                  The Ultimate MySQL Bootcamp - Colt Steele - Udemy
                </span>
                <i className="text-warning">
                  {` `}
                  <FaCertificate />
                </i>
              </div>
              <div className="mb-1"></div>
              <div className="text-center">
                <span className="fa-li">
                  <i className="text-warning">
                    <FaCertificate />
                    {` `}
                  </i>
                </span>
                Master en CSS - Victor Robles - Udemy
                <i className="text-warning">
                  {` `}
                  <FaCertificate />
                </i>
              </div>
              <div className="mb-1"></div>
              <div className="text-center">
                <span className="fa-li">
                  <i className="text-warning">
                    <FaCertificate />
                    {` `}
                  </i>
                </span>
                Master en JavaScript - Victor Robles - Udemy
                <i className="text-warning">
                  {` `}
                  <FaCertificate />
                </i>
              </div>
              <div className="mb-1"></div>
              <div className="text-center">
                <span className="fa-li">
                  <i className="text-warning">
                    <FaCertificate />
                    {` `}
                  </i>
                </span>
                JavaScript Moderno - Fernando Herrera - Udemy
                <i className="text-warning">
                  {` `}
                  <FaCertificate />
                </i>
              </div>
              <div className="mb-1"></div>
              <div className="text-center">
                <span className="fa-li">
                  <i className="text-warning">
                    <FaCertificate />
                    {` `}
                  </i>
                </span>
                React - Fernando Herrera - Udemy
                <i className="text-warning">
                  {` `}
                  <FaCertificate />
                </i>
              </div>
              <div className="mb-1"></div>
              <div className="text-center">
                <span className="fa-li">
                  <i className="text-warning">
                    <FaCertificate />
                    {` `}
                  </i>
                </span>
                The Complete JavaScript Course - Jonas Schmedtmann - Udemy
                <i className="text-warning">
                  {` `}
                  <FaCertificate />
                </i>
              </div>
              <div className="mb-1"></div>
              <div className="text-center">
                <span className="fa-li">
                  <i className="text-warning">
                    <FaCertificate />
                    {` `}
                  </i>
                </span>
                Curso de Programacion Orientada a Objetos con PHP - Bextlan -
                YouTube
                <i className="text-warning">
                  {` `}
                  <FaCertificate />
                </i>
              </div>
            </ul>
          </div>
        </section>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
};
