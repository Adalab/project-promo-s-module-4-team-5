import { Link } from "react-router-dom";
import Card from "../main/Card";
import "../../styles/layout/card.scss";
import "../../styles/layout/landing.scss";

function Landing({ projectsList }) {
  const renderCard = () => {
    return projectsList.map((project, index) => {
      return (
        <a
          className='link-landing'
          key={index}
          href={"/api/projects/detail/" + project.idprojects}
        >
          <Card data={project}></Card>
        </a>
      );
    });
  };
  return (
    <>
      <section className='landing container-landing'>
        <article>
          <h2 className='title'>Proyectos Molones</h2>
          <h3 className='subtitle'>
            Escaparate en línea para recoger ideas a través de la tecnología
          </h3>

          <div className='section-btn'>
            <Link className='buttons' to='/create-card'>
              Nuevo proyecto
            </Link>
          </div>
        </article>

        <div className='landing-card'>{renderCard()}</div>
      </section>
    </>
  );
}

export default Landing;
