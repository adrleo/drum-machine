import "./App.css";
import React, { useState, useEffect } from "react";

const soundOne = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

// const soundTwo = [
//   {
//     keyCode: 81,
//     keyTrigger: "Q",
//     id: "Chord-1",
//     url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
//   },
//   {
//     keyCode: 87,
//     keyTrigger: "W",
//     id: "Chord-2",
//     url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
//   },
//   {
//     keyCode: 69,
//     keyTrigger: "E",
//     id: "Chord-3",
//     url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
//   },
//   {
//     keyCode: 65,
//     keyTrigger: "A",
//     id: "Shaker",
//     url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
//   },
//   {
//     keyCode: 83,
//     keyTrigger: "S",
//     id: "Open-HH",
//     url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
//   },
//   {
//     keyCode: 68,
//     keyTrigger: "D",
//     id: "Closed-HH",
//     url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
//   },
//   {
//     keyCode: 90,
//     keyTrigger: "Z",
//     id: "Punchy-Kick",
//     url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
//   },
//   {
//     keyCode: 88,
//     keyTrigger: "X",
//     id: "Side-Stick",
//     url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
//   },
//   {
//     keyCode: 67,
//     keyTrigger: "C",
//     id: "Snare",
//     url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
//   },
// ];

const KeyboardKey = ({ play, sound: { keyCode, keyTrigger, url, id } }) => {
  const handleKeydown = (e) => {
    console.log(e.keyCode);
    console.log(keyCode);
    console.log(e.keyCode === keyCode);
    if (e.keyCode === keyCode) {
      console.log(id);
      play(keyTrigger, id);
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
  }, []);

  return (
    <button className="drum-pad" onClick={() => play(keyTrigger, id)}>
      <audio className="clip" id={keyTrigger} src={url} />
      {keyTrigger}
    </button>
  );
};

const Keyboard = ({ play }) => {
  return (
    <div id="wrapper">
      {soundOne.map((sound) => (
        <KeyboardKey play={play} sound={sound} />
      ))}
    </div>
  );
};

const App = () => {
  const [soundName, setSoundName] = React.useState("");

  const play = (key, sound) => {
    const audio = document.getElementById(key);
    setSoundName(sound);
    console.log(sound);
    console.log(audio);
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <div id="drum-machine">
      <h1 id="display">{soundName}</h1>
      <Keyboard play={play} />
    </div>
  );
};

export default App;
