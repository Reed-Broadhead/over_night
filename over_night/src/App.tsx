import './App.css'
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import { Routes, Route } from "react-router-dom"

function App() {
  
  return (
    <>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
    </>
  )
}

export default App
