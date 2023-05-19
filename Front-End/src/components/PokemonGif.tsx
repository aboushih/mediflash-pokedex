import React, { useEffect } from "react";
import "./pokemon.css";
import { Images } from "../types";

interface PokemonGifProps {
  images: Images;
}

export default function PokemonGif({ images }: PokemonGifProps) {
  const [currentImage, setCurrentImage] = React.useState(images.front_default);

  const imagesUrls = Object.values(images).filter(
    (image) => !!image && typeof image === "string"
  );
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCurrentImage(imagesUrls[currentImageIndex]);
      setCurrentImageIndex((prev) => {
        if (prev === imagesUrls.length - 1) return 0;

        return prev + 1;
      });
    }, 300);
  }, [currentImage, currentImageIndex, imagesUrls]);

  return <img className="sprite-image" src={currentImage} alt="pokemon" />;
}
