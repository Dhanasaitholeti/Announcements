import { useEffect , useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowAltCircleLeft} from "@fortawesome/free-solid-svg-icons"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {   showAnnouncement } from "../redux/ducks/AnnouncementReducer";
import NoAuth from "./NoAuth";
import "../styles/showAnnoucement.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { getUserData } from "../redux/ducks/userdataReducer";


const ShowAnnouncement = () => {
    const navigator = useNavigate()
    const [showEdit,setShowEdit] = useState(false)

    const errstate = useSelector(state=>state.announcements.inderrState)
    const loadstate = useSelector(state=>state.announcements.indloadingState)
    const data = useSelector(state=>state.announcements.indData)
    const userData = useSelector(state=>state.userData.userData)



    const handleclick = ()=>{
            navigator(-1)
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    const {id} = useParams()

    const dispatcher = useDispatch()

    useEffect(()=>{
    
        dispatcher(showAnnouncement(id))
           

    },[])

    return ( 
        <>
        <div className="btns-group">
            <div className="btn-back">
                <FontAwesomeIcon  icon={faArrowAltCircleLeft} onClick={handleclick} size="2x" />
            </div>
        
        {
            userData.Admin && <button type="button" className="btn-edit"onClick={handleEditClick}>edit</button>
        }

        </div>


        {
            showEdit?
            (<>
                <input type="text" name="subject" id="subject" value={data.subject}/><br />
            </>):
            (errstate?<NoAuth/>
            :loadstate?<h1>loading...</h1>:data&&(
                <div className="announcement-main-show">

                    <div className="annoucement-main-heading">

                    <p>{data.subject}</p>

                    </div>

                    <div className="annoucement-main-des">

                    <ReactMarkdown>

                    {data.Description}

                    </ReactMarkdown>
                    
                    </div>

                </div>
            ))

        }

        

        </>
     );
}
    
export default ShowAnnouncement;