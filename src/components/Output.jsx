import React, { useEffect, useState } from 'react';
export default function Output({ lat, setLat, setLong, long,clicked }) {
  const [data, setData] = useState([]);
  const fetchingAPI = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=81c2336ccda201c6ed2f51bce57e3bb3`;
    return fetch(url)
      .then((response) => response.json())
      .then((d) => setData([d]));
  };
  useEffect(()=>{
    fetchingAPI();
  },[clicked])
  // setLong((document.getElementById('longInput').value = 0));
  // setLat((document.getElementById('latInput').value = 0));
  // setClicked(false);
  return (
    <>
      {data && data.length>0 && 
        data.map(ele=>{
          return(
            <h3>{`For Country ${ele.sys.country}, City ${ele.name} ,Temperature is ${ele.main.temp} with description as ${ele.weather[0].description}`}</h3>
          )
        })
      }
    </>
  );
}
