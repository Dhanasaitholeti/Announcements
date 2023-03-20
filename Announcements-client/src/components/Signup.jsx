import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/ducks/userLoginReducer";
import "../styles/Signup.css"

const Signup = () => {
    const dispatcher = useDispatch()
    const [signupData,setSignupData] = useState(
        {
            name:"",
            Email:"",
            password:"",
            phone_num:"",
            Gender:""
        }
    )

    const handleDataChange = (e) => {
        setSignupData({...signupData, [e.target.name]:e.target.value})
    }

    const handleSignupClick = () => {
        const FullName = signupData.name
        const Email = signupData.Email
        const passwd = signupData.password
        const Phone_Num = signupData.phone_num
        const Gender = signupData.Gender
        dispatcher(createUser({FullName, Email, passwd, Phone_Num, Gender}))
    } 

    return ( 
        <div className="signup-div">
            name:<input type="text" name="name" id="name" onChange={handleDataChange}/>
            Email: <input type="email" name="Email" id="Email" onChange={handleDataChange}/>
            passwd: <input type="password" name="password" id="password" onChange={handleDataChange}/>
            confirm password: <input type="password" name="passwors" id="cpassword" />
            phonenumber: <input type="text" name="phone_num" id="phone_num" onChange={handleDataChange}/>
            Gender: <select name="Gender" id="Gender" onChange={handleDataChange}>
                <option value="">select</option>
                 <option value="MALE">Male</option>
                 <option value="FEMALE">Female</option>
            </select>
            <button 
            type="button"
            onClick={handleSignupClick}
            >
            Signup
            </button>
        </div>
     );
}
 
export default Signup;