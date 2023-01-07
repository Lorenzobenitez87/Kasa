import { NavLink } from 'react-router-dom'
import '../../../styles/Header/Nav/index.css'



function Nav() {

    return (

        <nav className='nav'>
            <NavLink
                activeclassname='active'
                exact="true"
                to="/">Accueil</NavLink>
            <NavLink
                activeclassname='active'
                to="/about">A Propos</NavLink>
        </nav>
    )
}

export default Nav