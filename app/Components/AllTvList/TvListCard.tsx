import { AllTvList } from '@/page'
import Link from 'next/link';


const TvListCard  = ({TvList}: {TvList: AllTvList}) => {

    const {id, poster_path} = TvList;
    
    return (
        <>

        <Link href={`/tv/${id}`} passHref><div className="Card-Container Bgs" key={id}>

        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
        <p className='flex justify-center items-center text-white font-mono font-semi-bold cursor-default hover:text-gray-500 TextSize'>{TvList.name.length > 24 ? `${TvList.name.substring(0, 20)}...` : TvList.name}</p>

        </div>
        </Link>
        
        </>
    )

}

export default TvListCard