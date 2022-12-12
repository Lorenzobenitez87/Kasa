import { locationList } from '../../../../datas/logements.js'
//import PropTypes from 'prop-types'
import '../../../../styles/Home/Gallery/Thumb/index.css'


function Thumb( {cover, title} ) {
    return (
        <div className='thumb'>
            <img className='thumbCover' src={locationList.cover} alt={`${title} cover`} />
            <div className='thumbTitle'>title</div>
        </div>
    )
}

//Thumb.propTypes = {
//    cover: PropTypes.string,
//    title: PropTypes.string.isRequired
//}

export default Thumb