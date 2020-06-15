import React from "react";
import { useHistory } from "react-router-dom";

import "./styles.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const history = useHistory();

  return (
    <div className={`menu-item ${size}`} onClick={() => history.push(linkUrl)}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
