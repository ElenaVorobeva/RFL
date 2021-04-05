import React from "react";
import GifPlayer from "react-gif-player";

import A from "../../images/gifs/Alphabet/А.gif";
import AStill from "../../images/gifs/Alphabet/А.jpg";

import B from "../../images/gifs/Alphabet/Б.gif";
import BStill from "../../images/gifs/Alphabet/Б.jpg";

import V from "../../images/gifs/Alphabet/В.gif";
import VStill from "../../images/gifs/Alphabet/В.jpg";

import G from "../../images/gifs/Alphabet/Г.gif";
import GStill from "../../images/gifs/Alphabet/Г.jpg";

import D from "../../images/gifs/Alphabet/Д.gif";
import DStill from "../../images/gifs/Alphabet/Д.jpg";
import E from "../../images/gifs/Alphabet/Е.gif";
import EStill from "../../images/gifs/Alphabet/Е.jpg";
import YO from "../../images/gifs/Alphabet/Йо.gif";
import YOStill from "../../images/gifs/Alphabet/Йо.jpg";
import J from "../../images/gifs/Alphabet/Ж.gif";
import JStill from "../../images/gifs/Alphabet/Ж.jpg";
import Z from "../../images/gifs/Alphabet/З.gif";
import ZStill from "../../images/gifs/Alphabet/З.jpg";
import I from "../../images/gifs/Alphabet/И.gif";
import IStill from "../../images/gifs/Alphabet/И.jpg";
import II from "../../images/gifs/Alphabet/Й.gif";
import IIStill from "../../images/gifs/Alphabet/Й.jpg";
import K from "../../images/gifs/Alphabet/К.gif";
import KStill from "../../images/gifs/Alphabet/К.jpg";
import L from "../../images/gifs/Alphabet/Л.gif";
import LStill from "../../images/gifs/Alphabet/Л.jpg";
import M from "../../images/gifs/Alphabet/М.gif";
import MStill from "../../images/gifs/Alphabet/М.jpg";
import N from "../../images/gifs/Alphabet/Н.gif";
import NStill from "../../images/gifs/Alphabet/Н.jpg";
import O from "../../images/gifs/Alphabet/О.gif";
import OStill from "../../images/gifs/Alphabet/О.jpg";
import P from "../../images/gifs/Alphabet/П.gif";
import PStill from "../../images/gifs/Alphabet/П.jpg";
import R from "../../images/gifs/Alphabet/Р.gif";
import RStill from "../../images/gifs/Alphabet/Р.jpg";
import S from "../../images/gifs/Alphabet/С.gif";
import SStill from "../../images/gifs/Alphabet/С.jpg";
import T from "../../images/gifs/Alphabet/Т.gif";
import TStill from "../../images/gifs/Alphabet/Т.jpg";
import Y from "../../images/gifs/Alphabet/У.gif";
import YStill from "../../images/gifs/Alphabet/У.jpg";
import F from "../../images/gifs/Alphabet/Ф.gif";
import FStill from "../../images/gifs/Alphabet/Ф.jpg";
import X from "../../images/gifs/Alphabet/Х.gif";
import XStill from "../../images/gifs/Alphabet/Х.jpg";
import TS from "../../images/gifs/Alphabet/Ц.gif";
import TSStill from "../../images/gifs/Alphabet/Ц.jpg";
import TCH from "../../images/gifs/Alphabet/Ч.gif";
import TCHStill from "../../images/gifs/Alphabet/Ч.jpg";
import SH from "../../images/gifs/Alphabet/Ш.gif";
import SHStill from "../../images/gifs/Alphabet/Ш.jpg";
import SCH from "../../images/gifs/Alphabet/Щ.gif";
import SCHStill from "../../images/gifs/Alphabet/Щ.jpg";
import HC from "../../images/gifs/Alphabet/ъ.gif";
import HCStill from "../../images/gifs/Alphabet/ъ.jpg";
import YEE from "../../images/gifs/Alphabet/ы.gif";
import YEEStill from "../../images/gifs/Alphabet/ы.jpg";
import SC from "../../images/gifs/Alphabet/ь.gif";
import SCStill from "../../images/gifs/Alphabet/ь.jpg";
import EA from "../../images/gifs/Alphabet/Э.gif";
import EAStill from "../../images/gifs/Alphabet/Э.jpg";
import U from "../../images/gifs/Alphabet/Ю.gif";
import UStill from "../../images/gifs/Alphabet/Ю.jpg";
import YA from "../../images/gifs/Alphabet/Я.gif";
import YAStill from "../../images/gifs/Alphabet/Я.jpg";

const Handwriting = () => {
  const handwritingGifs = [
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
  const handwritingStills = [
    AStill,
    BStill,
    VStill,
    GStill,
    DStill,
    EStill,
    YOStill,
    JStill,
    ZStill,
    IStill,
    IIStill,
    KStill,
    LStill,
    MStill,
    NStill,
    OStill,
    PStill,
    RStill,
    SStill,
    TStill,
    YStill,
    FStill,
    XStill,
    TSStill,
    TCHStill,
    SHStill,
    SCHStill,
    HCStill,
    YEEStill,
    SCStill,
    EAStill,
    UStill,
    YAStill,
  ];

  return (
    <section className="handwriting section_margin" id="handwriting">
      <h2 className="handwriting__title">Handwriting</h2>
      <p className="handwriting__description">
        At first Russian handwriting may seem complicated, but it actually isn
        {"'"}t. Once you learn the difference between a written letter and
        printed one, it will be easier to read and to write it yourself.
      </p>
      <div className="handwriting__cards">
        {handwritingGifs.map((card, index) => (
          <div className="handwriting__card">
            <GifPlayer
              className="handwriting__gif"
              gif={handwritingGifs[index]}
              still={handwritingStills[index]}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Handwriting;
