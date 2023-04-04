import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteAnnoucement, getAnnouncemnt } from "../redux/ducks/AnnouncementReducer";
import React from "react";
import { useNavigate } from "react-router-dom";

const AnnouncementView = ({data , userData}) => {
    const navigator = useNavigate()
    const dispatcher = useDispatch()
    const handleOnClickDelete = (id) => {
        dispatcher(deleteAnnoucement(id))
        dispatcher(getAnnouncemnt())
    }

    const handleOnClickShow = (id) => {
        navigator(`/home/announcement/${id}`)
    }

    return ( 
        <>
        {
            data.map((eachobj)=>{
                return ( 
    <React.Fragment key={eachobj._id}>
                    <div className="announcement-part" >
                        <h1>{eachobj.subject}</h1>  
                        <h2>{eachobj.Description}</h2>  
                    </div>
                
                    <div className="announcement-operations">
                       {

                        userData.Admin&&(<button type="button" onClick={() => handleOnClickDelete(eachobj._id)}>
                        <FontAwesomeIcon icon={faTrashAlt}/>remove                       
                        </button>)
                       }
                        {/* <button type="button">
                        <FontAwesomeIcon icon={faEdit} />edit
                        </button> */}
                        <button type="button" onClick={() => handleOnClickShow(eachobj._id)}>
                        <FontAwesomeIcon icon={faExternalLink} />show
                        </button>
                    </div>
</React.Fragment>
                
                )
            })
        }
        </>
     );
}
 
export default AnnouncementView;