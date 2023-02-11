import { useState, useEffect } from 'react'
import axios from 'axios'

export const useFetchProperties = (url: string) => {
  const [data, setData] = useState<number[]>([])

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

  return { data, loading, error }
}
