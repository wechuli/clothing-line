import React from "react";
import "./MenuItem.scss";
import { withRouter } from "react-router-dom";

const MenuItem = props => {
  const { title, imageUrl, size,history } = props;
  return (
    <div className={`menu-item  ${size}`} onClick={()=>history.push()}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
