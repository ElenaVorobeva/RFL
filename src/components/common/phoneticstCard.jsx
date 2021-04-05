import React, { Component } from "react";
import { alphabet } from "../../utils/alphabet";
import A from "../../audios/Alphabet/A.mp3";
import B from "../../audios/Alphabet/B.mp3";
import V from "../../audios/Alphabet/V.mp3";
import G from "../../audios/Alphabet/G.mp3";
import D from "../../audios/Alphabet/D.mp3";
import E from "../../audios/Alphabet/E.mp3";
import YO from "../../audios/Alphabet/YO.mp3";
import J from "../../audios/Alphabet/J.mp3";
import Z from "../../audios/Alphabet/Z.mp3";
import I from "../../audios/Alphabet/I.mp3";
import II from "../../audios/Alphabet/Ii.mp3";
import K from "../../audios/Alphabet/K.mp3";
import L from "../../audios/Alphabet/L.mp3";
import M from "../../audios/Alphabet/M.mp3";
import N from "../../audios/Alphabet/N.mp3";
import O from "../../audios/Alphabet/O.mp3";
import P from "../../audios/Alphabet/P.mp3";
import R from "../../audios/Alphabet/R.mp3";
import S from "../../audios/Alphabet/S.mp3";
import T from "../../audios/Alphabet/T.mp3";
import Y from "../../audios/Alphabet/Y.mp3";
import F from "../../audios/Alphabet/F.mp3";
import X from "../../audios/Alphabet/X.mp3";
import TS from "../../audios/Alphabet/TS.mp3";
import TCH from "../../audios/Alphabet/TCH.mp3";
import SH from "../../audios/Alphabet/SH.mp3";
import SCH from "../../audios/Alphabet/SCH.mp3";
import HC from "../../audios/Alphabet/HC.mp3";
import YEE from "../../audios/Alphabet/YEE.mp3";
import SC from "../../audios/Alphabet/SC.mp3";
import EA from "../../audios/Alphabet/EA.mp3";
import U from "../../audios/Alphabet/U.mp3";
import YA from "../../audios/Alphabet/YA.mp3";

class AlphabetCard extends Component {
  play = (e) => {
    const audio = e.target.firstElementChild;
    audio.play();
  };

  render() {
    let audios = [
      A,
      B,
      V,
      G,
      D,
      E,
      YO,
      J,
      Z,
      I,
      II,
      K,
      L,
      M,
      N,
      O,
      P,
      R,
      S,
      T,
      Y,
      F,
      X,
      TS,
      TCH,
      SH,
      SCH,
      HC,
      YEE,
      SC,
      EA,
      U,
      YA,
    ];

    return (
      <div className="phonetics__cards ">
        {alphabet.map((card, index) => (
          <div className="phonetics__card d-flex flex-column">
            <p className="phonetics__card-number m-0">{index + 1}</p>
            <p className="phonetics__card-letter m-0">{card.letter}</p>
            <div className="phonetics__card-audio m-0" onClick={this.play}>
              <audio className="phonetics__audio" src={audios[index]}></audio>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default AlphabetCard;
