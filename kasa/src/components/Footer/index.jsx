import LogoFooter from '../../assets/LogoFooter.png'
import '../../styles/Footer/index.css'



function Footer() {

    return (
        <footer>
            <div>
                <img src={LogoFooter} alt='Logo de Kasa' />
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer