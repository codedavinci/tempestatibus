import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'





const DaysList = ({ days, selectedIndex, handleSelectDay }) => {


  return (
    <Card className="days-container">
      {
        days.map((day, idx) => {
          return (
            <Card.Grid
              key={day.id}
              className={`days-wrapper ${selectedIndex === idx ? 'selected' : ''}`}
              onClick={() => handleSelectDay(idx)}
            >
              <span className="grey fs fs-md">{day.date.substring(0, 3)}</span>
              <img src={day.icon} alt={day.description} className="day-box-icon" />
              <span className="grey fs fs-sm">{day.temperature}°/{day.feelsLike}°</span>
            </Card.Grid>
          )
        })
      }
    </Card>

  )
}
DaysList.propTypes = {
  days: PropTypes.array.isRequired,
  selectedIndex: PropTypes.number.isRequired,
  handleSelectDay: PropTypes.func.isRequired,
}

export default DaysList
