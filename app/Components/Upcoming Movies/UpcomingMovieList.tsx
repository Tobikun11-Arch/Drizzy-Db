import { UpcomingMovie } from '@/page'
import UpcomingMoviesCard from '@/Components/Upcoming Movies/UpcomingMovieCard'
import React from 'react'


const UpcomingMovieList = ({Movies}: {Movies: UpcomingMovie[]}) => {

    return (
        <>

        <div className="grid lg md slg smd sm ssm gap-4 ml-4"> 
            
            {Movies.map((movie) => {

                return(

                    <UpcomingMoviesCard Upcoming={movie} key={movie.id}/>

                )

            })}

        </div>
        
        </>
    )

}

export default UpcomingMovieList