import React, {useEffect, useRef, useState} from "react";

export function useJsonFetch(url, options) {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const cache = useRef({})

    useEffect(() => {
        async function fetchData() {
            if (cache.current[url]) {
                const data = cache.current[url]
                setData(data)
            } else {
                try {
                    const response = await fetch(url, options)
                    const json = await response.json()
                    cache.current[url] = json
                    setData(json)
                    setError(response.statusText)
                } catch (error) {
                    setError(error)
                }
            }

            setLoading(false)
        }

        fetchData();
    }, [url, options])

    return { data, loading, error };
}