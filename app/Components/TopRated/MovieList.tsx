import { Movie } from '@/page'
import MovieCard from '@/Components/TopRated/MovieCard'
import React from 'react'


const MovieList = ({movies}: {movies: Movie[]}) => {

    return (
        <>

        <div className="grid lg md slg smd sm ssm gap-4 ml-4"> 
            
            {movies.map((movie) => {

                return(

                    <MovieCard movie={movie} key={movie.id}/>

                )

            })}

        </div>
        
        </>
    )

}

export default MovieList