import { useState, useEffect } from 'react'
import axios from 'axios'

export interface IProps {
  item: ItemProps
  data: ItemProps
}

export type ItemProps = {
  _id: string
  name: string
  type: string
  city: string
  address: string
  distance: number
  photos: [string]
  title: string
  desc: string
  rooms: [string]
  cheapestPrice: number
  rating: number
}

const useFetch = (url: string) => {
  const [data, setData] = useState<ItemProps[]>([])
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
