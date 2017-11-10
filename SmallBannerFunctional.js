import React from "react";
import _random from "lodash/random";

const content = [
  "Evil Tina laughter.... 🤣🤣🤣",
  "I have a bad feeling about this ",
  "I'm making this up as I go ",
  "No more Romulan Ale",
  "Call me Ishmael 🐳",
  "It's just a flesh wound"
];

const upperBound = content.length - 1;

export default function() {
  function updatePhrase() {
    console.log('You called this event handler');
  }

  let randomIndex = _random(0, upperBound);
  return <small onClick={updatePhrase}>{content[randomIndex]}</small>;
}
