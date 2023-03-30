import { useEffect } from "react";
import "../styles/annoucement.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { getAnnouncemnt } from "../redux/ducks/AnnouncementReducer";
import AnnouncementView from "./AnnouncementView";
import Loading from "./Loading"
import NoAuth from "./NoAuth";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

 const Announcement = () => {   
    const navigator = useNavigate();

    const handleplusiconClick = () => {
        navigator('/new-announcement')
    }

    const errstate = useSelector(state=>state.announcements.errstate)
    const loadstate = useSelector(state=>state.announcements.loadingstate)
    const announcementsData = useSelector(state=>state.announcements.Data)
    
    const dispatcher = useDispatch();

    useEffect(()=>{
        dispatcher(getAnnouncemnt())
    },[])

    return ( 
<>
        
        <div className="announcement-allGroup">
        {
            //this is the whole logic for displaying components
            errstate?<NoAuth />:
                (loadstate ?<Loading />:
                    announcementsData && <AnnouncementView data={announcementsData}/>)
                }
        </div> 

        <div className="plus-icon" onClick={handleplusiconClick}>
                <FontAwesomeIcon icon={faAdd} size="1.7x" />
        </div>

        </>
     );
}
 
export default Announcement;