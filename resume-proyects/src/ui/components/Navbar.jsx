import "./styles.css";
import Frank from "../../assets/Frank.jpg";

export const Navbar = () => {
  //* Variable a Exportar */
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i"
        rel="stylesheet"
        type="text/css"
      />

      <nav
        className=" navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav">
        <a className="navbar-brand" href="#page-top">
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={Frank}
              alt="Profile"
            />
          </span>
        </a>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#education">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                {/* Falta el id de proyectos */}
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#interests">
                Interests
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#awards">
                Certifications
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
