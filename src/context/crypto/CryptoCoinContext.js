import { createContext,useEffect,useReducer } from "react";
import cryptoCoinReducer from "./CryptoCoinReducer";
const CryptoCoinContext=createContext() 
export const CryptoCoinProvider=({children})=>{  
      
    const apiKey=process.env.REACT_APP_CRYPTOX_API_KEY;
    const initialState={
        coins:[],
        loading:false, 
        favCoinList:[]
    } 
    const [state,dispatch]=useReducer(cryptoCoinReducer,initialState) 
    const setLoading=()=>{
        dispatch({
            type:"SET_LOADING"
        })
    }  
    const addFavCoin=(coin)=>{ 
        dispatch({
            type:"ADD_FAV_COIN",
            payload:coin
        })
    }
    const delFavCoin=(id)=>{ 
        dispatch({
            type:"DEL_FAV_COIN",
            payload:id
        })
    }
    useEffect(()=>{
        setLoading()
        const callApi = async () => {
            const url = "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=100&offset=0";
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key':"ee689010a7msh15fefff9efe2a0cp11f207jsnb6b3224c5b26",
                    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
                }
            };
    
            const data= await fetch(url, options);
            const items= await data.json()
            dispatch({
                type: "GET_COINS",
                payload: items.data.coins
            })
        };
        callApi()
    },[apiKey])
    return<CryptoCoinContext.Provider value={{  
        coins:state.coins,
        loading:state.loading, 
        favCoinList:state.favCoinList,
        addFavCoin,
        delFavCoin
    }}>
    {children}
    </CryptoCoinContext.Provider>
}
export default CryptoCoinContext