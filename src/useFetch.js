import { useState, useEffect } from "react";


const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(true);

    useEffect(() => {
        const abortCont =new AbortController();
        setTimeout(() => {
            fetch(url,{signal:abortCont.signal})
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
                    if(error.name==="AbortError"){
                        console.log("fetch abborted")
                    }
                    else{
                    setError(error.message)
                    setIsPending(false)
                    }
                })
        }, 1000)

        return ()=>abortCont.abort();
    }, [url])
    return {data,isPending,error}//object
}

export default useFetch