import axios from 'axios'
import { useEffect, useState } from 'react'

export const useGetCoinData = () => {
    const [result, setResult] = useState([])
    const [error, setError] = useState("null")
    const [loading, setLoading] = useState(false)

    /**
     * We keep track of loading state, and return error | result
     */
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