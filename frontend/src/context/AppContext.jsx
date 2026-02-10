import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom";
export const AppContext=createContext();

const AppContextProvider=({children})=>{
    const [loading, setLoading]=useState(false)
    const [user, setUser]=useState(null)
    const navigate = useNavigate();

    const value={loading,setLoading,user,setUser,navigate}

    return(
        <AppContext.Provider value={value}>
            {children}

        </AppContext.Provider>
    )
}

export default AppContextProvider;