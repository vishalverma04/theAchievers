import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Accounts from './pages/Accounts'
function App() {
  return (
    <>
    <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/accounts" Component={Accounts}/>
    </Routes>
    </>
  )
}

export default App
