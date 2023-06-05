import React, { useState } from "react";
import "./App.css";
import AddMovies from "./Components/AddMovies";
import Data from "./Components/Data";
import MovieList from "./Components/MovieList";
import Navigation from "./Components/Navigation";

function App() {
  const [myMovies, setMyMovies] = useState(Data);
  const Adding = (newMovie) => {
    // setMyMovies([...myMovies, newMovie]);
    console.log("Hello");
  };
  return (
    <div className="App">
      <Navigation />
      <br />
      <AddMovies Add={Adding} />
      <br />
      <MovieList Data={myMovies} />
    </div>
  );
}

export default App;
