import React from "react";
import UserInfo from "../../Components/UserInfo";
import Weather from "../../Components/Weather";
import Notes from "../../Components/Notes";

const Showcase = () => {
  return (
    <div>
      <UserInfo />
      {/* <Weather /> */}
      <Notes />
    </div>
  );
};

export default Showcase;
