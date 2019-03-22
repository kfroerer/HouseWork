import React from "react";

const Card = props => (
  <div style={cardStyle}>
    <div style={imgContainerStyle}>
      <img style={imgStyle} alt={props.name} src={props.image} />
    </div>
  </div>
);

const cardStyle = {
  height: "300px",
  width: "300px",
  float: "left"
}

const imgContainerStyle = {
  height: "100%",
  overflow: "hidden",
  textAlign: "center",
  backgroundSize: "100%"
}

const imgStyle  = {
  display: "block",
    margin: "auto",
    paddingTop: "30px",
  width: "75%"
}

export default Card;