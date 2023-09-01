
import Navbar from './component/navbar.js';
import Home from './component/home.js';
import About from './component/about.js';
import Search from './component/searchview.js';
import {useState, useEffect} from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import AboutMovie from './component/abmovie.js';

function App() {
  const [searchResults,setSearchResults] = useState([]);
  const [wordSearch,setWordSearch] = useState("");

  useEffect(()=>{
    if(wordSearch)
    {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=857e68ea3b0ca186589c1805e08dacd9&language=en-US&query=${wordSearch}`)
    .then(response=>response.json())
    .then(data=>setSearchResults(data.results));
    }
  },[wordSearch])
  //e166d3a57a42fc8fe30d04f6d5cbc13a
  // setSearchResults('new text');
  // setWordSearch('searching');
  return (
    <div className="App">
        <Navbar searchText={wordSearch} setValue={setWordSearch}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/search' element={<Search keyword={wordSearch} result={searchResults}/>}/>
          <Route path='/movies/:id' element={<AboutMovie/>}/>
        </Routes>
    </div>
  );
}

export default App;
