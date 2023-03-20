import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAnnouncemnt } from "../redux/ducks/AnnouncementReducer";
import checkToken from "./checks/checkToken";
const Dashboard = () => {

    checkToken();

    const errstate = useSelector(state=>state.announcements.errstate)
    const loadstate = useSelector(state=>state.announcements.loadingstate)
    const announcementsData = useSelector(state=>state.announcements.Data)
    
    const dispatcher = useDispatch();
    useEffect(()=>{
        dispatcher(getAnnouncemnt())
    },[])
    return ( 
        <>

        {
            //this is the whole logic for displaying components
            errstate?
            <h1>Error happend</h1>:
            (loadstate?
            <h1>loading...</h1>:
            announcementsData&&<h1>Got the Data</h1>)
        }

        <h1>This is Dashboard</h1>
        <p>It contains all the announcements and logged in  user details</p>

        </>
     );
}
 
export default Dashboard;