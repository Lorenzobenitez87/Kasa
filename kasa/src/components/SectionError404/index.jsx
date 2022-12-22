
import { Link } from 'react-router-dom'
import '../../styles/SectionError404/index.css'

function Error404() {
    return (
            <main className='sectionError'>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <div>
                <Link to="/">Retourner sur la page d'accueil</Link>
            </div>
            </main>        
    )
}

export default Error404