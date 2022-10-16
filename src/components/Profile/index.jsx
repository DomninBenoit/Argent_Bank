import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getUserName } from "../../redux/selectors";
import { putProfile } from "../../services/services";
import { useDispatch } from "react-redux";
import Input from "../Input";
import { setProfile } from "../../redux/actions";
const Profile = () => {
  const token = useSelector((state) => state.token);
  const user = useSelector(getUserName);
  const dispatch = useDispatch();
  const [displayUser, setDisplayUser] = useState(false);
  const updateUser = async (event) => {
    event.preventDefault();
    user.firstname = event.target["firstname"].value;
    user.lastname = event.target["lastname"].value;
    putProfile(token, user);
    dispatch(setProfile(user));
    console.log(user);
    closeModifyUser();
  };
  const openModifyUser = () => {
    setDisplayUser(true);
  };
  const closeModifyUser = () => {
    setDisplayUser(false);
  };

  return (
    <div className="header">
      <h1>Welcome back</h1>
      {displayUser === false ? (
        <div>
          <h1>
            {user.firstname} {user.lastname}!
          </h1>

          <button
            className="edit-button"
            type="button"
            onClick={openModifyUser}
          >
            Edit Name
          </button>
        </div>
      ) : (
        <form
          className="formModifyUser"
          onSubmit={(event) => updateUser(event)}
        >
          <Input
            type="text"
            name="firstname"
            classname="input-profile"
            placeholder={user.firstname}
          />
          <Input
            type="text"
            name="lastname"
            classname="input-profile"
            placeholder={user.lastname}
          />
          <button className="button-modify-user" type="submit">
            Save
          </button>
          <button className="button-modify-user" onClick={closeModifyUser}>
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default Profile;
