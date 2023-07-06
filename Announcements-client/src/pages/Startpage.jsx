// import "../styles/Startpage.css"
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Perfectboxstyles = {
  h: "40vh",
  w: "30%",
  mt: "10%",
  mx: "auto",
  borderRadius: "5",
  boxShadow: "dark-lg",
  gap: "10%",
};

export const PerfectflexStyles = {
  display: "flex",
  flexDir: "column",
  alignItems: "center",
  justifyContent: "center",
};

const Startpage = () => {
  const naviagte = useNavigate();
  useEffect(() => {
    const jwt_token = Cookies.get("jwtToken");
    if (jwt_token) {
      naviagte("/home");
    }
  }, []);

  const buttonStyles = {
    w: "50%",
    mx: "auto",
    colorScheme: "blue",
  };

  const handleOnClickOnButtons = (routeName) => {
    naviagte(`/${routeName}`);
  };

  return (
    <Box {...Perfectboxstyles} {...PerfectflexStyles}>
      <Heading as={"h3"} fontSize="3xl">
        Welcome to the Dindora
      </Heading>

      <Flex flexDir={"column"} w="80%">
        <Button
          onClick={() => handleOnClickOnButtons("login")}
          {...buttonStyles}
        >
          Login
        </Button>
        <Text textAlign={"center"}>or</Text>
        <Button
          onClick={() => handleOnClickOnButtons("signup")}
          {...buttonStyles}
        >
          Signup
        </Button>
      </Flex>
    </Box>
  );
};

export default Startpage;
