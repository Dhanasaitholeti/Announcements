import { Routes , Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Startpage from "./components/Startpage"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Dashboard from "./components/Dashboard"
import NotFound from "./components/NotFound"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Startpage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/home/*" element={<Dashboard/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
} 

export default App
