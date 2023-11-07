/* eslint-disable react/prop-types */
import React from "react";
import Context from "./Context";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <Context.Provider value={{user, setUser}}>
        {children}
        </Context.Provider>
    )
}

export default UserContextProvider