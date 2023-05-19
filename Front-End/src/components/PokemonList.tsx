import React from "react";
import { useNavigate } from "react-router-dom";
import "./pokemon.css";

interface Props {
  id: number;
  name: string;
  image: string;
  type: string;
}

const PokemonList = ({ id, name, image, type }: Props) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/pokemon/${id}`)}>
      <section className={`pokemon-list-container`}>
        <p className="pokemon-name">#{id}</p>
        <p className="pokemon-name">{name}</p>
        <img src={image} alt={name}></img>
        <div className={`pokemon-type ${type}`}>{type}</div>
      </section>
    </div>
  );
};

export default PokemonList;
