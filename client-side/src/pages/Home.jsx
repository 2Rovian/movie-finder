import { useState } from 'react'

// components
import Navbar from '../components/Navbar'
import FetchMovies from '../components/FetchMovies'
import SearchMovie from '../components/SearchMovie'
import Footer from '../components/Footer'
//

function Home() {
  const [SearchMovieName, setSearchMovieName] = useState('');

  const handleSearch = (movieName) => {
    setSearchMovieName(movieName); 
  };

  return (
    <div className='flex flex-col h-screen'>
        <Navbar onSearch={handleSearch}/>
        { SearchMovieName ? <SearchMovie movieName={SearchMovieName} /> : <FetchMovies /> }
        <Footer />
    </div>
  )
}

export default Home