import LogoKasa from '../../../assets/LOGO.png'
import '../../../styles/Header/Logo/index.css'
import { Link } from 'react-router-dom'



function Logo () {

    return (

        <Link to={'/'}>
        <img src={LogoKasa} className='logo' alt='Logo de Kasa' />
        </Link>
    )
}


export default Logo