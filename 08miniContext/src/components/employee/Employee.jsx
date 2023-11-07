
import EmployeeContextProvider from "../../context/EmployeeContextProvider"
import EmployeeLogin from "./EmployeeLogin"
import EmployeeProfile from "./EmployeeProfile"
const Employee=()=>{
return(
<EmployeeContextProvider>
<h2>Employee Login</h2>
    <EmployeeLogin/>
    <EmployeeProfile/>
</EmployeeContextProvider>
)
}
export default Employee