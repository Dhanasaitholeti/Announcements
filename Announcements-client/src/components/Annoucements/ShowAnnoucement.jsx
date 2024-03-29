import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import {
  editAnnouncement,
  resetState,
  showAnnouncement,
} from "../../redux/ducks/AnnouncementReducer";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { ToastContainer } from "react-toastify";
import { Box, Button, FormLabel, HStack, Textarea } from "@chakra-ui/react";
import { AnnouncementViewLoading } from "../LoadingScreens/Loadings";

const ShowAnnouncement = () => {
  const dispatcher = useDispatch();

  const navigator = useNavigate();

  const [showEdit, setShowEdit] = useState(false);

  const errstate = useSelector((state) => state.announcements.inderrState);
  const loadstate = useSelector((state) => state.announcements.indloadingState);
  const data = useSelector((state) => state.announcements.indData);

  const userload = useSelector((state) => state.userData.loadingstate);
  const userData = useSelector((state) => state.userData.userData);

  const [editValue, setEditValue] = useState(
    data && {
      subject: data.subject,
      description: data.Description,
    }
  );

  const handleEditOnchange = (e) => {
    setEditValue({
      ...editValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditDhindora = () => {
    dispatcher(
      editAnnouncement({
        id: data._id,
        editData: {
          subject: editValue.subject,
          description: editValue.description,
        },
      })
    );

    setTimeout(() => {
      setShowEdit(false);
    }, 2000);
  };

  const handleclick = () => {
    navigator(-1);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const { id } = useParams();

  useEffect(() => {
    dispatcher(showAnnouncement(id));

    return () => {
      dispatcher(resetState());
    };
  }, []);

  return (
    <>
      <HStack justifyContent={"space-between"}>
        <Button w="min-content" onClick={handleclick} colorScheme="blue">
          Back
        </Button>

        {!userload && userData && userData.Admin && (
          <Button colorScheme="blue" onClick={handleEditClick}>
            {showEdit ? "Cancel" : "Edit"}
          </Button>
        )}
      </HStack>

      {showEdit ? (
        <Box>
          <ToastContainer position="bottom-center" autoClose={3000} />
          <Box>
            <FormLabel htmlFor="subject">Edit the subject:</FormLabel>
            <br />
            <Textarea
              name="subject"
              id="subject"
              cols="100"
              rows="3"
              defaultValue={data.subject}
              onChange={handleEditOnchange}
            ></Textarea>
          </Box>

          <Box className="announcement-form-description">
            <FormLabel htmlFor="description">Edit the Description:</FormLabel>
            <br />
            <Textarea
              name="description"
              id="description"
              cols="100"
              rows="10"
              defaultValue={data.Description}
              onChange={handleEditOnchange}
            ></Textarea>
          </Box>

          <Button type="button" onClick={handleEditDhindora}>
            Update
          </Button>
        </Box>
      ) : errstate ? (
        <Heaidng>Error Occured</Heaidng>
      ) : loadstate ? (
        <AnnouncementViewLoading />
      ) : (
        data && (
          <Box
            boxShadow={"dark-lg"}
            p={10}
            mt={5}
            borderRadius={"10px"}
            minH={"75vh"}
          >
            <ReactMarkdown>{data.Description}</ReactMarkdown>
          </Box>
        )
      )}
    </>
  );
};

export default ShowAnnouncement;
