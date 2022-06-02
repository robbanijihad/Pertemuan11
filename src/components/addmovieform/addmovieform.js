import styles from "./addmovieform.module.css";
import { nanoid } from "nanoid";
import { useState } from "react";

function AddMovieForm(props) {
  const { movies, setMovies } = props;
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("default");
  const [poster, setPoster] = useState("");
  const [formError, setFormError] = useState({
    isTitleError: false,
    isDateError: false,
    isLinkError: false,
    isTypeError: false
  });
  function handleType (e){
    setType(e.target.value)
  }
  function handlePoster (e){
    setPoster(e.target.value)
  }
  function handleTitle (e){
    setTitle(e.target.value)
  }
  function handleYear (e){
    setYear(e.target.value)
  }
  function handleSubmit (e){
    e.preventDefault();
    const movie = {
      id: nanoid(),
      title: title,
      year: year,
      type: type,
      poster: poster,
    };
    validate() && setMovies([...movies, movie])
  }
  
  const {isTitleError, isDateError, isLinkError, isTypeError} = formError;
  function validate(){
    // Validasi pada form add movie ini wajib diisi
    if(title === ''){
        setFormError({
            ...formError,
            isTitleError: true
        });
        return false;
    } else if(year === ''){
        setFormError({
            ...formError,
            isDateError: true
        });
        return false;
    } else if(poster === ''){
        setFormError({
            ...formError,
            isLinkError: true
        });
        return false;
    } else if(type === ''){
        setFormError({
            ...formError,
            isTypeError: true
        });
        return false;
    } else{
        setFormError({
            isTitleError: false,
            isDateError: false,
            isLinkError: false,
            isTypeError: false
        })
        return true;
    }
  }
  


console.log (title);
  return (
    <div className={styles.container}>
      <section className={styles.addmovieform}>
        <div className={styles.addmovieform__left}>
            <img
                className={styles.addmovieform__image}
                src="https://picsum.photos/536/354"
                alt="placeholder"
            />
        </div>
        <div className="addmovieform__right">
            <h1>ADD MOVIE</h1>
            <form onSubmit={handleSubmit}>
                <label className={styles.addmovieform__form}>
                    title
                    <input type="text" name="title" className={styles.addmovieform__input} onChange = {handleTitle} value = {title}/>
                    {isTitleError && <p>Title ini wajib diisi</p>}
                </label>
                <label className={styles.addmovieform__form}>
                    year
                    <input type="number" name="year" onChange={handleYear} value = {year}/>
                    {isDateError && <p>Year ini wajib diisi</p>}
                </label>
                <label className={styles.addmovieform__form}>
                    type
                    <select value={type} onChange = {handleType}>
                      <option value="Action">Action</option>
                      <option value="comedy">comedy</option>
                      <option value="sex">sex</option>
                    </select>
                </label>
                <label className={styles.addmovieform__form}>
                    poster
                    <input type="text" name="poster" className={styles.addmovieform__input} onChange={handlePoster} value = {poster}/>
                    {isLinkError && <p>Poster ini wajib diisi</p>}                
                    </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;
