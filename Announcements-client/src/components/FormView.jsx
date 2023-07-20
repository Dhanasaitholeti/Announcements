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
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Textarea,
} from "@chakra-ui/react";

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
      <Box p="5">
        <Box p="5">
          <Box onClick={handlebackButton}>
            <FontAwesomeIcon
              cursor={"pointer"}
              icon={faArrowAltCircleLeft}
              size="2x"
            />
          </Box>
        </Box>
        <Box>
          <Heading textAlign={"center"} color="red">
            Make New Dhindora..!
          </Heading>
        </Box>

        <ToastContainer autoClose={3000} position="bottom-center" />

        <Flex flexDir={"column"} alignItems="center" gap={5}>
          <Box w="80%">
            <FormLabel mb={0} fontSize={"20px"}>
              Enter the subject:
            </FormLabel>
            <br />
            <Textarea
              name="subject"
              onChange={handleOnChange}
              placeholder="Enter The Title"
            />
          </Box>
          <Box w="80%">
            <FormLabel mb={0} fontSize={"20px"}>
              Enter the Description:
            </FormLabel>
            <br />
            <Textarea
              name="description"
              rows={10}
              onChange={handleOnChange}
              placeholder="Enter The Annoucement Description"
            />
          </Box>

          <Button onClick={handleSubmitClick} colorScheme="green">
            Submit
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default FormView;
