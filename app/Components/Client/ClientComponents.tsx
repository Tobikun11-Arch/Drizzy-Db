"use client";
//Client Components*
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Movie } from '@/page';
import { TvShow } from '@/page';
import { Allmovies, UpcomingMovie } from '@/page';
import { getAllMovies, GetTopRated, GetTv, getUpcomingMovie } from '@/Components/Api/Api';
import MovieList from '@/Components/TopRated/MovieList';
import { motion } from "framer-motion";
import TvshowList from '@/Components/Tv Shows/TvshowList';
import AllMovieList from '../All Movies/AllMovieList';
import UpcomingMovieList from '../Upcoming Movies/UpcomingMovieList';
import Loader from '@/Components/Loader/Loader'
import { getSearchMovies, getSearchTvShows } from '../Server/ServerComponent';
import SearchCardList from '@/Components/AllMovieList/moviesAllList'
import TvList from '../AllTvList/TvList';



export default function Server() {

    const [movies, setMovies] = useState<Movie[]>([]);
    const [tvShow, setTvshow] = useState<TvShow[]>([]);
    const [allMovie, setAllMovie] = useState<Allmovies[]>([]);
    const [upcomingMovie, setupcomingMovie] = useState<UpcomingMovie[]>([]);

    const [filtered, setFiltered] = useState<Movie[]>([]);
    const [filteredTv, setFilteredTv] = useState<TvShow[]>([]);
    const [filteredall, setFilteredall] = useState<Allmovies[]>([]);
    const [filteredUpcoming, setFilteredUpcoming] = useState<UpcomingMovie[]>([]);

    const[loading, setLoading] = useState(false);

    const [searchField, setsearchField] = useState('');

    // ChipTabs
    const tabs = ["Top Rated", "Movies", "Upcoming Movies", "TV Shows"];
    const [selected, setSelected] = useState(tabs[0]);


    useEffect(() => {

        const saveTab = localStorage.getItem('selectedTab')

        if(saveTab !== null) {

            setSelected(saveTab);

        }

    }, []);


    const HandleTabs = (text: string) => {

        setSelected(text)
        localStorage.setItem('selectedTab', text)

    }


    useEffect(() => {

        const searchText = localStorage.getItem('Field')

        if(searchText !== null) {

            setsearchField(searchText)

        }

    })

    const handleSearchField = (searchText: string) => {

        setsearchField(searchText)
        localStorage.setItem('Field', searchText)

    }



    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true)

            try {

                if (selected === "Top Rated") {
                    const fetchedMovies = await GetTopRated() ?? [];
                    setMovies(fetchedMovies);
                    setFiltered(fetchedMovies);
                } 

                else if (selected === "Upcoming Movies") {
                    const fetchedTv = await getUpcomingMovie() ?? [];
                    setupcomingMovie(fetchedTv);
                    setFilteredUpcoming(fetchedTv);
                }
                
                else {
                    setMovies([]);
                    setFiltered([]);

                    setupcomingMovie([]);
                    setFilteredUpcoming([]);
                }
            } catch (error) {
                console.error("Error fetching data: ", error);
            }

            finally{

                setLoading(false);

            }

        };

        fetchMovies();
    }, [selected]);


    
    useEffect(() => {
        const fetchSearchMovies = async () => {
            
                try {
                    if(selected === "Movies") {
                    if(searchField){
                        
                    const fetchedSearchMovies = await getSearchMovies(searchField) ?? [];
                    setFilteredall(fetchedSearchMovies);
                    }

                    else {

                    const fetchall = await getAllMovies() ?? [];
                    setAllMovie(fetchall)
                    setFilteredall(fetchall)

                    }
                }

                } catch (error) {
                    console.error("Error fetching search results: ", error);
                }
                  
        };

        fetchSearchMovies();
    }, [selected, searchField]);



    useEffect(() => {

        const fetchSearchTvshows = async () => {
            
            try {

                if(selected === "TV Shows") {
                if(searchField){
                    
                const fetchedSearchTvShow = await getSearchTvShows(searchField) ?? [];
                setFilteredTv(fetchedSearchTvShow);

                }

                else {

                const fetchtv = await GetTv() ?? [];
                setTvshow(fetchtv)
                setFilteredTv(fetchtv)

                }
            }

            } 
            
            catch (error) {
                
                console.error("Error fetching search results: ", error);
            }
              
    };

    fetchSearchTvshows();

    }, [selected, searchField])

    


    useEffect(() => {
        const newFiltered = movies.filter((movie) => movie.title?.toLowerCase().includes(searchField));
        setFiltered(newFiltered);
    }, [movies, searchField]);

    useEffect(() => {
        const tvshows = tvShow.filter((tv) => tv.name.toLowerCase().includes(searchField));
        setFilteredTv(tvshows);
    }, [tvShow, searchField]);

    useEffect(() => {
        const allmovies = allMovie.filter((all) => all.title?.toLowerCase().includes(searchField));
        setFilteredall(allmovies);
    }, [allMovie, searchField]);

    useEffect(() => {
        const upcomingfilter = upcomingMovie.filter((Upcoming) => Upcoming.title?.toLowerCase().includes(searchField));
        setFilteredUpcoming(upcomingfilter);
    }, [upcomingMovie, searchField]);


    const onsearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        const searchString = event.target.value.toLowerCase();
        handleSearchField(searchString);
    };

    const getPlaceholderText = () => {
        switch (selected) {
            case 'Top Rated':
                return 'Search for Top Rated Movies';
            case 'Movies':
                return 'Search for All Movies';
            case 'Upcoming Movies':
                return 'Search for Upcoming Movies';
            case 'TV Shows':
                return 'Search for All TV Shows';
            default:
                return 'Search';
        }
    };

    return (
       <>
       
       {loading ? (
            <div className="flex justify-center items-center h-screen">
           <Loader />
           </div>
               ) : (
             <>
            <div className="w-full flex flex-col items-center pt-12">
    
                <input
                    type="text"
                    className='w-3/4 h-12 rounded-xl border-none mt-10 outline-none pl-3 text-white bg-gray-800 placeholder-gray-400 SearchBar'
                    onChange={onsearchChange}
                    value={searchField} 
                    placeholder={getPlaceholderText()}
                />

                <div className="mt-8 flex gap-1 pb-12">
                    {tabs.map((tab) => (
                        <Chip
                            text={tab}
                            selected={selected === tab}
                            setSelected={HandleTabs}
                            key={tab}
                        />
                    ))}
                </div>
            </div>


            <h1 className='text-3xl mt-10 text-white font-bold ml-5 Selected'>{selected}</h1>

            {selected === 'TV Shows' && (
               <>
                        {searchField ? (
                            <TvList TvList={filteredTv} />
                        ) : (
                            <TvshowList show={filteredTv} />
                        )}
                    </>
            )}

            {selected === 'Top Rated' && <MovieList movies={filtered} />}

            {selected === 'Movies' && (
               <>
                        {searchField ? (
                            <SearchCardList search={filteredall} />
                        ) : (
                            <AllMovieList all={filteredall} />
                        )}
                    </>
            )}

            {selected === 'Upcoming Movies' && <UpcomingMovieList Movies={filteredUpcoming}/>}

            </>
           )}
        </>
    );
}

type ChipProps = {
    text: string;
    selected: boolean;
    setSelected: (value: string) => void;
};

const Chip: React.FC<ChipProps> = ({ text, selected, setSelected }) => {
    return (
        <button
            onClick={() => setSelected(text)}
            className={`${selected ? "text-white" : "text-slate-300 hover:text-slate-200 hover:bg-blue-600"} SelectedTabs transition-colors px-1.5 py-0.5 rounded-md relative`}
        >
            <span className="relative z-10">{text}</span>
            {selected && (
                <motion.span
                    layoutId="pill-tab"
                    transition={{ type: "spring", duration: 1.5 }}
                    className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"
                ></motion.span>
            )}
        </button>
    );
};
