
import { Movie, UpcomingMovie } from '@/page'
import { TvShow } from '@/page'
import { Allmovies } from '@/page'



export const getDataMovie = async <T>(url: string): Promise<T> => {

    const response = await fetch(url);
    return await response.json();
    
}



const TMDB_ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTJkZTQ5Y2MwNDViNzA3OWZmMjYzZDgxYWNiOWRiMiIsIm5iZiI6MTcyMTU1NzczNC42NzQyOTEsInN1YiI6IjY2OWNjZTIzZGE0ZTRmMTQzNjM3ZGIyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fLnWlFc4ap06FyDEoX-1O3QnW0ZlhFSibpJD1w2PCV0';


export const GetTopRated = async (): Promise<Movie[] | undefined> => {

        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
          },
        };
      
        try {
          const response = await fetch(
            "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
            options
          );
          if (!response.ok) throw new Error("API request failed");
          const resJson = await response.json();
          console.log("getTrendingMovie response: ", resJson);
          return resJson.results;
        } catch (error) {
          console.error(error);
        }
};




const TMDB_ACCESS_TV = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTJkZTQ5Y2MwNDViNzA3OWZmMjYzZDgxYWNiOWRiMiIsIm5iZiI6MTcyMTcwODgwMS4zNDkxMzEsInN1YiI6IjY2OWNjZTIzZGE0ZTRmMTQzNjM3ZGIyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.woRlwLAYwT-5jU63wutNT3mXqSmt9B3rBwtVTB-Pehs'

export const GetTv = async (): Promise<TvShow[] | undefined> => {

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_ACCESS_TV}`,
    },
  };

  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
      options
    );
    if (!response.ok) throw new Error("API request failed");
    const resJson = await response.json();
    console.log("getTv response: ", resJson);
    return resJson.results;
  } catch (error) {
    console.error(error);
  }
};




const TMDB_ACCESS_AllMovie = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTJkZTQ5Y2MwNDViNzA3OWZmMjYzZDgxYWNiOWRiMiIsIm5iZiI6MTcyMTcwODgwMS4zNDkxMzEsInN1YiI6IjY2OWNjZTIzZGE0ZTRmMTQzNjM3ZGIyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.woRlwLAYwT-5jU63wutNT3mXqSmt9B3rBwtVTB-Pehs'

export const getAllMovies = async (): Promise<Allmovies[] | undefined> => {

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_ACCESS_AllMovie}`,
    },
  };

  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      options 
    );
    if (!response.ok) throw new Error("API request failed");
    const resJson = await response.json();
    console.log("getAllMovies response: ", resJson);
    return resJson.results;
  } catch (error) {
    console.error(error);
  }
};


const TMDB_ACCESS_UpcomingMovie = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTJkZTQ5Y2MwNDViNzA3OWZmMjYzZDgxYWNiOWRiMiIsIm5iZiI6MTcyMTcwODgwMS4zNDkxMzEsInN1YiI6IjY2OWNjZTIzZGE0ZTRmMTQzNjM3ZGIyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.woRlwLAYwT-5jU63wutNT3mXqSmt9B3rBwtVTB-Pehs'

export const getUpcomingMovie = async (): Promise<UpcomingMovie[] | undefined> => {

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_ACCESS_UpcomingMovie}`,
    },
  };

  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options
    );
    if (!response.ok) throw new Error("API request failed");
    const resJson = await response.json();
    console.log("getUpcomingMovie response: ", resJson);
    return resJson.results;
  } catch (error) {
    console.error(error);
  }
};

















      /**curl --request GET \
     --url 'https://api.themoviedb.org/3/trending/all/day?language=en-US' \
     --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTJkZTQ5Y2MwNDViNzA3OWZmMjYzZDgxYWNiOWRiMiIsIm5iZiI6MTcyMTU1NzczNC42NzQyOTEsInN1YiI6IjY2OWNjZTIzZGE0ZTRmMTQzNjM3ZGIyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fLnWlFc4ap06FyDEoX-1O3QnW0ZlhFSibpJD1w2PCV0' \
     --header 'accept: application/json' */

     //https://github.dev/MisterRust/next-tmdb-list --simple

     //https://github.dev/uwerrrr/movie_listing  -complete