import React from "react";
import { useParams } from "react-router-dom";
import { useGetPokemon } from "../hooks/get-pokemon";
import "./views.css";
import PokemonGif from "../components/PokemonGif";
import { useDeletePokemon } from "../hooks/delete-pokemon";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SinglePokemonView() {
  const { id } = useParams();
  const { data } = useGetPokemon(id ?? "");

  const { mutate: deletePokemon } = useDeletePokemon();

  if (!data || !id) return null;

  const notify = (name: string) => {
    toast.success(`The Pokemon "${name}" has been successfully deleted`, {
      position: "top-center",
      autoClose: 3000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const colors = [
    "#f6d6a7",
    "#e0a7f6",
    "#f4f4f4",
    "#fbe3df",
    "#e2f9e1",
    "#e0f1fd",
  ];

  return (
    <div className="single-pokemon-container">
      <div className="back-button-container">
        <button className="back-button" onClick={() => window.history.back()}>
          Back
        </button>
      </div>
      <div className="delete-button-container">
        <button
          className="delete-button"
          onClick={() => {
            deletePokemon(id);
            window.history.back();
            notify(data.name);
          }}
        >
          Delete
        </button>
      </div>
      <h1 style={{ textTransform: "capitalize" }}>{data.name}</h1>
      <div className="pokemon-description-container">
        <div className="image-container">
          <PokemonGif images={data.images} />
        </div>
        <div className="single-pokemon-detail-container">
          <div className="stats-container">
            <div className="stats-row">
              <div>
                <span className="stats-title">Height</span>
                <span className="stats-content">{data.height}</span>
              </div>
              <div>
                <span className="stats-title">Species</span>
                <span className="stats-content">{data.species.name}</span>
              </div>
            </div>
            <div className="stats-row">
              <div>
                <span className="stats-title">Weight</span>
                <span className="stats-content">{data.weight}</span>
              </div>
              <div>
                <span className="stats-title">Stats</span>
                <span className="stats-content">{data.stats[0].name}</span>
              </div>
            </div>
          </div>
          <div className="type-container">
            <strong style={{ marginRight: "8px", fontSize: "16px" }}>
              Types
            </strong>
            {data.types.map((type) => (
              <span key={type} className={`type-content ${type}`}>
                {type}
              </span>
            ))}
          </div>
          <div className="type-container">
            <strong style={{ marginRight: "8px", fontSize: "16px" }}>
              Abilities
            </strong>
            {data.abilities.map((ability) => (
              <span
                key={ability.name}
                className={`ability-content`}
                style={{
                  background: colors[Math.floor(Math.random() * colors.length)],
                }}
              >
                {ability.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
