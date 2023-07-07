import { Box, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";

import { Route, Routes } from "react-router-dom";
import checkToken from "./checks/checkToken";
import Announcement from "./Announcements";
import UserDetails from "./UserDetails";
import AnnouncementForm from "./AnnouncementForm";
import ShowAnnouncement from "./ShowAnnoucement";
import NotFound from "./NotFound";

const Dashboard = () => {
  const boxstyles = {
    boxShadow: "dark-lg",
    borderRadius: 5,
    p: 5,
  };

  checkToken();

  return (
    <Grid templateColumns="repeat(6,1fr)" gap={5} p={3}>
      <GridItem colSpan={4}>
        <Box {...boxstyles}>
          <Routes>
            <Route path="/" element={<Announcement />} />
            <Route path="/new-announcement" element={<AnnouncementForm />} />
            <Route path="/announcement/:id" element={<ShowAnnouncement />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Box>
      </GridItem>
      <GridItem colStart={5} colSpan={2}>
        <Box {...boxstyles}>
          <UserDetails />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Dashboard;
