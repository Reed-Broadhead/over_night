import './App.css'
import HomePage from './componenets/HomePage';
import { Routes, Route } from "react-router-dom"

function App() {
  
  return (
    <>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
       
        </Routes>
    </>
  )
}

export default App
