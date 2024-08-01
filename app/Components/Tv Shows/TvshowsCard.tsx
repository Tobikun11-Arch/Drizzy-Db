import { TvShow } from '@/page'
import Link from 'next/link';

const tvshowcard  = ({tv}: {tv: TvShow}) => {

    const {id, poster_path} = tv;

    return (
        <>
        
        <Link href={`/tv/${id}`} passHref> <div className="Card-Container Bgs" key={id}>

        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
       
        <div className='flex justify-center items-center text-white font-mono font-semi-bold cursor-default'>

        <p className='flex justify-center items-center text-white font-mono font-semi-bold cursor-default hover:text-gray-500 TextSize'>{tv.name.length > 24 ? `${tv.name.substring(0, 20)}...` : tv.name}</p>

        </div>
   
        </div>

        </Link>
        
        </>
    )

}

export default tvshowcard