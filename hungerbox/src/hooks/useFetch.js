import React, { useEffect, useState } from 'react'
import axios from 'axios';

// Custom hook to fetch data from a given URL
const useFetch = ({url}) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try{
                setLoading(true);
                const response = await axios.get(url)
                const result = await response.data;
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();

    },[url])
  return {data, loading, error}
}

export default useFetch