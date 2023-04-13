import "../styles/showAnnoucement.css";
import { useEffect , useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowAltCircleLeft} from "@fortawesome/free-solid-svg-icons"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {   editAnnouncement, showAnnouncement } from "../redux/ducks/AnnouncementReducer";
import NoAuth from "./NoAuth";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { ToastContainer } from "react-toastify";


const ShowAnnouncement = () => {
    const dispatcher = useDispatch()

    const navigator = useNavigate()

    const [showEdit,setShowEdit] = useState(false)
    
    const errstate = useSelector(state=>state.announcements.inderrState)
    const loadstate = useSelector(state=>state.announcements.indloadingState)
    const data = useSelector(state=>state.announcements.indData)

    const userload = useSelector(state=>state.userData.loadingstate)
    const userData = useSelector(state=>state.userData.userData)
    
    const [editValue , setEditValue] = useState(data && {
        subject:data.subject,
        description:data.Description
    })



    const handleEditOnchange = (e) =>{
        setEditValue({
            ...editValue,
            [e.target.name]:e.target.value  
        })
    } 

    const handleEditDhindora= () => {
        dispatcher(editAnnouncement(
            {
            id:data._id,
            editData:{
                subject:editValue.subject,
                description:editValue.description
            }
        }
        ))
    }


    const handleclick = ()=>{
            navigator(-1)
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    const {id} = useParams()


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
            !userload && (userData && (userData.Admin && <button type="button" className="btn-edit" onClick={handleEditClick}>edit</button>))
        }

       

        </div>


        {
            showEdit?
            (
                <div className="announcement-main-show">
                     <ToastContainer 
                        position="bottom-center"
                        autoClose={3000}
                     />
                     <div className="announcement-form-subject">
                <label htmlFor="subject">Enter the subject:</label><br />
                <textarea 
                name="subject" 
                id="subject" 
                cols="100" 
                rows="3" 
                defaultValue={data.subject} 
                onChange={handleEditOnchange}
                ></textarea>
                </div>
                
                <div className="announcement-form-description">
                <label htmlFor="description">Enter the Description:</label><br />
                <textarea 
                name="description" 
                id="description" 
                cols="100" 
                rows="10" 
                defaultValue={data.Description}  
                onChange={handleEditOnchange}
                ></textarea>
                </div>

                  <button type="button" onClick={handleEditDhindora}>submit</button>

                </div>
            ):
            (errstate?<NoAuth/>
            :loadstate?<h1>loading...</h1>:data&&(
                <div className="announcement-main-show">

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