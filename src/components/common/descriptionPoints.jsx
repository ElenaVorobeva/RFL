import React from "react";

const DescriptionPoints = () => {
  return (
    <ul className="description__points d-flex justify-content-between section_ul">
      <div className="description__point-column d-flex flex-column">
        <li className="description__point description__point_icon description__point_grammar"></li>
        <li className="description__point">Grammar explanation</li>
      </div>
      <div className="description__point-column d-flex flex-column">
        <li className="description__point description__point_icon description__point_vocabulary"></li>
        <li className="description__point">Vocabulary usage</li>
      </div>
      <div className="description__point-column d-flex flex-column">
        <li className="description__point description__point_icon description__point_listening"></li>
        <li className="description__point">Listening practice</li>
      </div>
      <div className="description__point-column d-flex flex-column">
        <li className="description__point description__point_icon description__point_exercises"></li>
        <li className="description__point">Interactive exercises</li>
      </div>
    </ul>
  );
};

export default DescriptionPoints;
