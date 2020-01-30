import React from 'react'
import PropTypes from 'prop-types'

const CityDetails = ({ city, date, description }) => {
  return (
    <div className="card-heading">
      <span className="grey fs fs-lg t">{city}</span>
      <span className="grey fs fs-md t">{date}</span>
      <span className="grey fs fs-md t">{description}</span>
    </div>
  )

}

CityDetails.propTypes = {
  city: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default CityDetails
