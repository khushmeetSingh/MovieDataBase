import Hero from './hero';

const About = ()=>{
    return(
        <>
        <Hero text="Hello About"/>
        <h1>This is About</h1>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-8 offset-lg-2 my-2'>
                    <p className='lead'>
                        About the Sweet About
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}
export default About;