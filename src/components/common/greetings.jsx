import React from "react";

const Greetings = () => {
  return (
    <section className="greetings">
      <h2 className="greetings__title">Greetings</h2>
      <table class="greetings__table table table-hover caption-top">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Polite</th>
            <th scope="col">Casual</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">In the morning</th>
            <td>Доброе утро</td>
            <td>Привет</td>
          </tr>
          <tr>
            <th scope="row">In the afternoon</th>
            <td>Добрый день</td>
            <td>Привет</td>
          </tr>
          <tr>
            <th scope="row">In the evening</th>
            <td>Добрый вечер</td>
            <td>Привет</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Greetings;
