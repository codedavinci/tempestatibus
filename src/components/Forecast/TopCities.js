import React from 'react'
import PropTypes from 'prop-types'
import { List, Skeleton } from 'antd'

const cities = [
  'Vancouver',
  'Toronto',
  'Ottawa',
  'Montreal',
  'Quebec City',
  'Calgary',
  'Edmonton',
  'Winnipeg'
]



const Title = () => (
  <List.Item>
    <span className="grey fs fs-lg thick pd-1">TOP CITIES</span>
  </List.Item>
)

const TopCities = ({ handleClick }) => {
  return (
    <>
      <List
        header={<Title />}
        itemLayout="horizontal"
        dataSource={cities}
        renderItem={city => (
          <List.Item onClick={() => handleClick(city)} className="cities">
            <Skeleton title={false} loading={false} active>
              <div className="title fs fs-lg pd-1 ">{city}</div>
            </Skeleton>
          </List.Item>
        )}
      />
    </>

  )
}

TopCities.propTypes = {
  handleClick: PropTypes.func.isRequired,
}

export default TopCities
