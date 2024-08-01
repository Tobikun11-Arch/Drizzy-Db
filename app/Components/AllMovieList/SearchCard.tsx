import { AllList } from '@/page'
import Link from 'next/link';


const AllListcard  = ({search}: {search: AllList}) => {

    const {id, poster_path} = search;
    
    return (
        <>

        <Link href={`/movie/${id}`} passHref><div className="Card-Container Bgs" key={id}>

        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
        <p className='flex justify-center items-center text-white font-mono font-semi-bold cursor-default hover:text-gray-500 TextSize'>{search.title.length > 24 ? `${search.title.substring(0, 20)}...` : search.title}</p>

        </div>
        </Link>
        
        </>
    )

}

export default AllListcard