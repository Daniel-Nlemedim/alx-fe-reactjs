import { Routes, Route, Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <Link to="settings"> Settings</Link>
        <Link to="details">Details</Link>
      </nav>

      <Routes>
        <Route path="details">{<ProfileDetails></ProfileDetails>}</Route>
        <Route path="settings">{<ProfileSettings></ProfileSettings>}</Route>
      </Routes>
    </div>
  );
}
export default Profile;
