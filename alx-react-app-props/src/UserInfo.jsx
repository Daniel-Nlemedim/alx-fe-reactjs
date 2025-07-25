import UserDetails from "./UserDetails";
import React, { useContext } from "react";
import UserContext from "./UserContext";

const UserInfo = () => {
  const userData = useContext(UserContext);
  return (
    <div>
      <h2>User Info</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <UserDetails />
    </div>
  );
};

export default UserInfo;
