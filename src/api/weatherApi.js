
import format from 'date-fns/format'

import safeGet from '../utils/safeGet'

const GET_ENDPOINT = (place) => `https://api.openweathermap.org/data/2.5/forecast?q=${place},ca&appid=${process.env.REACT_APP_WEATHER_API_KEY}`


const normalizeForecasts = (forecasts) => {

  const normalizedData = forecasts.list.map(value => {

    let icon = safeGet(['weather', 0, 'icon'], value)
    let date = safeGet(['dt_txt'], value).split(" ")[0]

    let formatedDate = format(new Date(date), 'EEEE')

    return {
      id: safeGet(['dt'], value),
      description: safeGet(['weather', 0, 'description'], value),
      humidity: safeGet(['main', 'humidity'], value),
      icon: `http://openweathermap.org/img/wn/${icon}@2x.png`,
      temperature: Math.floor(safeGet(['main', 'temp'], value) - 273.15),
      feelsLike: Math.floor(safeGet(['main', 'feels_like'], value) - 273.15),
      wind: safeGet(['wind', 'speed'], value),
      date: formatedDate
    }
  })
    .reduce((acc, current) => {
      const found = acc.find(item => item.date === current.date);

      if (!found) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, [])
    .slice(0, 5);


  let city = safeGet(['city'], forecasts)

  return {
    city: `${city.name}, ${city.country}`,
    days: [...normalizedData]
  }

}



export const fetchForecasts = async (place) => {

  const res = await fetch(GET_ENDPOINT(place))
  const data = await res.json()

  return normalizeForecasts(data)
}