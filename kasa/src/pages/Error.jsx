import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer/index';
import '../styles/Error/Section/index.css'
import '../styles/index.css'


function Error() {
    return (
        <div>
            <Header />
            <section className='sectionError'>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <div>
                <Link to="/">Retourner sur la page d'accueil</Link>
            </div>
            </section>
            <Footer />
        </div>
    )
}

export default Error