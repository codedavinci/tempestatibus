import {
  kelvinToCelsius,
  kelvinToFarenheit,
  farenheitToCelsius,
  celsiusToFarenheit
} from '../degreeConversion'

import delay from '../delay'
import safeGet from '../safeGet'


describe('Degree conversions', () => {

  it('should convert Kelvin to Celsius', () => {
    expect(kelvinToCelsius(308)).toBe(35)
  })

  it('should convert Kelvin to Farenheit', () => {
    expect(kelvinToFarenheit(308)).toBe(95)
  })

  it('should convert Farenheit to Celsius', () => {
    expect(farenheitToCelsius(95)).toBe(35)
  })

  it('shoudl conver Celsius to Farenheit', () => {
    expect(celsiusToFarenheit(35)).toBe(95)
  })

})

describe('Simulate delay when executing async function', () => {
  it('should await 500 ml before execute', async () => {
    let before = performance.now()
    await delay(100)
    let after = performance.now()

    let result = after - before

    expect(result).toBeGreaterThan(100)
    expect(result).toBeLessThan(200)
  })
})


describe('Safely access deep nested object', () => {
  let mock = {
    a: {
      b: {
        c: 'foo'
      }
    },
    bar: [{ a: 1 }, { b: 2 }]
  }

  it('should access a deep nested prop from an object', () => {
    expect(safeGet(['a', 'b', 'c'], mock)).toBe('foo')
  })

  it('should access a deep nested object using array indexes', () => {
    expect(safeGet(['bar', 0, 'a'], mock)).toBe(1)
    expect(safeGet(['bar', 1, 'b'], mock)).toBe(2)
  })

  it('should return null when trying to access an non-existent nested prop', () => {
    expect(safeGet(['bar', 0, 'b'], mock)).toBe(null)
    expect(safeGet(['a', 'b', 'c', 'd'], mock)).toBe(null)
  })
})