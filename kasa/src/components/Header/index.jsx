import Nav from './Nav/index'
import Logo from './Logo/index'
import '../../styles/Header/index.css'



function Header() {

    return (
        
        <header className='header'>
            <Logo />
            <Nav />
        </header>
    )
}


export default Header