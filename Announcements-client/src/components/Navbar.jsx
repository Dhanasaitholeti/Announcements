import { Box, Button, Heading } from "@chakra-ui/react";
import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navigator = useNavigate();

  const [divClass, setDivClass] = useState("options");

  const handleMouseOn = () => {
    const asn = divClass == "options" ? "options-onhover" : "options";
    setDivClass(asn);
  };

  const handleLogout = () => {
    Cookies.remove("jwtToken");
    navigator("/");
  };

  return (
    <Box
      p="10px 10%"
      boxShadow={"lg"}
      display={"flex"}
      justifyContent={"space-between"}
    >
      <Heading>Dhindora</Heading>

      {!(
        location.pathname == "/login" ||
        location.pathname == "/" ||
        location.pathname == "/signup"
      ) && (
        <Button onClick={handleLogout} colorScheme="red">
          logout
        </Button>
      )}
    </Box>
  );
};

export default Navbar;
