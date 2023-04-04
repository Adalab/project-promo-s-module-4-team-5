import cover from "../../images/cover.jpeg";
import Card from "./Card";
import { Link } from "react-router-dom";

function Preview({ data }) {
    return (
        <>
        <section className='preview'>
            <img className='image' src={data.image ? data.image : cover} alt='' />
            <Card data={data}></Card>
            <Link className="buttons" to='/'>Ver proyectos</Link>
        </section>
        </>

    );
}

export default Preview;
