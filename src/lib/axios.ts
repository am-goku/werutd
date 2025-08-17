import axios from 'axios'

// Instance for Football Data API
export const footballApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_FOOTBALL_DATA_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-Auth-Token': process.env.NEXT_PUBLIC_FOOTBALL_DATA_API_KEY,
    'X-Unfold-Lineups': true,
    'X-Unfold-Bookings': true,
    'X-Unfold-Subs': true,
    'X-Unfold-Goals': true
  },
})

// Instance for TheSportsDB API version 1
export const tsdbApi_v1 = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_TSDB_BASE_URL}/v1/json/${process.env.NEXT_PUBLIC_TSDB_API_KEY}`,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Instance for TheSportsDB API version 2
export const tsdbApi_v2 = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_TSDB_BASE_URL}/v2/json/${process.env.NEXT_PUBLIC_TSDB_API_KEY}`,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Instance for your own Next.js API routes
export const localApi = axios.create({
  baseURL: '/api', // relative to Next.js app domain
  headers: {
    'Content-Type': 'application/json'
  },
})

// Example interceptors (optional)
footballApi.interceptors.response.use(
  res => res,
  err => {
    if (err.response?.status === 401) {
      console.warn('Unauthorized on football API')
    }
    return Promise.reject(err)
  }
)

localApi.interceptors.response.use(
  res => res,
  err => {
    if (err.response?.status === 401) {
      console.warn('Unauthorized on local API')
    }
    return Promise.reject(err)
  }
)


//implementation is't complete.