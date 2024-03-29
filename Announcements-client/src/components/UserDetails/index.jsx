import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../redux/ducks/userdataReducer";
import UserView from "./UserView";
import { UserDeatilloading } from "../LoadingScreens/Loadings";

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
          <UserDeatilloading />
        ) : (
          user && <UserView data={user} />
        )
      }
    </>
  );
};

export default UserDetails;
