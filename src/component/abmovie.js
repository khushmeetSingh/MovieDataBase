import { useEffect, useState } from 'react';
import Hero from './hero';
import {useParams} from 'react-router-dom'


const AboutMovie = ()=>{
    const {id} = useParams()
    console.log(id)
    const [movieDetails,setMovieDetails] = useState({})
    const [loadingState,setLoadingState] = useState(true);
    useEffect(()=>{
        console.log("movie details are here...")
        fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=857e68ea3b0ca186589c1805e08dacd9`)
        .then(response=>response.json())
        .then(data=>{
            setMovieDetails(data);
            setLoadingState(false)
        })
    },[id])
    const posterURL=`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
    const backdropURL=`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`
    function print(){
        if(loadingState===false)
            return (
            <div>
            <Hero text = {movieDetails.original_title} backdrop={backdropURL}/>
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-4'>
                        <img src={posterURL} alt='...' className='img-fluid rounded'/>
                    </div>
                    <div className='col-8 my-3'>
                        <h1>{movieDetails.original_title}</h1>
                        <h2>Story Overview</h2>
                        <div className='text-justify'>{movieDetails.overview}</div>
                        <div className='mvdet'><h3>Status</h3>{movieDetails.status}</div>
                        <div className='mvdet'><h3>Popularity</h3>{movieDetails.popularity}</div>
                        <div className='mvdet'><h3>Rating</h3>{movieDetails.vote_average}</div>
                        <div className='mvdet'><h3>Rated By</h3>{movieDetails.vote_count}</div>
                    </div>
                </div>

            </div>
            </div>
            )
        else
            return <Hero text = "Loading.."/>
    }
    return print();
}

export default AboutMovie;
