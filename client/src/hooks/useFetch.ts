import { useState, useEffect } from 'react'
import axios from 'axios'

export interface IProps {
  item: ItemProps
  data: ItemProps
}

export type RoomNumber = {
  number: number
  _id: string
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
  cheapestPrice: undefined | number
  rating: number
  maxPeople: string
  price: number
  roomNumbers: RoomNumber[]
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
