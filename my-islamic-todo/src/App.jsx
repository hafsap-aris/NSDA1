import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import '../src/App.css'
import Header from "./components/Header"
import Home from './pages/Home'
import Tasks from "./pages/Tasks"
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Tasks" element={<Tasks/>}/>
      </Routes>
    </Router>
  )
}

export default App
