import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAnnouncemnt } from "../redux/ducks/AnnouncementReducer";
import AnnouncementView from "./AnnouncementView";
import Loading from "./Loading"
import NoAuth from "./NoAuth";

 const Announcement = () => {
    const errstate = useSelector(state=>state.announcements.errstate)
    const loadstate = useSelector(state=>state.announcements.loadingstate)
    const announcementsData = useSelector(state=>state.announcements.Data)
    
    console.log(announcementsData)
    const dispatcher = useDispatch();

    useEffect(()=>{
        dispatcher(getAnnouncemnt())
    },[])

    return ( 
        <>
        {
            //this is the whole logic for displaying components
            errstate?<NoAuth />:
                (loadstate ?<Loading />:
                    announcementsData && <AnnouncementView data={announcementsData}/>)
            }
        </>
     );
}
 
export default Announcement;