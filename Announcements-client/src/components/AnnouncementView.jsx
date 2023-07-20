import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useDispatch } from "react-redux";
import {
  deleteAnnoucement,
  getAnnouncemnt,
} from "../redux/ducks/AnnouncementReducer";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

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

  const ButtonStyles = {
    width: "100%",
  };

  return (
    <>
      {data.map((eachobj) => {
        return (
          <Flex
            justifyContent={"space-between"}
            key={eachobj._id}
            borderRadius={10}
            boxShadow={"md"}
            px={5}
            py={2}
            mt={3}
          >
            <Box>
              <Heading fontSize={"24px"} noOfLines={3}>
                {eachobj.subject}
              </Heading>
              <Box fontSize={"16px"} noOfLines={3}>
                <ReactMarkdown>{eachobj.Description}</ReactMarkdown>
              </Box>
            </Box>

            <VStack>
              {userData.Admin && (
                <Button
                  {...ButtonStyles}
                  colorScheme="red"
                  onClick={() => handleOnClickDelete(eachobj._id)}
                >
                  remove
                </Button>
              )}
              <Button
                {...ButtonStyles}
                colorScheme="green"
                onClick={() => handleOnClickShow(eachobj._id)}
              >
                show
              </Button>
            </VStack>
          </Flex>
        );
      })}
    </>
  );
};

export default AnnouncementView;
