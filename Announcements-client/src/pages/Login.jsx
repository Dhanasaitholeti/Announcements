import { Box, Button, Heading, Input, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getUser } from "../redux/ducks/userLoginReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Perfectboxstyles, PerfectflexStyles } from "./Startpage";

const Login = () => {
  const navigator = useNavigate();
  const usedispatch = useDispatch();

  const userloginLoad = useSelector((state) => state.user.userLoading);
  const isUserLoggedIn = useSelector((state) => state.user.userLoggedin);

  console.log(userloginLoad);

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
      {
        <Box {...Perfectboxstyles} {...PerfectflexStyles}>
          <Heading>Login</Heading>
          {userloginLoad ? (
            <Spinner size={"lg"} color={"blue"} />
          ) : (
            <>
              <Box mx="auto" {...PerfectflexStyles} w={"60%"} gap="10px">
                <ToastContainer position="bottom-center" autoClose={2000} />

                <Input
                  variant="filled"
                  w="75%"
                  name="userEmail"
                  type="email"
                  onChange={handlechange}
                  placeholder="Emailaddress"
                />

                <Input
                  variant="filled"
                  w="75%"
                  name="passwd"
                  type="password"
                  onChange={handlechange}
                  placeholder="Password"
                />
              </Box>

              <Button colorScheme="blue" onClick={handleLoginsubmit}>
                Login
              </Button>

              <Text className="login-signup-btn">
                Don't have account?<Link to="/signup">signup</Link>
              </Text>
            </>
          )}
        </Box>
      }
    </>
  );
};

export default Login;
