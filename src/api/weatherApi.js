
import format from 'date-fns/format'
import axios from 'axios'

import safeGet from '../utils/safeGet'
import { kelvinToCelsius } from '../utils/degreeConversion'

export const GET_ENDPOINT = (place) => `https://api.openweathermap.org/data/2.5/forecast?q=${place},ca&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
export const GET_ICONS_ENDPOIND = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`


export const normalizeForecasts = (forecast) => {

  let icon = safeGet(['weather', 0, 'icon'], forecast)
  let date = safeGet(['dt_txt'], forecast).split(" ")[0]

  let formatedDate = format(new Date(date), 'EEEE')

  return {
    id: safeGet(['dt'], forecast),
    description: safeGet(['weather', 0, 'description'], forecast),
    humidity: safeGet(['main', 'humidity'], forecast),
    icon: GET_ICONS_ENDPOIND(icon),
    temperature: kelvinToCelsius(safeGet(['main', 'temp'], forecast)),
    feelsLike: kelvinToCelsius(safeGet(['main', 'feels_like'], forecast)),
    wind: safeGet(['wind', 'speed'], forecast),
    date: formatedDate
  }
}

export const removeDuplicatesByDate = (normalizedForecasts) => {
  return normalizedForecasts.reduce((acc, current) => {
    const found = acc.find(item => item.date === current.date);

    if (!found) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, [])
}

export const getOnlyNextFiveDays = (forecasts) => forecasts.slice(0, 5)


export const getForecasts = async (place) => {

  const { data } = await axios.get(GET_ENDPOINT(place))

  return data
}


export const fetchForecasts = async (place) => {

  const rawForecasts = await getForecasts(place)

  const city = safeGet(['city'], rawForecasts)
  const normalized = rawForecasts.list.map(normalizeForecasts)
  const dedupedForecasts = removeDuplicatesByDate(normalized)
  const nextFiveDaysFromToday = getOnlyNextFiveDays(dedupedForecasts)

  return {
    city: `${city.name}, ${city.country}`,
    days: [...nextFiveDaysFromToday]
  }

}