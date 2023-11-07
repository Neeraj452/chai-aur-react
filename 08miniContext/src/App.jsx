
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import Employee from './components/employee/Employee'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
      <Login />
      <Profile />
      <Employee/>
    </UserContextProvider>
  )
}

export default App
