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
            <div className="lead subheading mb-5 text-center mt-2">
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
              <div>
                <a
                  className="social-icon"
                  rel="noreferrer"
                  href=""
                  target="_blank">
                  <FaBookOpen />
                </a>
              </div>
              <a
                className="social-icon"
                rel="noreferrer"
                href=""
                target="_blank">
                <FaYoutube />
              </a>
              <a
                className="social-icon"
                rel="noreferrer"
                href=""
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
                href=""
                target="_blank">
                <FaFacebookF />
              </a>
            </div>
          </div>
        </section>
        <hr className="m-0" />
        <section className="resume-section" id="experience">
          <div className="resume-section-content">
            <h2 className="mb-5 text-center">Experience</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3>Web Developer</h3>
                <div className="subheading">Codellege - Softtek</div>
                <p className="mt-3">
                  Intensive Course of Web Development Taught at Softtek
                  Headquarters Aguascalientes, Where We Learned the Basic
                  FrontEnd Programming Skills and Logic Development
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">January 2020 - June 2020</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3>Web Developer</h3>
                <div className="subheading">Freelance</div>
                <p className="mt-3">
                  Creation of Web Pages using React, Mongo and Node looking for
                  New Ways to Optimize Resources with Responsive Web Design for
                  Adaptation in Various Devices using VS Code Extensions and
                  using GitHub for Version Control, Heroku for BackEnd
                  Deployment and Testing Code to Confirm its Feasibility
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">July 2020 - April 2022</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3>Subject Matter Experts</h3>
                <div className="subheading">
                  SME in Software Development with React - Emonics Llc
                </div>
                <p className="mt-3">
                  Development of Applications with React, Customer Support, User
                  Support, Colleague Support in Problem Solving, Code
                  Optimization, Layout Modifications, Implementation and
                  Creation of New Functional Components, Cloud Application
                  Deployment and Testing Code
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">May 2022 - December 2022</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3>Full Stack Developer</h3>
                <div className="subheading">Prompt Engineering</div>
                <p className="mt-3">
                  Creation of Web Pages And Applications using React,
                  Implementation of New Functions in Functional Components,
                  Layout in Sites and Applications, Use Hooks to Improve
                  Perfomance, Deployment Applications of Cloud Platforms,
                  Improvements in Components using Node, Code Documentation,
                  Code Testing, Use Artificial Intelligence for General
                  Improvements, using New Forms to Responsive Web Design, use
                  various CDNs for the Creation of More Aesthetic Sites,
                  Customized Especific Request in Tags and Support to other
                  Proggramers.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">February 2023 - Present</span>
              </div>
            </div>
          </div>
        </section>
        <hr className="m-0" />
        <section className="resume-section" id="education">
          <div className="resume-section-content">
            <h2 className="mb-5 text-center">Education</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1x">
                <h3 className="mb-0">Unidep</h3>
                <div className="subheading mb-3">
                  Incomplete Bachelor Degree
                </div>
                <div>Computer Systems Engineering</div>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">July 2011 - November 2012</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1x">
                <h3 className="mb-0">Universidad del Valle de Mexico</h3>
                <div className="subheading mb-3">Bachelor Degree</div>
                <div>Industrial and Systems Engineering</div>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">
                  August 2014 - December 2017
                </span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1x">
                <h3 className="mb-0">Softtek</h3>
                <div className="subheading mb-3">Codellege</div>
                <div>Bootcamp of FrontEnd Web Development</div>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">January 2020 - June 2020</span>
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
                <span className="text-primary">January 2020 - Present</span>
              </div>
            </div>
          </div>
        </section>
        <hr className="m-0" />
        <section className="resume-section" id="skills">
          <div className="resume-section-content">
            <h2 className="mb-5 text-center">Skills</h2>
            <div className="subheading mb-3 text-center">
              <h3 className="mb-0">Programming Languages and Tools</h3>
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
              <h3 className="mb-0">Work Environment</h3>
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
            <h2 className="mb-5 text-center">Interests</h2>
            <p className="text-center">
              The Passion for Technology Information means for Me a Big Part of
              my Life, I Enjoy Spending my Time Make a Web Sites and Apps,
              trying to Solved Problems or Searching New Ways to do those things
              but in a differents ways, always trying Improve or Optimized the
              Resources, also I like spending my time Reading Phyloshopy Books
              or Personal Development, I love Ice Creams, Coffee and Sweet, I
              love Walking with My Dogs and Go to the Gym (thats its one of my
              most deeply more ingrained taste), I love being with the people
              that I love and I always like to be Open to New Possibilities and
              Oportunities.
              <br />
              <p className="mt-3 text-center">
                When I be at home, I enjoy was Studying Programing Lenguages or
                watching Movies or Series or spending my time with family and
                friends, I enjoyed looking for new Technologies and
                Methodologies to do things and Optimize or Improve things.
              </p>
            </p>
          </div>
        </section>
        <hr className="m-0" />
        <section className="resume-section" id="awards">
          <div className="resume-section-content">
            <h2 className="mb-5 text-center">Certifications</h2>
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
