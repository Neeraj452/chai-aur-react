import { useState } from "react";
import Context from "./Context";
// eslint-disable-next-line react/prop-types
const EmployeeContextProvider =({children})=>{
    const [employee,setEmployee]=useState("")
    return(
        <Context.Provider value={{employee,setEmployee}}>
            {children}
        </Context.Provider>
    )
}
export default EmployeeContextProvider;