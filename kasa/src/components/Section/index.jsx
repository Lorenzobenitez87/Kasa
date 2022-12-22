import '../../styles/Section/index.css'

function Section({ children }) {
    return (
        <section className='section'>
            {children}
        </section>
    )
}

export default Section