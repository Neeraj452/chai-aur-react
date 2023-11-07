import  {useContext} from 'react'
import Context from '../../context/Context'

function EmployeeProfile() {
    const {employee} = useContext(Context)
    
    if (!employee) return <div>please login</div>

    return <div>Welcome {employee.username}</div>
}

export default EmployeeProfile