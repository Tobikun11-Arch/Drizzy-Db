import React, { useEffect, useState } from 'react'
import { getSimilar } from '@/Components/Server/ServerComponent';
import {Similar } from '@/page'
import Link from 'next/link';

interface SimilarProps {

    id: number;

}

const SimilarMovie = ( { id }: SimilarProps ) =>{

    const[SimilarMovie, setSimilarMovie] = useState<Similar[]>([])

    useEffect(() => {

        const FetchCast = async() => {

            try{

            const data = await getSimilar(Number(id))
            setSimilarMovie(data);

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

    {SimilarMovie.map((movie, index) => (
        <>
        
        <div className="" key={index}>
       
        <div className="h-3/4 w-60 pb-5 pt-2">

        <Link href={`/movie/${movie.id}`} passHref>
        <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"} className={`object-cover${movie.poster_path ? 'h-full w-full' : 'w-48 h-80'}`}/>
        
        <p className='flex justify-center'>{movie.title.length > 20 ? `${movie.title.substring(0, 19)}...` : movie.title}</p>
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

export default SimilarMovie