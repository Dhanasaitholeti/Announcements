// import "../styles/Navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faContactCard,
  faSun,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Heading } from "@chakra-ui/react";

const Navbar = () => {
  const location = useLocation();

  const navigator = useNavigate();

  const [divClass, setDivClass] = useState("options");

  const handleMouseOn = () => {
    const asn = divClass == "options" ? "options-onhover" : "options";
    setDivClass(asn);
  };

  //   const handleLogout = () => {
  //     Cookies.remove("jwtToken");
  //     navigator("/");
  //   };

  return (
    <Box p="10px" boxShadow={"lg"}>
      <Heading>Dhindora</Heading>

      {/* <Box>
        <Box>
          <FontAwesomeIcon icon={faSun} />
        </Box>

        <Box>
          <a href="">
            <FontAwesomeIcon icon={faContactCard} />
          </a>
        </Box>

        <Box onClick={handleMouseOn}>
          <FontAwesomeIcon icon={faUser} />
          {!(
            location.pathname == "/login" ||
            location.pathname == "/" ||
            location.pathname == "/signup"
          ) && (
            <Box className={BoxClass}>
              <p onClick={handleLogout}>logout</p>
            </Box>
          )}
        </Box>
      </Box> */}
    </Box>
  );
};

export default Navbar;
