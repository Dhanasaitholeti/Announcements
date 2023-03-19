import {  useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import { getUser } from "../redux/ducks/userReducer";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
    const dat = useSelector(state=>state.user.user)
    
    const usedispatch = useDispatch()
   
    const [data,setData] = useState({
        userEmail: "",
        passwd:""
    })

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