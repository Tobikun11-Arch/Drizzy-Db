import { Allmovies } from '@/page'
import Link from 'next/link';


const Allmoviecard  = ({All}: {All: Allmovies}) => {

    const {id, poster_path} = All;
    
    return (
        <>

        <Link href={`/movie/${id}`} passHref><div className="Card-Container Bgs" key={id}>

        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
        <p className='flex justify-center items-center text-white font-mono font-semi-bold cursor-default hover:text-gray-500 TextSize'>{All.title.length > 24 ? `${All.title.substring(0, 20)}...` : All.title}</p>

        </div>
        </Link>
        
        </>
    )

}

export default Allmoviecard