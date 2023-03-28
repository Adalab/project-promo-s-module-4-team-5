import { Link } from "react-router-dom";
import Card from "../main/Card";
import "../../styles/layout/card.scss";
import "../../styles/layout/landing.scss";
//import Maria from "../../images/Maria-Araujo.jpeg";
// import Mariana from "../../images/foto-mariana.jpg";
// import monica from "../../images/monica.jpeg";
// import celia from "../../images/celia.jpg";
//import cover from "../../images/cover.jpeg";

function Landing({ projectsList }) {
  //   const obj2 = {
  //     name: "Greenify",
  //     slogan: "Navega en un mundo más verde",
  //     repo: "https://github.com",
  //     demo: "https://github.com",
  //     technologies: "HTML, CSS, JavaScript, React",
  //     desc: "Greenify es un proyecto de frontend enfocado en la creación de aplicaciones web y móviles para promover y apoyar prácticas sostenibles y amigables con el medio ambiente.",
  //     autor: "Mónica Saborido",
  //     job: "Front-end developer",
  //     photo:
  //       "https://www.funcion.info/wp-content/uploads/2021/03/funcion-de-las-imagenes.jpg",
  //     image: monica,
  //     id: "46sas6d5",
  //   };
  //   const obj3 = {
  //     name: " Celia Mírez Fashion",
  //     slogan: "Viste tu personalidad con Celia Mírez",
  //     repo: "https://github.com",
  //     demo: "https://github.com",
  //     technologies: "HTML, CSS, JavaScript, React",
  //     desc: "La plataforma ofrece una experiencia de compra en línea excepcional y una vista en profundidad a los productos de Celia Mírez. Los clientes podrán comprar las últimas colecciones de ropa, accesorios y zapatos, así como ver fotos de desfiles de moda y videos exclusivos detrás de cámaras.",
  //     autor: "Celia Ramirez",
  //     job: "Front-end developer",
  //     photo:
  //       "https://www.funcion.info/wp-content/uploads/2021/03/funcion-de-las-imagenes.jpg",
  //     image: celia,
  //     id: "46546655",
  //   };
  //   const obj4 = {
  //     name: "Tu biblioteca personal",
  //     slogan: "¡Todos tus libros en un click!",
  //     repo: "https://github.com",
  //     demo: "https://github.com",
  //     technologies: "HTML, CSS, JavaScript, React",
  //     desc: "Crea listas de todos tus libros y clasifícalos. Puedes marcar libros como léidos, pendientes, prestados. Incluso crear listas de deseos con libros que te gustaría tener!",
  //     autor: "Mariana Lobo",
  //     job: "Front-end developer",
  //     photo:
  //       "https://www.funcion.info/wp-content/uploads/2021/03/funcion-de-las-imagenes.jpg",
  //     image: Mariana,
  //     id: "4te46655",
  //   };

  const renderCard = () => {
    return projectsList.map((project, index) => {
      return (
        <Link className='link-landing' key={index} to={"detail/" + project.id}>
          <Card data={project}></Card>
        </Link>
      );
    });
  };
  return (
    <>
      <section className='landing container'>
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
