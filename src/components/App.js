import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive'

import Layout from './Layout'
import { Forecast } from './Forecast'
import Search from './Search'
import { Welcome, ErrorView } from './Common'

import { fetchForecasts } from '../api/weatherApi'
import delay from '../utils/delay'

import './app.css'


function App() {

  const [forecasts, setForecasts] = useState({ city: '', days: [] })
  const [day, setDay] = useState({ selected: {}, selectedIndex: null })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [firstVisited, setFirstVisited] = useState(true)
  const [searchValue, setSearchValue] = useState('')
  const [collapsed, setCollapsed] = useState(false)
  const isMobile = useMediaQuery({ maxWidth: 767 })


  const handleSelectDay = (selectedIndex) => {
    const newSelection = forecasts.days[selectedIndex]

    setDay(prev => ({
      ...prev,
      selectedIndex,
      selected: { ...newSelection }
    }))
  }


  const handleClickLogo = () => {
    setFirstVisited(true)
  }

  const handleCollapsed = () => {
    setCollapsed(prev => !prev)
  }

  const handleError = () => {
    setError(false)
    setFirstVisited(true)
  }

  const handleChangeSearch = (e) => {
    e.preventDefault()
    setSearchValue(e.target.value)
  }
  const handleTopCities = (city) => {
    if (isMobile) {
      setCollapsed(prev => !prev)
    }

    setSearchValue(city)
    handleFetchForecast(city)
  }

  const handleFetchForecast = async (place) => {

    setFirstVisited(false)
    setLoading(true)

    try {
      await delay(1500)
      const data = await fetchForecasts(place)

      if (data && data.cod === "404") {
        throw Error(data.message)
      }

      setForecasts(data)
      setDay(prev => ({
        ...prev,
        selectedIndex: 0,
        selected: data.days[0]
      }))

    } catch (error) {
      setError(true)
    }

    setLoading(false)
  }


  if (error) {
    return <ErrorView handleError={handleError} />
  }

  return (
    <Layout
      handleTopCities={handleTopCities}
      handleClickLogo={handleClickLogo}
      collapsed={collapsed}
      setCollapsed={handleCollapsed}
      isMobile={isMobile}
    >
      <Search
        handleSubmit={handleFetchForecast}
        searchValue={searchValue}
        handleChange={handleChangeSearch}
      />
      {firstVisited ?
        <Welcome /> :
        <Forecast
          forecasts={forecasts}
          day={day}
          handleSelectDay={handleSelectDay}
          loading={loading}
        />
      }
    </Layout>

  );

}


export default App;
