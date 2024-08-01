import { getDataMovie } from '@/Components/Api/Api'
import { Allmovies, Movie, TvShow, UpcomingMovie, AllList, AllTvList, Genre } from '@/page'


export const getMovies = async() => {

    const movies = await getDataMovie<Movie[]>("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1")

    return movies

}


export const getTvShow = async() => {

    const tvshow = await getDataMovie<TvShow[]>("https://api.themoviedb.org/3/trending/tv/day?language=en-US")

    return tvshow

}


export const getAllMovies = async() => {

    const allmovies = await getDataMovie<Allmovies[]>("https://api.themoviedb.org/3/trending/movie/day?language=en-US")

    return allmovies

}

export const getUpcomingMovies = async() => {

    const UpcomingMovies = await getDataMovie<UpcomingMovie[]>("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1")

    return UpcomingMovies

}


export const getSearchMovies = async (query: string):Promise<AllList[]>=> {

  try {
    
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=d92de49cc045b7079ff263d81acb9db2`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("search field", data)
    return data.results;
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to fetch data");
  }
};



export const getSearchTvShows = async (query: string):Promise<AllTvList[]>=> {

  try {
    
    const response = await fetch(
      `https://api.themoviedb.org/3/search/tv?query=${query}&api_key=d92de49cc045b7079ff263d81acb9db2`
    );

    if (!response.ok) {

      throw new Error(`HTTP error! status: ${response.status}`);

    }

    const data = await response.json();
    console.log("Tv Shows Results", data)
    return data.results;

  } 
  
  catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to fetch data");
  }

};



export const getCast = async (id: number) => {

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=d92de49cc045b7079ff263d81acb9db2`
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data.cast;
    } catch (error) {
      console.error("API Error:", error);
      throw new Error("Failed to fetch data");
    }
  };


  export const getCastTv = async (id: number) => {

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}/credits?api_key=d92de49cc045b7079ff263d81acb9db2`
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data.cast;
    } catch (error) {
      console.error("API Error:", error);
      throw new Error("Failed to fetch data");
    }
  };
  

  export const getSimilar = async (id: number) => {

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=d92de49cc045b7079ff263d81acb9db2`
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("API Error:", error);
      throw new Error("Failed to fetch data");
    }
  };


   export const getSimilarTvShows = async (id: number) => {

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}/similar?api_key=d92de49cc045b7079ff263d81acb9db2`
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("API Error:", error);
      throw new Error("Failed to fetch data");
    }
  };


  export const getVideo = async (id: number) => {

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=d92de49cc045b7079ff263d81acb9db2`
      );
  
      if (!response.ok) {

        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data.results;
    }
       catch (error) {
      console.error("API Error:", error);
      throw new Error("Failed to fetch data");
    }
  };
  



  export const getVideoTv = async (id: number) => {

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}/videos?api_key=d92de49cc045b7079ff263d81acb9db2`
      );
  
      if (!response.ok) {

        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data.results;
    }
       catch (error) {
      console.error("API Error:", error);
      throw new Error("Failed to fetch data");
    }
  };
  






