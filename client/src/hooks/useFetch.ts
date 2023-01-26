import { useState, useEffect } from 'react'
import axios from 'axios'

export type DataProps = {
  count: number
  type: string
  _id: string
  name: string
  city: string
  cheapestPrice: string
  rating: number
  photos: [string]
  title: string
  desc: string
  rooms: string
  address: string
  distance: number
}

const useFetch = (url: string) => {
  const [data, setData] = useState<DataProps[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const res = await axios.get(url)
      setData(res.data)

      setLoading(false)
    }

    fetchData()
  }, [url])

  const reFetchData = async () => {
    setLoading(true)

    const res = await axios.get(url)
    setData(res.data)

    setLoading(false)
  }
  return { data, loading, error, reFetchData }
}

export default useFetch