import Login from './Components/Log/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import User from './Pages/User/User'

function App () {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={ <Login />}/>
        <Route path='/user' element={<User/>}/>
      </Routes>
    </Router>
     
    </>
  )
}

export default App
