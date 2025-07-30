import UserDetails from "./UserDetails";
// import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

const UserInfo = () => {
  // const userData = useContext(UserContext);
  return (
    <div>
      {/* <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p> */}
      <UserDetails />
    </div>
  );
};

export default UserInfo;
