// import { useState } from 'react';
import Cards from './card';
import Hero from './hero'
const Home=()=>{
    // const [topMovies,setTopMovies] = useState([]);
    const homepage = ()=>{
        let movies =[];
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&api_key=857e68ea3b0ca186589c1805e08dacd9')
        .then(response=>response.json())
        .then(data=>{
             movies = data.results;
        }) 

        console.log(movies)
        // const moviejsx = await movies.map((obj)=>{
        //     return <Cards movie = {obj}/>
        // })
        return "Hello";
    }
    console.log(typeof(homepage()))
    return(
    <>
        <Hero text="Hello Home"/>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-8 offset-lg-2 my-2'>
                    {homepage()}
                  {/* {homepage().map((obj)=>{
                       return <Cards movie = {obj}/>

                    })} */}
                </div>
            </div>
        </div>
    </>
    )
}
export default Home;