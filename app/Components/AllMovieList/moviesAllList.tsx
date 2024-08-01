import { AllList } from '@/page'
import SearchCard from './SearchCard'
import React from 'react'


const AllMovieList = ({search}: {search: AllList[]}) => {

    return (
        <>

        <div className="grid lg md slg smd sm ssm gap-4 ml-4"> 
            
            {search.map((showall) => {

                return(

                    <SearchCard search={showall} key={showall.id}/>

                )

            })}
            
        </div>
        
        </>
    )

}

export default AllMovieList