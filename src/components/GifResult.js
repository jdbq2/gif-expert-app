import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import GifImage from "./GifImage";
import { useFetchGifs } from "../hooks/useFetchGifs";

const GifResult = ({ categorie }) => {
  const { data: images, loading } = useFetchGifs(categorie);
  return (
    <div>
      <h3>{categorie}</h3>
      {loading && <h1>Loading...</h1>}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {images.map((img) => {
          return <GifImage key={img.id} {...img} />;
        })}
      </div>
    </div>
  );
};

GifResult.propTypes = {
  categorie: PropTypes.string.isRequired,
};

export default GifResult;
