import { UpcomingMovie } from '@/page'
import Link from 'next/link';

const UpcomingMovieCard  = ({Upcoming}: {Upcoming: UpcomingMovie}) => {

    const {id, poster_path} = Upcoming;

    return (
        <>
        
        <Link href={`/movie/${id}`} passHref> <div className="Card-Container Bgs" key={id}>

        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
        <p className='flex justify-center items-center text-white font-mono font-semi-bold cursor-default hover:text-gray-500 TextSize'>{Upcoming.title.length > 24 ? `${Upcoming.title.substring(0, 20)}...` : Upcoming.title}</p>

        </div>
        
        </Link>
        </>
    )

}

export default UpcomingMovieCard