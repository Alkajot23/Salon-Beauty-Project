import { createContext, useState } from "react"
export const AppContext=createContext();

const AppContextProvider=({children})=>{
    const [loading, setLoading]=useState(false)
    const [user, setUser]=useState(false)


    const value={loading,setLoading,user,setUser}

    return(
        <AppContext.Provider value={value}>
            {children}

        </AppContext.Provider>
    )
}

export default AppContextProvider;