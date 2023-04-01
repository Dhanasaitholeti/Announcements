import { Routes , Route } from "react-router-dom"
import AnnouncementForm from "./AnnouncementForm";
import Dashboard from "./Dashboard";

const Home = () => {
    return ( 
        <Routes>
            <Route path="/dash"  element={<Dashboard/>}/>
            <Route path='/new-announcement' element={<AnnouncementForm />} />
        </Routes>
     );
}
 
export default Home;