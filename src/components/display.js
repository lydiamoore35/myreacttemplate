import React from "react";

const Display = (props) => {
  const { movie } = props;

  const div = {
      textAlign: "center"
  }

  const h1 = {
      color: "blue",
      backgroundColor: "pink"
  }
  return (
    <div style={div}>
      <h1 style={h1}>{movie.Title}</h1>
      <h3>{movie.Year}</h3>
      <img src={movie.Poster} alt={movie.Title} />
    </div>
  );
};
export default Display;