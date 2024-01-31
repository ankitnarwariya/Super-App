import React from "react";
import action from "../../assets/action.png";
import drama from "../../assets/drama.png";
import fantasy from "../../assets/fantasy.png";
import fiction from "../../assets/fiction.png";
import horror from "../../assets/horror.png";
import music from "../../assets/music.png";
import romance from "../../assets/romance.png";
import thriller from "../../assets/thriller.png";
import western from "../../assets/western.png";

import { useState } from "react";
import MovieCard from "../../Components/MovieCard";
import Chip from "../../Components/Chip";
import { useNavigate } from "react-router";

const genres = [
  {
    id: "Action",
    color: "#FF5209",
    image: <img style={{ width: "160px", height: "120px" }} src={action} />,
  },
  {
    id: "Drama",
    color: "#D7A4FF",
    image: <img style={{ width: "160px", height: "120px" }} src={drama} />,
  },
  {
    id: "Fantasy",
    color: " #FF4ADE",
    image: <img style={{ width: "160px", height: "120px" }} src={fantasy} />,
  },
  {
    id: "Fiction",
    color: "#6CD061",
    image: <img style={{ width: "160px", height: "120px" }} src={fiction} />,
  },
  {
    id: "Horror",
    color: "#7358FF",
    image: <img style={{ width: "160px", height: "120px" }} src={horror} />,
  },
  {
    id: "Music",
    color: "#E61E32",
    image: <img style={{ width: "160px", height: "120px" }} src={music} />,
  },
  {
    id: "Romance",
    color: "#11B800",
    image: <img style={{ width: "160px", height: "120px" }} src={romance} />,
  },
  {
    id: "Thriller",
    color: "#84C2FF",
    image: <img style={{ width: "160px", height: "120px" }} src={thriller} />,
  },
  {
    id: "Western",
    color: "#912500",
    image: <img style={{ width: "160px", height: "120px" }} src={western} />,
  },
];

const Info = () => {
  const [selectGenre, setSelectGenre] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleError = () => {
    if (selectGenre.length < 3) {
      setError("Minimum 3 Generes required");
    } else {
      navigate("/showcase");
    }
  };
  return (
    <div>
      <div className="cards">
        {genres.map((genre) => (
          <MovieCard
            key={genre.id}
            data={genre}
            selectGenre={selectGenre}
            setSelectGenre={setSelectGenre}
          />
        ))}
      </div>
      <div>
        {selectGenre.map((genre) => (
          <Chip
            key={genre}
            data={genre}
            selectGenre={selectGenre}
            setSelectGenre={setSelectGenre}
          />
        ))}
      </div>
      <small>{error}</small> <br />
      <button onClick={handleError}>Next Page</button>
    </div>
  );
};

export default Info;
