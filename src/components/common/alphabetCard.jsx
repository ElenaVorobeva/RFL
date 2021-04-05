import React, { Component } from "react";

import { alphabet } from "../../utils/alphabet";

import A from "../../audios/Alphabet/A.m4a";
import B from "../../audios/Alphabet/B.m4a";
import V from "../../audios/Alphabet/V.m4a";
import G from "../../audios/Alphabet/G.m4a";
import D from "../../audios/Alphabet/D.m4a";
import E from "../../audios/Alphabet/E.m4a";
import YO from "../../audios/Alphabet/YO.m4a";
import J from "../../audios/Alphabet/J.m4a";
import Z from "../../audios/Alphabet/Z.m4a";
import I from "../../audios/Alphabet/I.m4a";
import II from "../../audios/Alphabet/II.m4a";
import K from "../../audios/Alphabet/K.m4a";
import L from "../../audios/Alphabet/L.m4a";
import M from "../../audios/Alphabet/M.m4a";
import N from "../../audios/Alphabet/N.m4a";
import O from "../../audios/Alphabet/O.m4a";
import P from "../../audios/Alphabet/P.m4a";
import R from "../../audios/Alphabet/R.m4a";
import S from "../../audios/Alphabet/S.m4a";
import T from "../../audios/Alphabet/T.m4a";
import Y from "../../audios/Alphabet/Y.m4a";
import F from "../../audios/Alphabet/F.m4a";
import X from "../../audios/Alphabet/X.m4a";
import TS from "../../audios/Alphabet/TS.m4a";
import TCH from "../../audios/Alphabet/TCH.m4a";
import SH from "../../audios/Alphabet/SH.m4a";
import SCH from "../../audios/Alphabet/SCH.m4a";
import HC from "../../audios/Alphabet/HC.m4a";
import YEE from "../../audios/Alphabet/YEE.m4a";
import SC from "../../audios/Alphabet/SC.m4a";
import EA from "../../audios/Alphabet/EA.m4a";
import U from "../../audios/Alphabet/U.m4a";
import YA from "../../audios/Alphabet/YA.m4a";

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
      <div className="alphabet__cards ">
        {alphabet.map((card, index) => (
          <div className="alphabet__card-container" key={index}>
            <p className="aplhabet__card-number">{index + 1}</p>
            <div
              className="aplhabet__card-audio m-0"
              onClick={this.play}
              style={{ fill: "white" }}
            >
              <audio className="aplhabet__audio" src={audios[index]}></audio>
            </div>
            <div className="alphabet__card d-flex flex-column align-items-center justify-content-center">
              <p className="aplhabet__card-letter m-0">{card.letter}</p>
              <p className="alphabet__card-sound m-0">{card.sound}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default AlphabetCard;
