import React from 'react'
import { useEffect, useState } from 'react'

    const WeatherCard = ({weather, temperature}) => {
    
    const [isCelsius, setIsCelsius] = useState(true) 
    const handleClick = () => setIsCelsius(!isCelsius) 

  return (
    <article className="card">
        <div className="card__title">Weather App</div>
        <h2 className="card__subtitle">{weather?.name}, {weather?.sys.country}</h2>
        <div className="card__body">
            <div>
                <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
            </div>
            <section className="card__info-body">
                <h3 className="card__info-title">{weather?.weather[0].description}</h3>
                <ul>
                    <li><span>Wind Speed: </span>{weather?.wind.speed}m/s</li>
                    <li><span>Cloud: </span>{weather?.clouds.all}%</li>
                    <li><span>Pressure: </span>{weather?.main.pressure}hPa</li>
                </ul>
            </section>
        </div>
        <footer className="card__footer">
            <h2 className="card__temperature">{isCelsius ? temperature?.celsius + ' °C ' : temperature?.faremheit}</h2>
            <button className="card__btn" onClick={handleClick}>Change to F°</button>
        </footer>
    </article>
    
  )
}

export default WeatherCard