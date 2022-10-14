import React from "react";
import { useSelector } from "react-redux";
import { getUserName } from "../../redux/selectors";
const Profile = () => {
  const user = useSelector(getUserName);
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {user.firstname} {user.lastname}!
      </h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
};

export default Profile;
