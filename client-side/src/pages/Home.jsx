import React from 'react'
import Navbar from '../components/Navbar'
import FetchMovies from '../components/FetchMovies'
import SearchMovie from '../components/SearchMovie'
import { useState } from 'react'

function Home() {
  const [SearchMovieName, setSearchMovieName] = useState('');

  const handleSearch = (movieName) => {
    setSearchMovieName(movieName); 
  };

  return (
    <div>
        <Navbar onSearch={handleSearch}/>
        { SearchMovieName ? <SearchMovie movieName={SearchMovieName} /> : <FetchMovies /> }
    </div>
  )
}

export default Home