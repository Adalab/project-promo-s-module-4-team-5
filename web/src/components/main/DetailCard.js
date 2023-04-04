import Card from "./Card";
import { Link } from "react-router-dom";
import "../../styles/layout/preview.scss";
import "../../styles/layout/detailCard.scss";
import cover from "../../images/cover.jpeg";

function DetailCard({ cardFound }) {
  return (
    <>
      <section className="preview detail">
        <img
          className="detail-image"
          src={cardFound.image ? cardFound.image : cover}
          alt={cardFound.name}
        />
        <Card data={cardFound}></Card>
        <Link className="buttons" to="/">
          Ver proyectos
        </Link>
      </section>
    </>
  );
}

export default DetailCard;
