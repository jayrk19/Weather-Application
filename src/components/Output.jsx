
export default function Output({ lat, setLat, setLong, long }){
  const fetchingAPI = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=81c2336ccda201c6ed2f51bce57e3bb3`;
    let d = await fetch(url);
    let res = await d.json();
  
    return res;
    
    
  };

  let s= "";
  const res =  fetchingAPI();
  res.then(r=>console.log(r))
  // s = `Weather at ${res.name}, is ${res.sys.country} is ${res.weather[0].description} with temp as ${res.main.temp}`;
  let name = res.name;
  console.log(name)
  return (
  <>
    <h1>{s}</h1>
  
  
  </>);
}
