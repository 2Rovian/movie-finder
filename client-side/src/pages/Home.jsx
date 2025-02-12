import React from 'react'
import Navbar from '../components/Navbar'
import FetchMovies from '../components/FetchMovies'

function Home() {
  return (
    <div>
        <Navbar />
        <FetchMovies />
    </div>
  )
}

export default Home