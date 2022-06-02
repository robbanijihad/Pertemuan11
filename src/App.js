// Import Halaman Home
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import CreateMovie from "./pages/movie/Create";
import NowPlayingMovie from "./pages/movie/NowPlaying";
import PopularMovie from "./pages/movie/Popular";
import TopRatedMovie from "./pages/movie/TopRated";

function App() {
  /**
   * Menampilkan Halaman Home.
   * Tag div bisa diganti dengan tag <>.
   * Tag <> adalah React fragment
   */
  return (
    <>
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/create" element={<CreateMovie/>}/>
        <Route path="/movie/now" element={<NowPlayingMovie/>}/>
        <Route path="/movie/popular" element={<PopularMovie/>}/>
        <Route path="/movie/top" element={<TopRatedMovie/>} />
      </Routes>
    </Layout>
    </>
  );
}

export default App;
