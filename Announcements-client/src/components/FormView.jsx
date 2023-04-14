import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons"; 
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAnnouncement } from "../redux/ducks/AnnouncementReducer";
import {useNavigate} from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../styles/addAnnouncement.css";
import "../styles/popupMsg.css";
const FormView = () => {
    const navigator = useNavigate();

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
   

    const handleSubmitClick =  () => {
        
        dispatcher(postAnnouncement({...formdata}))
        navigator(-1)
    }

    const handlebackButton = () =>{
        navigator(-1);
    }


    return ( 
        <>
        <div className="announcement-submirt-form">
            <div className="back-icons">
                <div className="icons-back-button" onClick={handlebackButton}>

                <FontAwesomeIcon icon={ faArrowAltCircleLeft }  size="2x"/>
                
                </div>
                    

            </div>
                <div className="container-heading">
                <h1>Make New Dhindora..!</h1>
                </div>

               
                    <ToastContainer 
                        autoClose={3000}
                        position="bottom-center"
                    />
             
            
            <div className="announcement-form-subject form-reset">
                <label htmlFor="subject">Enter the subject:</label><br />
                <textarea name="subject" id="subject" cols="100" rows="3" onChange={handleOnChange} ></textarea>
            </div>

            <div className="announcement-form-description form-reset">
            
                <label htmlFor="description">Enter the Description:</label><br />
                <textarea name="description" id="description" cols="100" rows="10" onChange={handleOnChange} ></textarea>
            </div>

          <div className="Form-submit-btn">
            <button type="button" onClick={handleSubmitClick}>
                 Submit
            </button>
          </div>

        </div>
        </>
     );
}
 
export default FormView;