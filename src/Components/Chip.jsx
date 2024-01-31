import React from "react";

const Chip = ({ data, selectGenre, setSelectGenre }) => {
  let handleGenreSelection = () => {
    if (selectGenre.includes(data)) {
      setSelectGenre((prev) => prev.filter((item) => item !== data));
    } else {
      setSelectGenre((prev) => [...prev, data]);
    }
  };
  return (
    <div>
      <button>
        {data} <span onClick={handleGenreSelection}> &nbsp; X </span>
      </button>
    </div>
  );
};

export default Chip;
