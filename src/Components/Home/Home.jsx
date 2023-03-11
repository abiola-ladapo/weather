import React, {useState} from 'react'
import './Home.css';
import axios from 'axios';

const Home = () => {
  const [data,setData]= useState ({})
  const [location,setLocation]= useState ('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=a719be3fe62e736dc6d663c4f4cf5e5b`

  const searchLocation =(event)=> {
    if (event.key ==='Enter'){
    axios.get(url).then((Response)=>{
      setData(Response.data)
     })
      setLocation('')
    }
  }
  return (
    <div className="container-fluid home-container d-flex align-items-center justify-content-center">
      <div className="row">
        <div className="col-md home-details">
          <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          className='mb-4' type="text" placeholder='Search....' />
          <h2>{data.name}</h2>
          {data.weather ? <p>{data.weather[0].main}</p> :null}

          {/* <h6 className='mb-4'>Tuesday, March 10,2023</h6> */}
          {data.main ?  <h1>{data.main.temp.toFixed()}<sup>o</sup>C</h1>:null }


          <div className="home-details1 d-flex justify-content-between align-items-center text-center">
            <div className="detail px-4">
              {data.main ?  <h3>{data.main.feels_like.toFixed()}<sup>o</sup>C</h3> : null }
              <small>Feels Like</small>
            </div>

            <div className="detail px-4">
              {data.main ?  <h3>{data.main.humidity}%</h3> :null}
              <small>Humidity</small>
            </div>

            <div className="detail px-4">
              {data.wind ? <h3>{data.wind.speed.toFixed()}m/s</h3>:null }
              <small>Wind Speed</small>
            </div>

          </div>





        </div>
      </div>
    </div>
  )
}

export default Home