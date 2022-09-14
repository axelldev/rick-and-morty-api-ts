import { useState, useEffect } from 'react'

export type TApiResponse<T> = {
  data?: T
  error?: any
  loading: boolean
}

const useFetch = <T = unknown>(url: string): TApiResponse<T> => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const resp = await fetch(url)
        const data = await resp.json()
        setData(data)
      } catch (e: any) {
        setError((e as Error).message)
      }
    }

    fetchData().finally(() => setLoading(false))
  }, [url])

  return { data, loading, error }
}

export default useFetch
