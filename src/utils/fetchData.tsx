import { fetchOptionsType } from "./tsTypes";

export const exerciseOptions: fetchOptionsType = {
    method: 'GET',
    // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions: fetchOptionsType = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  

export const fetchData = async ( url: string, options: fetchOptionsType) => {
    console.log("Fetching data for....", url);
    
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}