import axios from 'axios'
import { useEffect, useState } from 'react'
import WeatherCard from './components/WeatherCard'
import './App.css'

function App() {

const [coords, setcoords] = useState()
const [Weather, setWeather] = useState()
const [temperature, settempeture] = useState()
const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
  const success = pos => {
    const obj = { 
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    }
    setcoords(obj)
  }
  navigator.geolocation.getCurrentPosition(success)
}, [])

useEffect(() => {
  if(coords) {
    const APIKey = '14a46b904a3391a7b197ab91426912d6'
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=ffa94a26584a8a995fd149d4d22c6b4e`

    axios.get(url)
    .then(res => { 
      setWeather(res.data)
      const obj = {
        celsius:(res.data.main.temp - 273.15).toFixed(1),
        faremheit: ((res.data.main.temp - 273.15) * 9/5 + 32).toFixed(1)
      }
      settempeture(obj)
      })

    .catch(err => console.log(err))
    .finally(() =>setIsLoading(false))
  }
}, [coords])

  return (
    <div className="App">
      {

        isLoading ?
          <h1>Loading...</h1>
        :
        <WeatherCard 
          weather={Weather}
          temperature={temperature} 
        />
      }
    </div>
  )
}

export default App
