import { Box, Button, Heading, Input, Select, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/ducks/userLoginReducer";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Perfectboxstyles, PerfectflexStyles } from "./Startpage";

const Signup = () => {
  const dispatcher = useDispatch();
  const [signupData, setSignupData] = useState({
    name: "",
    Email: "",
    password: "",
    phone_num: "",
    Gender: "",
  });

  console.log(signupData);

  const handleDataChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleSignupClick = () => {
    const FullName = signupData.name;
    const Email = signupData.Email;
    const passwd = signupData.password;
    const Phone_Num = signupData.phone_num;
    const Gender = signupData.Gender;
    dispatcher(createUser({ FullName, Email, passwd, Phone_Num, Gender }));
  };

  const inputStyles = {
    w: "70%",
    onChange: handleDataChange,
    variant: "filled",
  };

  return (
    <>
      <Box {...Perfectboxstyles} mt="5%" {...PerfectflexStyles} h="60vh">
        <Heading>Signup</Heading>

        <Box w="80%" {...PerfectflexStyles} gap="5">
          <Input
            type="text"
            name="name"
            placeholder="FullName"
            {...inputStyles}
          />
          <Input
            type="email"
            name="Email"
            placeholder="Email"
            {...inputStyles}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            {...inputStyles}
          />
          <Input
            type="text"
            name="phone_num"
            {...inputStyles}
            placeholder="PhoneNumber"
          />
          <Select name="Gender" {...inputStyles}>
            <option value="">select</option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
            <option value="Others">Others</option>
          </Select>
        </Box>

        <Button colorScheme="blue" onClick={handleSignupClick}>
          Signup
        </Button>

        <Text>
          already have account?<Link to="/login">login</Link>
        </Text>
      </Box>
      <ToastContainer position="bottom-center" autoclose={2000} />
    </>
  );
};

export default Signup;
