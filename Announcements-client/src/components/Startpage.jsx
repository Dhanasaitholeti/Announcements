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
        <>

        <h1>Welcome to the Announcements</h1>


        <Link to="/login"><button type="button">Login</button></Link>
        <Link to="/signup"><button type="button">Signup</button></Link>

        </>
     );
}
 
export default Startpage;