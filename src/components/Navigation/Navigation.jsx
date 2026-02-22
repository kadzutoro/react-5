import css from './Navigation.module.css';
import { NavLink, Link } from 'react-router-dom';
import clsx from 'clsx';
import { GiWorld } from "react-icons/gi";


const buildLinkClass = ({ isActive }) => clsx(css.link, isActive && css.activeLink);

export default function Navigation () {
    return(
        <header>
            <div>
                <Link to="/" className={css.logo}>
                    <GiWorld size={40} />
                </Link>
            </div>
            <div>
                <nav>
                    <NavLink to="/" className={buildLinkClass}>Home</NavLink>
                    <NavLink to="/movies" className={buildLinkClass}>Movies</NavLink>
                </nav>
            </div>
        </header>
    )
}