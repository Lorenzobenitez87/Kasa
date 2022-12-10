import { Link } from 'react-router-dom'
import '../../../styles/Header/Nav/index.css'

function Nav() {
    return (
        <nav className='nav'>
            <Link to="/">Accueil</Link>
            <Link to="/about">A Propos</Link>
        </nav>
    )
}

export default Nav