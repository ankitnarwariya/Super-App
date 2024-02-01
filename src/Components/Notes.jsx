import React, { useEffect, useState } from "react";

const Notes = () => {
  const [notes, setNotes] = useState(
    JSON.parse(window.localStorage.getItem("notes"))
  );
  let handleChange = (e) => {
    setNotes(e.target.value);
    window.localStorage.setItem("notes", JSON.stringify(e.target.value));
  };
  //   useEffect(() => {
  //     const notes = JSON.parse(window.localStorage.getItem("notes"));
  //     setNotes(notes);
  //   }, []);
  return (
    <div>
      <h2>Notes</h2>
      <textarea
        onChange={handleChange}
        value={notes}
        cols="30"
        rows="10"
      ></textarea>
    </div>
  );
};

export default Notes;
