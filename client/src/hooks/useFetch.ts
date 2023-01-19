import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (url: string) => {
  const [data, setData] = useState([])
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
