import { ToastContainer } from "react-toastify";
import "../App.css";
import PokemonCollection from "../components/PokemonCollection";
import { useGetPokemons } from "../hooks/get-pokemons";
import pokemonLogo from "./pokemon-logo.png";

const Home = () => {
  const { pokemons, fetchNextPage } = useGetPokemons();

  return (
    <div className="App">
      <header className="pokemon-header">
        <img src={pokemonLogo} alt="fireSpot" style={{ maxWidth: "200px" }} />
      </header>
      <PokemonCollection pokemons={pokemons}></PokemonCollection>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          margin: "20px 0",
        }}
      >
        <button onClick={() => fetchNextPage()}>Load more</button>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Home;
