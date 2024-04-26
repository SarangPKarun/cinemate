import React, { useState, useEffect } from 'react'

export const useFetch = (apiPath, queryTerm="") => {

    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=4d3a1228f4ddb4032ac0be46de9b41ce&query=${queryTerm}`

    useEffect(() => {

        async function fetchMovies(){
          const response = await fetch(url);
          const json = await response.json();
          setData(json.results);
        }
        fetchMovies();
      }, [url]);

  return { data }
}
