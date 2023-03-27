import {  useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import { getUser } from "../redux/ducks/userLoginReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigator = useNavigate()
    const usedispatch = useDispatch()

    const isUserLoggedIn = useSelector(state=>state.user.userLoggedin)
    const isLoginerror = useSelector(state=>state.user.UserError)
  
   
    const [data,setData] = useState({
        userEmail: "",
        passwd:""
    })

    if(isUserLoggedIn){
        navigator('/dashboard')
    }


    const handlechange = (e) => {
        setData({...data,[e.target.name]:e.target.value})
    }

    const handleLoginsubmit = () => {
        const Email = data.userEmail
        const passwd = data.passwd
        usedispatch(getUser({Email,passwd}))
    }


    return (
        <div className="login-page" >
            <h1>Login</h1>
            <div className="input-section">
            {
             isLoginerror?
             <h1>Enter correct details</h1>:
             (isUserLoggedIn && <h1>user login successful</h1>)    
            }
            <section>
            <label htmlFor="userEmail">username:</label>
            <input type="email" name="userEmail" id="userEmail" onChange={handlechange} />
            </section>
            <section>
                <label htmlFor="passwd">Password:</label>
                <input type="password" name="passwd" id="passwd" onChange={handlechange} />
            </section>
        </div>
            <div className="login-btn">
            <button type="button" onClick={handleLoginsubmit}>
                Login
            </button>
            </div>
        <p>Don't have account?<Link to="/signup">signup</Link></p>
    
        </div>

     );
}
 
export default Login;