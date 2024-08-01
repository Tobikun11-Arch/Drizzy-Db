import React, { useEffect, useState } from 'react'
import { getSimilarTvShows } from '@/Components/Server/ServerComponent';
import {SimilarTvShow } from '@/page'
import Link from 'next/link';

interface SimilarProps {

    id: number;

}

const SimilarTvShows = ( { id }: SimilarProps ) =>{

    const[SimilarTvShow, setSimilarTvshow] = useState<SimilarTvShow[]>([])

    useEffect(() => {

        const FetchCast = async() => {

            try{

            const data = await getSimilarTvShows(Number(id))
            setSimilarTvshow(data);

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

    <h1 className='text-2xl'>Similar Movies</h1>

    <div className="w-full flex items-center gap-4 overflow-x-auto overflow-y-hidden scrollbar-custom">

    {SimilarTvShow.map((tv, index) => (
        <>
        
        <div className="" key={index}>
       
        <div className="h-3/4 w-60 pb-5 pt-2">

        <Link href={`/movie/${tv.id}`} passHref>
        <img src={tv.poster_path ? `https://image.tmdb.org/t/p/w500/${tv.poster_path}` : "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"} className={`object-cover${tv.poster_path ? 'h-full w-full' : 'w-48 h-80'}`}/>
        
        <p className='flex justify-center'>{tv.title.length > 20 ? `${tv.title.substring(0, 19)}...` : tv.title}</p>
        </Link>

        </div>

        </div>
      

        </>
    ))}


    </div>

    </section>
    
    </>
  )
}

export default SimilarTvShows