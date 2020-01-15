import axios from 'axios'
import { useEffect, useState } from 'react'

/**
 * Loading is only turned off after completing or result or error, and we return both
 */
export const useGetCoinData = () => {
    const [result, setResult] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getCoins = async () => {
            setLoading(true)
            try {
                const { data } = await axios.get(
                    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
                )
                setResult(data)
            setLoading(false)
            } catch (e) {
                setError(e)
                setLoading(false)
            }
        }
        getCoins()
    }, [])

    return [result, error, loading]
}