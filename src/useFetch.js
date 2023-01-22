import { useState, useEffect } from "react";


const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {      //promise
                    if (!res.ok) {
                        throw Error('Could not fech the data for the resourse')
                    }
                    return res.json();
                })
                .then(data => { //another promise to take data from other response
                    setData(data)
                    setIsPending(false)// shows loading before fetching data.once data feched assigned to false
                    setError(null)
                })
                .catch(error => {
                    setError(error.message)
                    setIsPending(false)
                })
        }, [])
    }, [])
    return {data,isPending,error}//object
}

export default useFetch