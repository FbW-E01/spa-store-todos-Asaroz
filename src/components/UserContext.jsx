
import React from "react"


export const baseUserContext  = {
    user: null,
    setUser:()=> {}
};
export const UserContext = React.createContext(baseUserContext);