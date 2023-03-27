import { Link } from "react-router-dom";
import Card from "../main/Card";
import "../../styles/layout/card.scss";
import Maria from "../../images/Maria-Araujo.jpeg";
import Mariana from "../../images/foto-mariana.jpg";
import monica from "../../images/monica.jpeg";
import celia from "../../images/celia.jpg";


function Landing () {
    const obj1 = {
        name: 'SinEntrada.es' ,
        slogan: 'Disfruta del partido estés donde estés',
        repo: 'https://github.com',
        demo: 'https://github.com',
        technologies: 'HTML, CSS, JavaScript, React',
        desc: 'En SinEntrada.com descubrirás lugares donde disfrutar de los partido de tus equipos favoritos. Informarte y comparte dónde ver el próximo evento junt@/es.',
        autor: 'María Araujo',
        job: 'Front-end developer',
        photo: 'Prueba',
        image: Maria,
    }
    const obj2 = {
        name: 'Greenify' ,
        slogan: 'Navega en un mundo más verde',
        repo: 'https://github.com',
        demo: 'https://github.com',
        technologies: 'HTML, CSS, JavaScript, React',
        desc: 'Greenify es un proyecto de frontend enfocado en la creación de aplicaciones web y móviles para promover y apoyar prácticas sostenibles y amigables con el medio ambiente.',
        autor: 'Mónica Saborido',
        job: 'Front-end developer',
        photo: 'Prueba',
        image: monica,
    }
    const obj3 = {
        name: ' Celia Mírez Fashion' ,
        slogan: 'Viste tu personalidad con Celia Mírez',
        repo: 'https://github.com',
        demo: 'https://github.com',
        technologies: 'HTML, CSS, JavaScript, React',
        desc: 'La plataforma ofrece una experiencia de compra en línea excepcional y una vista en profundidad a los productos de Celia Mírez. Los clientes podrán comprar las últimas colecciones de ropa, accesorios y zapatos, así como ver fotos de desfiles de moda y videos exclusivos detrás de cámaras.',
        autor: 'Celia Ramirez',
        job: 'Front-end developer',
        photo: 'Prueba',
        image: celia,
    }
    const obj4 = {
        name: 'Tu biblioteca personal' ,
        slogan: '¡Todos tus libros en un click!',
        repo: 'https://github.com',
        demo: 'https://github.com',
        technologies: 'HTML, CSS, JavaScript, React',
        desc: 'Crea listas de todos tus libros y clasifícalos. Puedes marcar libros como léidos, pendientes, prestados. Incluso crear listas de deseos con libros que te gustaría tener!',
        autor: 'Mariana Lobo',
        job: 'Front-end developer',
        photo: 'Prueba',
        image: Mariana,
    }
    return (
        <>
            <section className="landing">
                <article >
                    <h2 className="title">Proyectos Molones</h2>
                    <h3 className="subtitle">Escaparate en línea para recoger ideas a través de la tecnología</h3>

                    <div className="section-btn">
                    <Link className="buttons" to='/create-card'>Nuevo proyecto</Link>
                    <Link className="buttons" to='/'>Ver proyectos</Link>
                    </div>
                </article>

                <div className="landing-card">
                    <Card data={obj1}></Card>
                    <Card data={obj2}></Card>
                    <Card data={obj3}></Card>
                    <Card data={obj4}></Card>
                </div>
            </section>
        </>
    )
}

export default Landing;