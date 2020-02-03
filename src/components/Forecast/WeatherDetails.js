import React from 'react'
import PropTypes from 'prop-types'



const WeatherDetails = ({
  temperature,
  humidity,
  wind,
  feelsLike,
  description,
  icon,
  isCelsius,
  toggleTemp
}) => {

  return (
    <div className="card-body">
      <div className="degree-wrapper">
        <span className="grey deg" >
          {temperature}
          <button
            className="temp-btn"
            disabled={isCelsius}
            onClick={toggleTemp}
          >°C
            </button>/<button
            className="temp-btn"
            disabled={!isCelsius}
            onClick={toggleTemp}
          >°F
            </button>
        </span>
        <div className="weather-details">
          <span className="grey fs fs-md t">Feels Like: {feelsLike}%</span>
          <span className="grey fs fs-md t">Humidity: {humidity}%</span>
          <span className="grey fs fs-md t">Wind: {wind}{isCelsius ? 'km/h' : 'mph'}</span>
        </div>
      </div>
      <div className="weather-icon">
        <img src={icon} className="weather-icon" alt={description} />
      </div>

    </div>
  )
}
WeatherDetails.propTypes = {
  temperature: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  humidity: PropTypes.number.isRequired,
  feelsLike: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  wind: PropTypes.number.isRequired
}

export default WeatherDetails
