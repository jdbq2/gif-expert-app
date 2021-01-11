import React from "react";
import PropTypes from "prop-types";

const GifImage = ({ title, id, url }) => {
  return (
    <div
      className=" animate__animated animate__fadeIn"
      style={{
        width: "300px",
        margin: "10px",
        border: "2px solid black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <h1 style={{ textAlign: "center", fontSize: "15px", width: "90%" }}>
        {title}
      </h1>
      <img style={{ width: "100%" }} src={url} alt={title} />
    </div>
  );
};

GifImage.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default GifImage;
