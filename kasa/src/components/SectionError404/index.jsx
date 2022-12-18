
import { Link } from 'react-router-dom'
import '../../styles/SectionError404/index.css'

function Error404() {
    return (
            <section className='sectionError'>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <div>
                <Link to="/">Retourner sur la page d'accueil</Link>
            </div>
            </section>        
    )
}

export default Error404