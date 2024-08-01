import { Movie } from '@/page'
import Link from 'next/link';

const MovieCard  = ({movie}: {movie: Movie}) => {

    const {id, poster_path} = movie;

    return (
        <>
        
        <Link href={`/movie/${id}`} passHref><div className="Card-Container Bgs" key={id}>

        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
        
        <p className='flex justify-center items-center text-white font-mono font-semi-bold cursor-default hover:text-gray-500 TextSize'>{movie.title.length > 24 ? `${movie.title.substring(0, 20)}...` : movie.title}</p>

        </div>
        </Link>
        
        </>
    )

}

export default MovieCard