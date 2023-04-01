import NoAuth from "./NoAuth";
import FormView from "./FormView";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserData } from "../redux/ducks/userdataReducer";
import Loading from "./Loading";
const AnnouncementForm = (props) => {
    const dispatcher = useDispatch();
    const errstate = useSelector(state => state.userData.errstate)
    const loadstate  = useSelector(state => state.userData.loadingstate)
    const data = useSelector(state =>state.userData.userData)

    useEffect(()=>{
        dispatcher(getUserData())
    },[])

    return ( 
        <>
        {
            errstate?<NoAuth />:
            (loadstate ?<Loading />:
                data.Admin ? <FormView />:<h1>user Not authorized</h1>)
            
        }        
        </>
     );
}

export default AnnouncementForm;