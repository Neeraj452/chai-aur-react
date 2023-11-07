import  {useState, useContext} from 'react'
import Context from '../../context/Context'

function EmployeeLogin() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setEmployee} = useContext(Context)

    const handleSubmit = (e) => {
        e.preventDefault()
        setEmployee({username, password})
    }
  return (
    <div>
        <h2>Employee Login</h2>
        <input type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='username'  />
        {" "}
        <input type='text' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password'  />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default EmployeeLogin