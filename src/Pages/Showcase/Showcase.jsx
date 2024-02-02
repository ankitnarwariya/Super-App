import React from "react";
import UserInfo from "../../Components/UserInfo";
import Weather from "../../Components/Weather";
import Notes from "../../Components/Notes";
import Timer from "../../Components/Timer";

const Showcase = () => {
  return (
    <div>
      <Timer />
      <UserInfo />
      {/* <Weather /> */}
      <Notes />
    </div>
  );
};

export default Showcase;
