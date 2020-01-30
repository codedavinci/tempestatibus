import React from 'react'
import PropTypes from 'prop-types'
import { Card, Icon } from 'antd'


import DaysList from './DaysList'
import CityDetails from './CityDetails'
import WeatherDetails from './WeatherDetails'

import './forecast.css'



let loadingStyles = {
  margin: 'auto',
  fontSize: 100,
  color: "white",
}

const Forecast = ({ forecasts, day, handleSelectDay, loading }) => {

  const { days, city } = forecasts
  const {
    description,
    icon,
    temperature,
    humidity,
    wind,
    date,
    feelsLike
  } = day.selected


  if (loading) {
    return <Icon type="loading" style={loadingStyles} spin />
  }

  return (
    <Card className="card-container">
      <div className="card-wrapper">
        <CityDetails
          city={city}
          description={description}
          date={date}
        />
        <WeatherDetails
          icon={icon}
          temperature={temperature}
          humidity={humidity}
          wind={wind}
          feelsLike={feelsLike}
          description={description}
        />
        <DaysList
          days={days}
          selectedIndex={day.selectedIndex}
          handleSelectDay={handleSelectDay}
        />
      </div>
    </Card >
  )
}

Forecast.propTypes = {
  forecasts: PropTypes.object.isRequired,
  day: PropTypes.object.isRequired,
  handleSelectDay: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default Forecast
