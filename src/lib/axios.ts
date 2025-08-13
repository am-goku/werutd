import axios from 'axios'

// Instance for Football Data API
export const footballApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_FOOTBALL_DATA_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-Auth-Token': process.env.NEXT_PUBLIC_FOOTBALL_DATA_API_KEY
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
