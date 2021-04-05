import React from "react";
import AlphabetCard from "./alphabetCard";
import Handwriting from "./handwriting";

const Alphabet = () => {
  return (
    <section className="alphabet" id="alphabet">
      <h1 className="alphabet__title">Russian Alpabet</h1>
      <div className="aplhabet__description d-flex flex-column">
        <p className="alphabet__description-text">
          The Russian alphabet is derived from the Cyrillic alphabet and
          consists of <span className="section__span">10 vowels</span>,
          <span className="section__span"> 21 consonants</span> and
          <span className="section__span"> 2 signs</span>.
        </p>
        <p className="alphabet__description-text">
          <span className="section__span">Vowels: </span>а, е, ё, и, о, у, ы, э,
          ю, я.
        </p>
        <p className="alphabet__description-text">
          <span className="section__span">Consonants: </span>б, в, г, д, ж, з,
          й, к, л, м, н, п, р, с, т, ф, х, ц, ч, ш, щ.
        </p>
        <p className="alphabet__description-text">
          <span className="section__span">Signs: </span>ъ, ь.
        </p>
      </div>
      <p className="alphabet__description-text">
        Now let us learn the pronunciation of the letters. Remember that we use
        square brakets to write phonetic transcription.
      </p>
      <AlphabetCard />
      <Handwriting />
    </section>
  );
};

export default Alphabet;
