import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [ data, setData ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState("")

    useEffect(() => {

        setLoading(true)
        fetch(url)
        .then(data => {
            if (data.ok) {
            return data.json();
            } else {
            throw new Error('Something went wrong');
            }
        })
        .then(data => {
            setData(data)
        })
        .catch(err => {
            setError(err)
        })
        .finally(()=> {
            setLoading(false)
        })
    }, [])
    return [data, loading, error]
}
export default useFetch