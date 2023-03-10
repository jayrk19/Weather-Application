export default function Input({ lat, setLat, setLong, long,clicked,setClicked}) {
  function handleClick(e) {
    
    document.getElementById('longInput').value = 0;
    
    document.getElementById('latInput').value = 0;
    // console.log("input :",lat,long)
    setClicked(prev=>prev+1);
  }
  return (
    <>
      <h3>Enter Longitude</h3>
      <input
        type="text"
        value={long}
        id="longInput"
        onChange={(e) => {
          setLong(e.target.value);
        }}
      />
      <h3>Enter Latitude</h3>
      <input
        type="text"
        value={lat}
        id="latInput"
        onChange={(e) => {
          setLat(e.target.value);
        }}
      />
      <div>
        <button onClick={handleClick}>Submit</button>
      </div>
    </>
  );
}
