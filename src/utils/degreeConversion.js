
export const kelvinToCelsius = (deg) => Math.round(deg - 273.15)
export const kelvinToFarenheit = (deg) => (kelvinToCelsius(deg) * 9 / 5) + 32
export const farenheitToCelsius = (deg) => Math.round((deg - 32) * 5 / 9)
export const celsiusToFarenheit = (deg) => Math.round((deg * 9 / 5) + 32)