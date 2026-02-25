import { useContext } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TopStreaming from "./components/TopStreaming";
import Genres from "./components/Genres";
import FullScreenPlayer from "./components/FullScreenPlayer";
import Footer from "./components/Footer";
import { MovieContext } from "./context/MovieContext";

function App() {

  const { selectedMovie, setSelectedMovie } = useContext(MovieContext);

  return (
    <>
      {selectedMovie ? (
        <FullScreenPlayer
          movie={selectedMovie}
          onBack={() => setSelectedMovie(null)}
        />
      ) : (
        <>
          <Navbar />
          <Hero />
          <TopStreaming />
          <Genres />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;