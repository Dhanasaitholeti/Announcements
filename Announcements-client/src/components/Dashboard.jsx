import "../styles/Dashboard.css"
import checkToken from "./checks/checkToken";
import Announcement from "./Announcements";
import UserDetails from "./UserDetails";
import { Route, Routes } from "react-router-dom";
import AnnouncementForm from "./AnnouncementForm";
import NotFound from "./NotFound";
import ShowAnnouncement from "./ShowAnnoucement";



const Dashboard = () => {

        checkToken();
   

    return (
            <div className="Main-Area">
            <div className="Announcement-part">
        <Routes>
            <Route path="/" element={<Announcement />} />
            <Route path="/new-announcement" element={<AnnouncementForm />} />
            <Route path="/announcement/:id" element={<ShowAnnouncement />} />
            <Route path="/*"  element={<NotFound />}/>
        </Routes>
            </div>
            <div className="userdetails-part">
            <UserDetails />
            </div>
            </div>
     );
}
 
export default Dashboard;