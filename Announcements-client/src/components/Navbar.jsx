import "../styles/Navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faContactCard, faSun, faUser } from "@fortawesome/free-solid-svg-icons"; 
import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate , useLocation } from "react-router-dom";




const Navbar = () => {
    const location = useLocation()
    

    const navigator = useNavigate()

    const [divClass,setDivClass] = useState('options')
   
    const handleMouseOn =() => {
        const asn = divClass=="options"?"options-onhover":"options"
        setDivClass(asn)
    }


    const handleLogout = () => {
        Cookies.remove('jwtToken')
        navigator('/')
    }

    return (
        <div className="Navbar">
            <h1>Dhindora</h1>
            <div className="Navbar-links">
               <div className="Navbar-ind-link">
                <FontAwesomeIcon icon={faSun} />
                </div> 

                <div className="Navbar-ind-link">
                <a href=""><FontAwesomeIcon icon={faContactCard} /></a>
                </div>

                <div className="user-optionss Navbar-ind-link" onClick={handleMouseOn} >
                <FontAwesomeIcon icon={faUser} />
                {
                   !(location.pathname == '/login' || location.pathname == '/' || location.pathname == '/signup')
                    &&
                    (
                    <div className={divClass} >
                    <p onClick={handleLogout}>logout</p>
                    </div>
                    )
                } 
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;