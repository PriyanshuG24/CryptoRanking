import {useEffect,useState} from 'react'

function useFetch(url,option) { 
    const [loading,setLoading]=useState() 
    const [error,setError]=useState() 
    const [data,setData]=useState() 
    
    useEffect(()=>{
        const fetchData=async ()=>{ 
            try {
                const response=await fetch(url,option) 
                const data=await response.json() 
                setData(data) 
                setLoading(false)
            } catch (error) {
                setError(error) 
                setLoading(false)
            }
        }  
        fetchData() 
    // eslint-disable-next-line
    },[]) 
    return {data,loading,error}
}

export default useFetch
