import React from "react";
// import CardBtn from "../CardBtn";
import "./style.css";

function Card(props) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: props.image ? `url(${props.image})` : "none"
      }}
    >
      {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}

      {/* <CardBtn
        onClick={props.handleBtnClick}
        data-value="github"
      />
      <CardBtn
        onClick={props.handleBtnClick}
        data-value="deploy"
      /> */}
    </div>
  );
}

export default Card;
