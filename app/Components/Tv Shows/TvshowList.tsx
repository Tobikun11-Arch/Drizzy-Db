import { TvShow } from '@/page'
import TvShowCard from '@/Components/Tv Shows/TvshowsCard'
import React from 'react'


const tvshowList = ({show}: {show: TvShow[]}) => {

    return (
        <>

        <div className="grid lg md slg smd sm ssm gap-4 ml-4"> 
            
            {show.map((tv) => {

                return(

                    <TvShowCard tv={tv} key={tv.id}/>

                )

            })}

        </div>
        
        </>
    )

}

export default tvshowList