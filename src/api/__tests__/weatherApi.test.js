import mockAxios from 'axios'

import mockForecastsResponse from './mockForecastResponse.json'
import {
  getForecasts,
  normalizeForecasts,
  removeDuplicatesByDate,
  getOnlyNextFiveDays,
  GET_ICONS_ENDPOIND,
  GET_ENDPOINT,
} from '../weatherApi'

jest.mock('axios')


let forecasts

describe('Open Weather Map API - Integration', () => {

  beforeAll(async () => {
    mockAxios.get.mockResolvedValueOnce({
      data: mockForecastsResponse
    })

    forecasts = await getForecasts('vancouver')
    process.env.REACT_APP_WEATHER_API_KEY = 'foo123'
  })

  afterAll(() => {
    jest.clearAllMocks()
  })

  it('should return the icon ENDPOINT', () => {
    let expected = 'http://openweathermap.org/img/wn/10x@2x.png'
    expect(GET_ICONS_ENDPOIND('10x')).toBe(expected)
  })

  it('should return the correct ENDPOINT with parameters and token', () => {
    let expected = 'https://api.openweathermap.org/data/2.5/forecast?q=vancouver,ca&appid=foo123'
    expect(GET_ENDPOINT('vancouver')).toBe(expected)
  })

  it('should normalize correctly the API Response', () => {

    expect(normalizeForecasts(forecasts.list[0])).toMatchObject({
      id: expect.any(Number),
      description: expect.any(String),
      humidity: expect.any(Number),
      icon: expect.any(String),
      temperature: expect.any(Number),
      feelsLike: expect.any(Number),
      wind: expect.any(Number),
      date: expect.any(String),
    })
  })

  it('should remove duplicates by date', () => {
    let clone1 = normalizeForecasts({ ...forecasts.list[0] })
    let clone2 = normalizeForecasts({ ...forecasts.list[0] })

    expect(clone1.date).toBe(clone2.date)
    expect(removeDuplicatesByDate([clone1, clone2]).length).toBe(1)



    expect(forecasts.list.length).toBe(40)

    let fullDataSetNormalized = forecasts.list.map(normalizeForecasts)

    expect(removeDuplicatesByDate(fullDataSetNormalized).length).toBe(6)
  })


  it('should return only the next five days', () => {
    let fullDataSetNormalized = forecasts.list.map(normalizeForecasts)
    let fullDataSetDeduped = removeDuplicatesByDate(fullDataSetNormalized)
    let nextFiveDays = getOnlyNextFiveDays(fullDataSetDeduped)

    expect(nextFiveDays.length).toBe(5)
    expect(nextFiveDays[0].date).toBe('Sunday')
    expect(nextFiveDays[1].date).toBe('Monday')
    expect(nextFiveDays[2].date).toBe('Tuesday')
    expect(nextFiveDays[3].date).toBe('Wednesday')
    expect(nextFiveDays[4].date).toBe('Thursday')
  })

  // it('should get only')
})