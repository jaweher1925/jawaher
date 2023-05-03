import React from "react";
import'./features.css'

const Features =  ({ title, text ,image})  => {
  return (
    <div className="tigmee__features-container__feature">
        <div className="tigmee__features-container__feature-title">
        <div />
        <h1>{title}</h1>
    </div>
    <div className="tigmee__features-container_feature-text">
      <p>{text}</p>
    </div>
    <div className="tigmee__features-container_feature-image">
      <p>{image}</p>
    </div>
  </div>
  );
}

export default Features;
