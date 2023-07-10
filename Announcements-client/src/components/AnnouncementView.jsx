import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useDispatch } from "react-redux";
import {
  deleteAnnoucement,
  getAnnouncemnt,
} from "../redux/ducks/AnnouncementReducer";
import { useNavigate } from "react-router-dom";
import { Box, Button, Text } from "@chakra-ui/react";

const AnnouncementView = ({ data, userData }) => {
  const navigator = useNavigate();
  const dispatcher = useDispatch();
  const handleOnClickDelete = (id) => {
    dispatcher(deleteAnnoucement(id));
    dispatcher(getAnnouncemnt());
  };

  const handleOnClickShow = (id) => {
    navigator(`/home/announcement/${id}`);
  };

  return (
    <>
      {data.map((eachobj) => {
        return (
          <React.Fragment key={eachobj._id}>
            <Box>
              <Text>{eachobj.subject}</Text>
              <Box>
                <ReactMarkdown>
                  {eachobj.Description.slice(0, 30) + "........"}
                </ReactMarkdown>
              </Box>
            </Box>

            <Box>
              {userData.Admin && (
                <Button onClick={() => handleOnClickDelete(eachobj._id)}>
                  remove
                </Button>
              )}
              <Button onClick={() => handleOnClickShow(eachobj._id)}>
                show
              </Button>
            </Box>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default AnnouncementView;
