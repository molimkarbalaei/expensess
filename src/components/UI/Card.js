import React from "react";
import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}
// baraye in ke az card be jaye div estefade kone
//miad az {props.children} estefade mikone
//dar asl mige az dakhele card bardashte mishe?
//ke khob save ke mikoni file broken shode.
//pas: custom component define shode tavasot man pas:
// bayad class haro add konim az tarighe "card " + props.className

export default Card;
// harchi beyne card bezari mishe children!
