import "../styles/Startpage.css"
import Cookies from "js-cookie";
import { useEffect } from "react";
import { Link, useNavigate  } from "react-router-dom";
const Startpage = () => {
    
    const naviagte = useNavigate()

    useEffect(()=>{
        const jwt_token = Cookies.get('jwtToken')
        if(jwt_token){
            naviagte('/home')
        }
    },[])


    return ( 
        
    <div className="container-startpage">
        
        <h1>Welcome to the Dindora</h1>

     
     <div className="container-btns">

        <button type="button"><Link to="/login">Login</Link></button>

        <p>or</p>

        <button type="button"><Link to="/signup">Signup</Link></button>
        
     </div>

    </div>

     );
}
 
export default Startpage;