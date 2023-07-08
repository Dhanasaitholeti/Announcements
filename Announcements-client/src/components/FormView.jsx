import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAnnouncement } from "../redux/ducks/AnnouncementReducer";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/addAnnouncement.css";
import "../styles/popupMsg.css";
import { Box, Button, Heading, Textarea } from "@chakra-ui/react";
const FormView = () => {
  const navigator = useNavigate();

  const dispatcher = useDispatch();

  const [formdata, setFormdata] = useState({
    subject: "",
    description: "",
  });

  const handleOnChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitClick = () => {
    dispatcher(postAnnouncement({ ...formdata }));
    navigator(-1);
  };

  const handlebackButton = () => {
    navigator(-1);
  };

  return (
    <>
      <Box>
        <Box>
          <Box onClick={handlebackButton}>
            <FontAwesomeIcon icon={faArrowAltCircleLeft} size="2x" />
          </Box>
        </Box>
        <Box>
          <Heading>Make New Dhindora..!</Heading>
        </Box>

        <ToastContainer autoClose={3000} position="bottom-center" />

        <Box>
          <label htmlFor="subject">Enter the subject:</label>
          <br />
          <textarea
            name="subject"
            id="subject"
            cols="100"
            rows="3"
            onChange={handleOnChange}
          ></textarea>
        </Box>

        <Box>
          <label htmlFor="description">Enter the Description:</label>
          <br />
          <Textarea
            name="description"
            id="description"
            cols="100"
            rows="10"
            onChange={handleOnChange}
          />
        </Box>

        <Box>
          <Button onClick={handleSubmitClick} colorScheme="green">
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default FormView;
