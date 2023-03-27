import user from "../../images/user.jpeg";
import "../../styles/layout/preview.scss";

function Card ({data}){
    return (
        <section className='autor'>
            <section className='info-project'>
                <p className='subtitle'>Personal Project Card</p>
                <hr className='line' />
                <h2 className='title-project'>{data.name || "Elegant workspace"}</h2>
                <p className='slogan'>{data.slogan || "Diseños Exclusivos"}</p>
                <p className='desc'>
                        {data.desc ||
                            "Lorem, ipsum dolor sit amet consectetur adipisicing elit Libero, delectus? Voluptates at hic aliquam porro ad suscip harum laboriosam saepe earum doloribus aperiam, ullam culpa accusantium placeat odit corrupti ipsum!"}</p>
                <section className='technologies'>
                    <p className='text'>{data.technologies || "React JS, MongoDB"}</p>
                    <div className='icons'>
                        <a href={data.demo} rel='noreferrer' target='_blank'><i className='fas fa-globe icon'></i></a>
                        <a href={data.repo} rel='noreferrer' target='_blank'><i className='fab fa-github icon'></i></a>
                    </div>
                </section>
            </section>

            <section className='info-autor'>
                <img className='image-autor' src={data.image ? data.image : user} alt='' />
                <p className='job'>{data.job || "Full Stack Developer"}</p>
                <p className='name'>{data.autor || "Emmelie Björklund"}</p>
            </section>
        </section>
    )
}

export default Card;