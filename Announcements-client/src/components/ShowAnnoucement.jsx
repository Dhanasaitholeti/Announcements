import { useEffect , useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {  resetState, showAnnouncement } from "../redux/ducks/AnnouncementReducer";
import NoAuth from "./NoAuth";

const ShowAnnouncement = () => {
    const navigator = useNavigate()
    const [showEdit,setShowEdit] = useState(false)
    const errstate = useSelector(state=>state.announcements.inderrState)
    const loadstate = useSelector(state=>state.announcements.indloadingState)
    const data = useSelector(state=>state.announcements.indData)
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
       
        return() =>{
            console.log("cleanup function")
            dispatcher(resetState())
        }    

    },[navigator])

    return ( 
        <>

        {
            showEdit?
            (<>

                <input type="text" name="subject" id="subject" value={data.subject}/><br />
            </>):
            (errstate?<NoAuth/>
            :loadstate?<h1>loading...</h1>:data&&(
                <>
                <h1>{data.subject}</h1>
                <h1>{data.Description}</h1>
                </>
            ))
        }

        <button onClick={handleclick}>click</button>
        <button type="button" onClick={handleEditClick}>edit</button>

        </>
     );
}
    
export default ShowAnnouncement;