"use client"    
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation"; // Use useParams from next/navigation
import Back from './goBack'
import Drizzy from './Drizzy'
import Link from "next/link";
import IconBxLike from './IconBxLike'
import IconStarFill from './IconStarFill'
import Trailer from './watchTrailer'
import Transparenttrailer from './TrailerTransparent'
import Cast from '@/Components/Slide/Cast'
import SimilarMovies from '@/Components/Slide/SimilarMovie'
import Icon021VideoCamera from './Icon021VideoCamera'
import { getVideo } from "@/Components/Server/ServerComponent";
import ExitTrailer from './ExitTrailer'
import Loader from '@/Components/Loader/Loader'
import '@/movie/ScreenSize/MovieDetails.css'
import { Genre } from "@/page";



const MovieDetails = () => {
    const { id } = useParams(); // Get the movie ID from the URL parameters
    const[movie, setMovie] = useState<any>(null); // Use any or define a proper type
    const[loading, setLoading] = useState(true);
    const[loader, setloader] = useState(false);
    const[see, setSee] = useState(false);

    const[isOpen, setOpen] = useState(false);
    const[videoKey, setVideoKey] = useState("");
    const[ Genre, setGenre] = useState([])

    const handleSeeMoreToggle = () => {
        setSee(prevState => !prevState);
      };


     //For size of trailer button
     const [isSmallScreen, setIsSmallScreen] = useState(false);

     useEffect(() => {
         const handleResize = () => {
           setIsSmallScreen(window.innerWidth >= 319 && window.innerWidth <= 1100);
         };
     
         // Initial check
         handleResize();
     
         // Add event listener
         window.addEventListener('resize', handleResize);
     
         // Cleanup event listener
         return () => window.removeEventListener('resize', handleResize);
       }, []);



    const handleTrailer = async() => {

        const videoData = await getVideo(Number(id))
        setloader(true)

        try {

            if(!videoData || videoData.length === 0 ) {

                return alert('Video Not found!');

            }

            const firstkey = videoData[0].key;

            setVideoKey(firstkey)
            setOpen(true)

        }

        catch(error) {

            console.error(error)

        }

        finally{

            setloader(false)

        }

    }


    const TrailerClose = () => setOpen(false);



    useEffect(() => {
        if (id) {
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d92de49cc045b7079ff263d81acb9db2`)
                .then((response) => response.json())
                .then((data) => {
                    setMovie(data);
                    setLoading(false); //
                })
                .catch((error) => {
                    console.error('Error fetching movie details:', error);
                    setLoading(false); 
                });
        }

    }, [id]);
   
    function getGenreNames(genres: Genre[]): string {
        return genres.map(genre => genre.name).join(", ");
    }

    
    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: '2-digit',
        });
      };


    if (loading) {

        return(
            <>
            <div className="w-full h-screen flex justify-center items-center Bg">
                
            <div className="border-t-2 rounded-full border-yellow-500 bg-yellow-300 animate-spin
            aspect-square w-15 h-20 flex justify-center items-center text-yellow-700">| |</div>

            </div>

            </>
        )

    }

    const OriginalBackground = "https://image.tmdb.org/t/p/original";


    const ShowReadMore = movie.overview.length > 400;

   


    return (
       <>
       
       <div className="w-full h-screen Background"  style={{backgroundImage: `linear-gradient(to right, #000, transparent), url(${movie.backdrop_path ? `${OriginalBackground}/${movie.backdrop_path}` : "https://www.katebackdrop.com/cdn/shop/products/Kate_Movie_Night_Backdrop_Red_Curtain_for_Photography_10x8ft_BH1030936U.jpg?v=1631776029&width=1000"})` ,
        backgroundSize: "cover",}}>

        <div className="flex w-full h-24 items-center justify-between Nav">

            <Link href={"/"}><div className="ml-10"><Back /></div></Link>


            <div className="logo flex items-center mr-5">

                <img src="https://cdn-icons-png.flaticon.com/512/1137/1137143.png" alt="" className="w-10 h-10"/>

                <div className="name"><Drizzy /></div>

            </div>

        </div>


        <div className="w-full max-h-screen flex justify-between mt-20 MainDetails">

    <div className="w-auto h-auto Alldetails">

        <div className="ml-20 details flex">

            <div className="ImagetoDate">
                <img
                    src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"}
                    className={`${movie.poster_path ? 'h-96 w-72 PosterImg Poster500' : 'w-72 h-96 PosterImg Poster500'}`}
                />

                <div className="Holder">

                    <div className="TitleToDate">

                        <p className="text-white font-bold text-2xl Title">{movie.title}</p>
                        <div className="flex items-center mt-1 MovieVoteCount">
                            <IconBxLike />
                            <p className="text-white ml-2 MovieData">{movie.vote_count}</p>
                        </div>
                        <div className="flex items-center mt-1">
                            <IconStarFill />
                            <p className="text-white ml-2 MovieData">{movie.vote_average.toString().substring(0, 3)}</p>
                        </div>
                        <div className="flex items-center mt-1">
                            <Icon021VideoCamera />
                            <p className="text-white ml-1 MovieData">{formatDate(movie.release_date)}</p>
                        </div>
                        <div className="flex items-center mt-1">
                            <p className="text-white ml-1 MovieData"> <span className="font-bold">Genre{movie.genres.length !== 1 ? 's' : ''}:</span> {getGenreNames(movie.genres)}</p>   
                        </div>
                        <div className="flex items-center mt-3" onClick={handleTrailer}>
                            {isSmallScreen ? <Transparenttrailer /> : ''}
                        </div>

                    </div> {/* TitleToDate Close */}
                </div> {/* Holder Close */}
            </div> {/* ImagetoDate Close */}

        
            <div className={`${see ? 'flex-col ml-5 w-1/2 microDetails' : 'flex-col ml-5 w-96 microDetails'}`}>
                <p className="text-white mt-5 font-bold text-xl MovieTitleSynopsis">{movie.title} Synopsis:</p>
                <p className="text-white cursor-default MovieOverview">{see || movie.overview.length < 400 ? movie.overview : `${movie.overview.substring(0, 400)}...`}</p>
                {ShowReadMore && (
                    <p className="text-sm">
                        <a className="underline text-sm MovieOverview text-white cursor-pointer" onClick={handleSeeMoreToggle}>
                            {see ? 'See less' : 'Read More'}
                        </a>
                    </p>
                )}

            </div> {/* microDetails Close */}
        </div> {/* details Close */}

        {isOpen && (
            <>
                {loader ? (
                    <div className="flex justify-center items-center h-screen">
                        <Loader />
                    </div>
                ) : (
                    <>
                        <div className="fixed inset-0 z-50 flex items-center justify-center px-5 font-sans">
                            <div className="relative flex w-full max-w-4xl items-center justify-center">
                                <iframe className="h-64 w-full md:h-96 lg:h-[500px] xl:h-[500px]" frameBorder="0" allowFullScreen src={`https://www.youtube.com/embed/${videoKey}`}></iframe>
                                <div className="absolute right-2 top-1" onClick={TrailerClose}>
                                    <ExitTrailer />
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </>
        )}
    </div> {/* Alldetails Close */}
    
    <div className="w-auto h-80 flex items-center">
        <div className="mr-16 TrailerSide" onClick={handleTrailer}>
            {isSmallScreen ? '' : <Trailer />}
        </div>
    </div>
</div> {/* MainDetails Close */}


                     
       </div> {/** Whole page */}

       <div className="w-full min-h-screen Bg">
        <>

       <Cast id={(Number(id))}/>

       <SimilarMovies id={(Number(id))}/>



       </>
       </div>
       </>
    );
}

export default MovieDetails;