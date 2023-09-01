import { useState } from 'react';
import { useEffect } from 'react';
import Cards from './card';
import Hero from './hero'
const Home= ()=>{
    const [movies,setMovies] = useState([]);
    useEffect(()=>{
        async function homepage(){
            // let movies =[];
            await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&api_key=857e68ea3b0ca186589c1805e08dacd9')
            .then(response=>response.json())
            .then(data=>{
                setMovies(data.results)
        })}
        homepage();
    })

    return(
    <>
        <Hero text="Hello Home"/>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-8 offset-lg-2 my-2'>
                    {movies.map((obj)=>{
                        return <Cards movie = {obj}/>
                    })}
                </div>
            </div>
        </div>
    </>
    )
}
export default Home;