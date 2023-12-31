import './App.css'
import HomePage from './components/HomePage';
import SearchPage from "./components/hotelsSearch/SearchPage"
import Login_signUp from './components/Login_signUp';
import About from './components/About';
import FAQ from './components/FAQ';
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          {/* <Route path="/signup" element={<SignUp/>}/> */}
          <Route path="/about" element={<About/>}/>
          <Route path="/FAQ" element={<FAQ/>}/>
          <Route path="/login" element={<Login_signUp/>}/>
          <Route path="/search" element={<SearchPage/>} />
        </Routes>
    </>
  )
}

export default App
