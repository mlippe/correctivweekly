import React from "react";
import ProfileTop from "../components/Profile/ProfileTop";
import ProfileStatWrapper from "../components/Profile/ProfileStatWrapper";
import ProfileDonats from "../components/Profile/ProfileDonats";

export default function Profile(props) {
  return (
    <div className="profile-view">
      <ProfileTop />
      <ProfileStatWrapper />
      <ProfileDonats
        donatCount={props.donatCount}
        setDonatCount={props.setDonatCount}
      />
    </div>
  );
}
