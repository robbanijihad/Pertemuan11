// Import Navbar, Hero, Movies, Footer Component
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import AddMovieForm from "../components/addmovieform/addmovieform";
import { useState } from "react";
import data from "../components/utils/constants/data";


/**
 * Membuat Component Home.
 * Menampilkan Halaman Home.
 * Menampung Navbar, Main, dan Footer Component
 */
function Home() {
    const [movies, setMovies]=useState(data);
  return (
    <>
    <Hero />
      <Movies movies={movies} setMovies = {setMovies}/>
      <AddMovieForm movies={movies} setMovies = {setMovies}/>
    </>
  );
}

export default Home;

