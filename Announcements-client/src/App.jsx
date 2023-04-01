import { Routes , Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Startpage from "./components/Startpage"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Dashboard from "./components/Dashboard"
import AnnouncementForm from "./components/AnnouncementForm"
import Home from "./components/Home"
import NoAuth from "./components/NoAuth"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Startpage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/home/*" element={<Dashboard/>} />
        {/* <Route path="/home/*" element={<Home/>} /> */}
        {/* <Route path="/new-announcement" element={<AnnouncementForm/>} /> */}
        <Route path="*" element={<NoAuth />} />
      </Routes>
    </div>
  )
} 

export default App
