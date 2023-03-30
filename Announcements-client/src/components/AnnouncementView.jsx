import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faEdit, faExternalLink, faTrashAlt } from "@fortawesome/free-solid-svg-icons";


const AnnouncementView = ({data}) => {
    return ( 
        <>
        {
            data.map((eachobj)=>{
                return ( 
<>
                    <div className="announcement-part" >
                        <h1>{eachobj.subject}</h1>  
                        <h2>{eachobj.Description}</h2>  
                    </div>

                    <div className="announcement-operations">
                        <button type="button">
                        <FontAwesomeIcon icon={faTrashAlt}/>remove                       
                        </button>
                        <button type="button">
                        <FontAwesomeIcon icon={faEdit} />edit
                        </button>
                        <button type="button">
                        <FontAwesomeIcon icon={faExternalLink} />show
                        </button>
                    </div>
</>
                
                )
            })
        }
        </>
     );
}
 
export default AnnouncementView;