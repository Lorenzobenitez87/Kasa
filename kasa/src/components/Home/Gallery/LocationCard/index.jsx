

function LocationCard({ cover, name, }) {
    return (
        <div className='card'>
            <img className='cardCover' src={cover} alt={`${name} cover`} />
            <div>{name}</div>
        </div>
    )
}

export default LocationCard