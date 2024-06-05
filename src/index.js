import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
const WhetherApp = () => {

  const[place, setplace]=useState('')
  const[speed, setspeed]=useState('')
  const[longitude, setlongitude]=useState('')
  const[latitude, setlatitude]=useState('')
  const[status, setstatus]=useState('')
  const[min, setmin]=useState('')
  const[humidity, sethumidity]=useState('')
  const[max, setmax]=useState('')
  const[pressure, setpressure]=useState('')
  const[sunrise, setsunrise]=useState('')
  const[sunset, setsunset]=useState('')
  const[temp,settemp]=useState('')
  const [search, setSearch] = useState('')
  // const [value, setValue] = useState('')

  const urlFirst="https://api.openweathermap.org/data/2.5/weather?q="
  const urlLast="&appid=bfb12dd01a60ae5bd8c4e6c3e73af357"
  const urlMiddle=search
  const url=urlFirst+urlMiddle+urlLast


  return (
  <div className='whether-container'>
    <div className='search-container'>
      <input type="text" value={search} placeholder='Ex:bengaluru, chittoor.....' onChange={(x) => {
        setSearch(x.target.value)
      }}></input>

      <button onClick={() => {
        

        async function weather() {
          const data = await fetch(url)
          const weatherData = await data.json()
          console.log(url)

          // const totalData=weatherData
          const temp=Math.floor(weatherData.main.temp)-273
          const place=weatherData.name
          const longitude=weatherData.coord.lon
          const latitude=weatherData.coord.lat
          const status=weatherData.weather[0].main
          const speed=weatherData.weather.speed
          const min=Math.floor(weatherData.main.temp_min)-273
          const max=Math.floor(weatherData.main.temp_max)-273
          const pressure=weatherData.main.pressure
          const humidity=weatherData.main.humidity
          const sunrise=weatherData.sys.sunrise
          const sunset=weatherData.sys.sunset
          

          sethumidity(humidity)
          setlatitude(latitude)
          setlongitude(longitude)
          setmax(max)
          setmin(min)
          setsunrise(sunrise)
          setsunset(sunset)
          setpressure(pressure)
          setplace(place)
          setspeed(speed)
          setSearch(search)
          setstatus(status)
          settemp(temp)

        }
        weather()
        setSearch('')

      }}>Search</button>
    </div>
    <div className='degrees'>
      <i class="bi bi-cloud-sun-fill"></i>
      <h1>{place}</h1>
      <h1>{temp} °C degrees</h1>
    </div>
    <div className='all-data-container'>
      <div className='data'>
        <div className='icon-flex'>
          <h1 className='icon'><i class="bi bi-globe2"></i></h1>
          <h1>longitude</h1>
        </div>
        <h1>{longitude}</h1>
      </div >
      <div className='data'>
        <div className='icon-flex'>
          <h1 className='icon'><i class="bi bi-globe2"></i></h1>
          <h1>latitude</h1>
        </div>
        <h1>{latitude}</h1>
      </div>
      <div className='data'>
        <div className='icon-flex'>
          <h1 className='icon'><i class="bi bi-cloud-minus-fill"></i></h1>
          <h1>Min temperature</h1>
        </div>
        <h1>{min}</h1>
      </div>
      <div className='data'>
        <div className='icon-flex'>
          <h1 className='icon'><i class="bi bi-brightness-high"></i></h1>
          <h1>Max temperature</h1>
        </div>
        <h1>{max}</h1>
      </div>
      <div className='data'>
        <div className='icon-flex'>
          <h1 className='icon'><i class="bi bi-wind"></i></h1>
          <h1>pressure</h1>
        </div>
        <h1>{pressure}</h1>
      </div>
      <div className='data'>
        <div className='icon-flex'>
          <h1 className='icon'><i class="bi bi-cloud-haze2"></i></h1>
          <h1 >Humidity</h1>
        </div>
        <h1>{humidity}</h1>
      </div>
      <div className='data'>
        <div className='icon-flex'>
          <h1 className='icon'><i class="bi bi-speedometer"></i></h1>
          <h1>Wind Speed</h1>
        </div>
        <h1>{status}</h1>
      </div>
      <div className='data'>
        <div className='icon-flex'>
          <h1 className='icon'><i class="bi bi-sunrise-fill"></i></h1>
          <h1>Sunrise</h1>
        </div>
        <h1>{sunrise}</h1>
      </div>
      <div className='data'>
        <div className='icon-flex'>
          <h1 className='icon'><i class="bi bi-sunset-fill"></i></h1>
          <h1>Sunset</h1>
        </div>
        <h1>{sunset}</h1>
      </div>
    </div>
  </div>
  );
};



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<WhetherApp />);

