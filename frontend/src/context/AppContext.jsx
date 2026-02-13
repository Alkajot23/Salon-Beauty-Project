import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom";
export const AppContext=createContext();
import toast from "react-hot-toast";


const AppContextProvider=({children})=>{
    const [loading, setLoading]=useState(false)
    const [user, setUser]=useState(null)
    const navigate = useNavigate();
    const [admin, setAdmin] = useState(true);
    

    const value={loading,setLoading,user,setUser,navigate,admin,setAdmin}

    return(
        <AppContext.Provider value={value}>
            {children}

        </AppContext.Provider>
    )
}

export default AppContextProvider;