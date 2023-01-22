import React, { useEffect, useState } from 'react';
export default function Output({ lat, setLat, setLong, long }) {
  const [data, setData] = useState([]);
  const fetchingAPI = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=81c2336ccda201c6ed2f51bce57e3bb3`;
    return fetch(url)
      .then((response) => response.json())
      .then((d) => setData([d]));
  };
  useEffect(()=>{
    fetchingAPI();
  },[])
  console.log(data)

  return (
    <>
      {data && data.length>0 && 
        data.map(ele=>{
          return(
            <h1>{ele.main.temp}</h1>
          )
        })
      }
    </>
  );
}
