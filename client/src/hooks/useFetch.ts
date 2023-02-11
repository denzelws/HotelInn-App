import { useState, useEffect } from 'react'
import axios from 'axios'

export interface IProps {
  item: ItemProps
}

export type RoomNumber = {
  number: number
  _id: string
  unavailableDates: Date[]
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
  cheapestPrice: number | undefined
  rating: number
  maxPeople: string
  price: number
  roomNumbers: RoomNumber[]
  value: number
  index: number
}

const useFetch = (url: string) => {
  const [data, setData] = useState<ItemProps | null>(null)
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
