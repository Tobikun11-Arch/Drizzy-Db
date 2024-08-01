import React from 'react'
import Play from './IconPlayFill'
import '@/movie/ScreenSize/MovieDetails.css'

export default function watchTrailer() {
  return (
    <>
    
    <div className="light-button">
  <button className="bt">
    <div className="light-holder">
      <div className="dot"></div>
      <div className="light"></div>
    </div>
    <div className="button-holder">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img">
        <Play />
      </svg>
      <p className='WatchTrailerText'>Watch Trailer </p>
    </div>
  </button>
</div>

    
    </>
  )
}
