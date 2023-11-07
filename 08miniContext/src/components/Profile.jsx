import  {useContext} from 'react'
import Context from '../context/Context'

function Profile() {
    const {user} = useContext(Context)
    
    if (!user) return <div>please login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile