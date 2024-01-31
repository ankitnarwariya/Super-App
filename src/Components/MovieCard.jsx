import React from "react";

const MovieCard = ({ data, selectGenre, setSelectGenre }) => {
  let handleGenreSelection = () => {
    if (selectGenre.includes(data.id)) {
      setSelectGenre((prev) => prev.filter((item) => item !== data.id));
    } else {
      setSelectGenre((prev) => [...prev, data.id]);
    }
  };
  return (
    <div
      style={{
        background: data.color,
        border: `${
          selectGenre.includes(data.id) ? "4px solid green" : "4px solid black"
        }`,
      }}
      className="card"
      onClick={handleGenreSelection}
    >
      <h4>{data.id}</h4>
      {data.image}
    </div>
  );
};

export default MovieCard;
