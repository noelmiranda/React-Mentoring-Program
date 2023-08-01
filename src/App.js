import CounterView from "./components/counter/";
import "./index.css";
import Header from "./components/header/header";
import MovieSectionView from "./components/moviesection"

function App() {
  return (
    <div className="container">
      <CounterView />
      <Header />
      <MovieSectionView />
    </div>
  );
}

export default App;
