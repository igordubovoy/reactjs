import axios from 'axios'
const API_KEY = '4fc261854c33d4797688ff87da6168f8'
const ROOR_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export const fetchWeather = city => {
  const url = `${ROOR_URL}&q=${city},ua`
  const request = axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
