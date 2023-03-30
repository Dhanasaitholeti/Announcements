import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAnnouncement } from "../redux/ducks/AnnouncementReducer";

const FormView = () => {

    const dispatcher = useDispatch();
    
    const [formdata,setFormdata] = useState({
        subject:"",
        description:""
    })
    
    const handleOnChange = (e) => {

        setFormdata({
            ...formdata,
            [e.target.name]:e.target.value  
        })
    }

    const handleSubmitClick = () => {
        dispatcher(postAnnouncement({...formdata}))
    }


    return ( 
        <>
        <div className="announcement-submirt-form">
            
            <div className="announcement-form-subject">
                <label htmlFor="subject">Enter the subject</label>
                <input type="text" name="subject" id="subject" onChange={handleOnChange}/>
            </div>
            
            <div>
                <label htmlFor="description">Enter the Description</label>
                <input type="text" name="description" id="description"  onChange={handleOnChange}/>
            </div>

            <button type="button" onClick={handleSubmitClick}>
                 Submit
            </button>

        </div>
        </>
     );
}
 
export default FormView;