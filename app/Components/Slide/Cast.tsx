import React, { useEffect, useState } from 'react'
import { getCast } from '@/Components/Server/ServerComponent';
import {People} from '@/page'

interface CastProps {

    id: number;

}

const Cast = ( { id }: CastProps ) =>{

    const[peopleData, setPeople] = useState<People[]>([])

    useEffect(() => {

        const FetchCast = async() => {

            try{

            const data = await getCast(Number(id))
            setPeople(data);

            }

            catch(error) {

                console.error(error)

            }

        }

        FetchCast();

    })


  return (
    <>
    
    <section className='w-full p-9 bg-transparent text-white'>

    <h1 className='text-2xl'>Cast</h1>

    <div className="w-full flex items-center gap-4 overflow-x-auto overflow-y-hidden scrollbar-custom">

    {peopleData.map((cast, index) => (
        <>
        
        <div className="" key={index}>

        <div className="h-3/4 w-48 pb-5 pt-2">
        <img src={cast.profile_path ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}` : "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"} alt="" className={`object-cover${cast.profile_path ? 'h-full w-full' : 'w-48 h-72'}`}/>

        <p>{cast.name && cast.name.length > 14 ? `${cast.name?.substring(0, 12)}...` : cast.name || '_'} as <br />
        {cast.character && cast.character.length > 20 ? `${cast.character?.substring(0, 19)}...` : cast.character || '_'}</p>
        </div>

        </div>

        </>
    ))}


    </div>

    </section>
    
    </>
  )
}

export default Cast