import "../styles/Dashboard.css"
import checkToken from "./checks/checkToken";
import Announcement from "./Announcements";
import UserDetails from "./UserDetails";



const Dashboard = () => {

        checkToken();
   

    return ( 
        <div className="Main-Area">
            <div className="Announcement-part">
            <Announcement />
            </div>
            <div className="userdetails-part">
            <UserDetails />
            </div>
        </div>
     );
}
 
export default Dashboard;