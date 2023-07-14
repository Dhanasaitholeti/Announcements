import { useEffect } from "react";
import "../styles/annoucement.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { getAnnouncemnt } from "../redux/ducks/AnnouncementReducer";
import AnnouncementView from "./AnnouncementView";
import NoAuth from "./NoAuth";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box, Button, Grid, GridItem, Heading } from "@chakra-ui/react";

const Announcement = () => {
  const navigator = useNavigate();

  const handleplusiconClick = () => {
    navigator("/home/new-announcement");
  };

  const errstate = useSelector((state) => state.announcements.errstate);
  const loadstate = useSelector((state) => state.announcements.loadingstate);
  const announcementsData = useSelector((state) => state.announcements.Data);

  const userData = useSelector((state) => state.userData.userData);
  const userload = useSelector((state) => state.userData.loadingstate);

  const dispatcher = useDispatch();

  useEffect(() => {
    dispatcher(getAnnouncemnt());
  }, [location.key]);

  return (
    <>
      <Box>
        {
          //this is the whole logic for displaying components
          errstate ? (
            <NoAuth />
          ) : loadstate ? (
            <Heading>Loading...</Heading>
          ) : (
            announcementsData &&
            userData && (
              <AnnouncementView data={announcementsData} userData={userData} />
            )
          )
        }
      </Box>

      <Box mt={"2%"}>
        <ToastContainer position="bottom-center" autoClose={3000} />

        {!userload && userData && userData.Admin && (
          <Button
            colorScheme="green"
            h="50px"
            aspectRatio={1}
            borderRadius={"50px "}
            onClick={handleplusiconClick}
          >
            <FontAwesomeIcon icon={faAdd} size="2x" />
          </Button>
        )}
      </Box>
    </>
  );
};

export default Announcement;
