type optionsType = {
  method: string,
  url: string,
  headers: {
    'X-RapidAPI-Key': string,
    'X-RapidAPI-Host': string
  }
}

export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  // console.log(import.meta.env.VITE_RAPID_API_KEY);
  

export const fetchData = async ( url: string, options: optionsType) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}