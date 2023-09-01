import Hero from './hero';
import Cards from './card';

const Search =({keyword,result})=>{
    
    
    const results = result.map((obj,i)=>{
        // if(obj.adult===true)
        return <Cards movie={obj} keyword={i}/>
    })
    
    const title = `You are searching for ${keyword}`
    console.log("Your Search Result is: ",{result});
    return(
    <div>
    <Hero text={title}/>
    {/* <div className='card-deck'> */}
    <div className = "container">
    
        <div className = "row">
            {results}
        </div>
    </div>
    </div>
    // </div>
    )
}
export default Search;