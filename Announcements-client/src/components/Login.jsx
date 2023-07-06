import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import { getUser } from "../redux/ducks/userLoginReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Login = () => {
  const navigator = useNavigate();
  const usedispatch = useDispatch();

  const userloginLoad = useSelector((state) => state.user.userLoading);
  const isUserLoggedIn = useSelector((state) => state.user.userLoggedin);

  // const [loadingdecider,setloadingdecider] = useState(userloginLoad);

  const [data, setData] = useState({
    userEmail: "",
    passwd: "",
  });

  if (isUserLoggedIn) {
    navigator("/home");
  }

  const handlechange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleLoginsubmit = () => {
    const Email = data.userEmail;
    const passwd = data.passwd;
    usedispatch(getUser({ Email, passwd }));
  };

  return (
    <>
      <div className="login-page">
        <h1>Login</h1>
        <div className="input-section">
          <ToastContainer position="bottom-center" autoClose={2000} />
          <section>
            <input
              type="email"
              name="userEmail"
              id="userEmail"
              onChange={handlechange}
              placeholder="Emailaddress"
              required
            />
          </section>
          <section>
            <input
              type="password"
              name="passwd"
              id="passwd"
              onChange={handlechange}
              placeholder="Password"
              required
            />
          </section>
        </div>
        <div className="login-btn">
          <button type="button" onClick={handleLoginsubmit}>
            Login
          </button>
        </div>
        <p className="login-signup-btn">
          Don't have account?<Link to="/signup">signup</Link>
        </p>
      </div>
    </>
  );
};

export default Login;
