import React from "react";
import _random from "lodash/random";

const content = [
  "Evil Tina laughter.... 🤣🤣🤣",
  "I have a bad feeling about this ",
  "I'm making this up as I go ",
  "No more Romulan Ale",
  "Call me Ishmael 🐳",
  "It's just a flesh wound",
  "Y'all a bunch of comedians here",
  "Let the wookie win",
  "But why is the rum gone? 🍹"
];

const upperBound = content.length - 1;

export default class SmallBanner extends React.Component {
  constructor() {
    super();
    let randomIndex = _random(0, upperBound);
    this.state = {
      phrase: content[randomIndex]
    };

    this.updatePhrase = this.updatePhrase.bind(this);
  }

  updatePhrase() {
    let randomIndex = _random(0, upperBound);
    this.setState({
      phrase: content[randomIndex]
    });
  }

  render() {
    return <small style={{cursor:'pointer'}} onClick={this.updatePhrase}>{this.state.phrase}</small>;
  }
}
