import { AllTvList } from '@/page'
import TvListCard from './TvListCard'
import React from 'react'


const TvList = ({TvList}: {TvList: AllTvList[]}) => {

    return (
        <>

        <div className="grid lg md slg smd sm ssm gap-4 ml-4"> 
            
            {TvList.map((Card) => {

                return(

                    <TvListCard TvList={Card} key={Card.id}/>

                )

            })}
            
        </div>
        
        </>
    )

}

export default TvList