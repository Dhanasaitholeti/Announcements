import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import checkToken from "../components/checks/checkToken";
import Announcement from "../components/Announcements";
import UserDetails from "../components/UserDetails";
import AnnouncementForm from "../components/AnnouncementForm";
import ShowAnnouncement from "../components/ShowAnnoucement";
import NotFound from "../components/NotFound";

const Dashboard = () => {
  const boxstyles = {
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
      <GridItem colStart={5} colSpan={2} pos={"relative"} left={"1%"}>
        <Box {...boxstyles}>
          <UserDetails />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Dashboard;
