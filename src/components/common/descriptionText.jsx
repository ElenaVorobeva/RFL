import React from "react";

const DesriptionText = () => {
  const subtitle = `What's new`;

  return (
    <div className="description__text">
      <div className="description__container d-flex flex-column">
        <div className="description__block">
          <h2 className="description__title">Welcome to our website!</h2>
          <p className="description__subtitle">
            This website is designed to teach you the Russian language. Here you
            may find basic theory and grammar explanation. All the exercices are
            free. So enjoy!
          </p>
        </div>
        <div className="description__block">
          <h2 className="description__title">{subtitle}</h2>
          <p className="description__subtitle">
            We added alphabet and writing cards. Be sure to check it out!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DesriptionText;
