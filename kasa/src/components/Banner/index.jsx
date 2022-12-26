import '../../styles/Banner/index.css'

function Banner({ children }) {

    return (

        <section className='banner'>
            {children}
        </section>
    )
}

export default Banner