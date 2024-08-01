import { Allmovies } from '@/page'
import AllMovieCard from '@/Components/All Movies/AllMovieCard'
import React from 'react'


const AllMovieList = ({all}: {all: Allmovies[]}) => {

    return (
        <>

        <div className="grid lg md slg smd sm ssm gap-4 ml-4"> 
            
            {all.map((showall) => {

                return(

                    <AllMovieCard All={showall} key={showall.id}/>

                )

            })}

        </div>
        
        </>
    )

}

export default AllMovieList