import styles from "./Movies.module.css";
import Movie from "../Movie/Movie";
import { nanoid } from "nanoid";

function Movies(props) {
  
  const{movies, setMovies} = props;
  function tambahfilm() {
    const movie = {
      id: nanoid(),
      title: "elite classsroom",
      year: "2022",
      poster: "https://picsum.photos/300/400",
    };


    setMovies([...movies, movie]);
  }
  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
          {movies.map((movie) => {
              
              return <Movie key={movie.id} movie = {movie} />;
            })
          }
        </div>
        <button onClick={tambahfilm}> add movie </button>
      </section>
    </div>
  );
}

export default Movies;
