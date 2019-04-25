import React from "react";
import { Image, Label, Segment } from 'semantic-ui-react'


const Card = props => (
          <Segment style={cardStyle}>
    <Label attached='top' color="teal">{props.title}</Label>
    <div style={imgContainerStyle}>
    {props.name}
      <Image 
      style={imgStyle} 
      alt={props.name}
      src={props.image}
      label={{as: 'a', color: 'teal', content: "", ribbon: true}} />

    </div>
  </Segment>
);

const cardStyle = {
  height: "200px",
  width: "300px",
  float: "left",
  margin: '5px'
}

const imgContainerStyle = {
  height: "100%",
  overflow: "hidden",
  textAlign: "center",
  backgroundSize: "100%"
}

const imgStyle  = {
  display: "block",
    marginTop: '-40px',
    // paddingTop: "30px",
  width: "100%"
}

export default Card;