import Image from '../../../assets/img-home-section1.jpg'
import '../../../styles/Home/Section1/index.css'

function Img() {
    return (
        <div className='section1'>
       <img src={Image} alt='Chez vous, partout et ailleurs' />
            <h1>Chez vous, partout et ailleurs</h1>
       </div>
    )
}

export default Img