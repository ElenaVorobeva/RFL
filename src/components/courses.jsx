import React from "react";

const Courses = () => {
  return (
    <section className="courses section_margin">
      <div className="courses__item">
        <h3 className="courses__title">Elementary</h3>
        <p className="courses__subtitle">(A1)</p>
      </div>
      <div className="courses__item">
        <h3 className="courses__title">Beginner</h3>
        <p className="courses__subtitle">(A2)</p>
      </div>
      <div className="courses__item">
        <h3 className="courses__title">Intermediate</h3>
        <p className="courses__subtitle">(B1)</p>
      </div>
      <div className="courses__item">
        <h3 className="courses__title">Upper Intermediate</h3>
        <p className="courses__subtitle">(B2)</p>
      </div>
    </section>
  );
};

export default Courses;
