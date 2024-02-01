import React from "react";
import Chip from "./Chip";

const UserInfo = () => {
  const userData = JSON.parse(window.localStorage.getItem("useInfo"));
  const genreData = JSON.parse(window.localStorage.getItem("selectedGeneres"));

  //   console.log(genreData);
  return (
    <div className="user-info">
      <h1>{userData.name}</h1>
      <h6>{userData.email}</h6>
      <h4>{userData.userName}</h4>
      <div className="user-info">
        {genreData.map((genre) => {
          return (
            <span className="chip" key={genre}>
              {genre}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default UserInfo;
