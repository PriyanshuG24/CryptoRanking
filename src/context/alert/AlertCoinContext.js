import { createContext, useReducer } from "react";
import alertCoinReducer from "./AlertCoinReducer";
const AlertCoinContext = createContext()
export const AlertCoinProvider = ({ children }) => {
    const initialState = null
    const [state,dispatch]=useReducer(alertCoinReducer,initialState)
    const setAlert=(msg,type)=>{
        dispatch({
            type:"SET_ALERT", 
            payload:{msg,type}
        })
        setTimeout(()=>dispatch({type:"REMOVE_ALERT"}),3000)
    }
    return <AlertCoinContext.Provider
        value={{ 
            alert:state, 
            setAlert
        }}>
        {children}
    </AlertCoinContext.Provider>
}
export default AlertCoinContext
