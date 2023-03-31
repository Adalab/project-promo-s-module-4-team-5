import logoAdalab from "../images/logo-adalab.png";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className='header'>
            <i className='fa-solid fa-laptop-code header__icon'></i>
            <Link to='/' className='header__text'>Proyectos Molones</Link>
            <img className='header__logo--adalab' src={logoAdalab} alt='Imagen de Adalab' />
        </header>
    );
}

export default Header;