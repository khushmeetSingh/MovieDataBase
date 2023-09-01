import {Link} from 'react-router-dom'

const Cards = ({movie})=>{
    const posterURL=`https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    const detailURL = `/movies/${movie.id}`
    return(
        <div className="col-lg-3 my-5">
        <div className="card h-100">
        <img src={posterURL} className="card-img-top" alt={movie.original_title}/>
        <div className="card-body">
        <h5 className="card-title">{movie.original_title}</h5>
        <p className="card-text">{movie.overview}</p>
        <Link to={detailURL} className="btn btn-primary">Show Details</Link>
        </div>
        </div>
        </div>
    )
}
export default Cards;