import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../redux/ducks/userdataReducer";
import UserView from "./UserView";

import NoAuth from "../NoAuth";
import { Heading } from "@chakra-ui/react";

const UserDetails = () => {
  const errstate = useSelector((state) => state.userData.errstate);
  const loadingstate = useSelector((state) => state.userData.loadingstate);
  const user = useSelector((state) => state.userData.userData);

  const dispatcher = useDispatch();
  useEffect(() => {
    dispatcher(getUserData());
  }, []);

  return (
    <>
      {
        // this is the whole logic for displaying components
        errstate ? (
          <NoAuth />
        ) : loadingstate ? (
          <Heading>Loading...</Heading>
        ) : (
          user && <UserView data={user} />
        )
      }
    </>
  );
};

export default UserDetails;
