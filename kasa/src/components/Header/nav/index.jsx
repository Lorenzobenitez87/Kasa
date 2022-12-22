import {  NavLink } from 'react-router-dom'
import '../../../styles/Header/Nav/index.css'

function Nav() {
    return (
        <nav className='nav'>
            <NavLink
            to="/">Accueil</NavLink>
            <NavLink
            to="/about">A Propos</NavLink>
        </nav>
    )
}

export default Nav